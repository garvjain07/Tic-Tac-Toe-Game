import { useState, useEffect, useCallback } from 'react'
import Cell from './Cell'
import { getGameStatus, getBestMove } from '../utils/gameLogic'
import './GameBoard.css'

const GameBoard = ({ gameMode, onScoreUpdate, onBackToMenu }) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [gameStatus, setGameStatus] = useState({ status: 'playing', winner: null, winningCells: [] })
  const [isThinking, setIsThinking] = useState(false)
  const [difficulty, setDifficulty] = useState('hard')
  const [scoreUpdated, setScoreUpdated] = useState(false)

  const isPVP = gameMode === 'player-vs-player'
  const isPVC = gameMode === 'player-vs-computer'

  // Check game status whenever board changes
  useEffect(() => {
    const status = getGameStatus(board)
    setGameStatus(status)
    
    // Only update score once when game becomes finished
    if (status.status === 'finished' && !scoreUpdated) {
      setScoreUpdated(true)
      // Update scores
      if (status.winner === 'X') {
        onScoreUpdate('player1')
      } else if (status.winner === 'O') {
        onScoreUpdate(isPVP ? 'player2' : 'computer')
      } else {
        onScoreUpdate('draws')
      }
    }
  }, [board, isPVP, onScoreUpdate, scoreUpdated])

  // Computer move logic
  const makeComputerMove = useCallback(() => {
    if (gameStatus.status === 'finished' || currentPlayer !== 'O' || !isPVC) return

    setIsThinking(true)
    
    // Add delay for better UX
    setTimeout(() => {
      const bestMove = getBestMove([...board], difficulty)
      if (bestMove !== -1) {
        setBoard(prev => {
          const newBoard = [...prev]
          newBoard[bestMove] = 'O'
          return newBoard
        })
        setCurrentPlayer('X')
      }
      setIsThinking(false)
    }, 500 + Math.random() * 1000) // Random delay between 0.5-1.5s
  }, [board, currentPlayer, gameStatus.status, isPVC, difficulty])

  // Trigger computer move when it's computer's turn
  useEffect(() => {
    if (isPVC && currentPlayer === 'O' && gameStatus.status === 'playing') {
      makeComputerMove()
    }
  }, [currentPlayer, isPVC, gameStatus.status, makeComputerMove])

  const handleCellClick = (index) => {
    if (board[index] || gameStatus.status === 'finished' || isThinking) return

    // In PVC mode, only allow human (X) to click
    if (isPVC && currentPlayer === 'O') return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)
    
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
    setGameStatus({ status: 'playing', winner: null, winningCells: [] })
    setIsThinking(false)
    setScoreUpdated(false)
  }

  const getStatusMessage = () => {
    if (gameStatus.status === 'finished') {
      if (gameStatus.winner === 'draw') return '🤝 It\'s a Draw!'
      if (gameStatus.winner === 'X') return '❌ Player 1 Wins!'
      if (gameStatus.winner === 'O') {
        return isPVP ? '⭕ Player 2 Wins!' : '🤖 Computer Wins!'
      }
    }
    
    if (isThinking) return '🤖 Computer is thinking...'
    
    if (currentPlayer === 'X') return '❌ Player 1\'s Turn'
    return isPVP ? '⭕ Player 2\'s Turn' : '🤖 Computer\'s Turn'
  }

  const getCurrentPlayerDisplay = () => {
    if (gameStatus.status === 'finished') return null
    if (currentPlayer === 'X') return 'Player 1 (❌)'
    return isPVP ? 'Player 2 (⭕)' : 'Computer (⭕)'
  }

  return (
    <div className="game-board-container">
      <div className="game-controls">
        <button 
          className="back-button"
          onClick={onBackToMenu}
        >
          ← Back to Menu
        </button>

        {isPVC && (
          <div className="difficulty-selector">
            <label>Difficulty:</label>
            <select 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)}
              disabled={gameStatus.status === 'playing' && board.some(cell => cell !== null)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        )}
      </div>

      <div className="game-board">
        <div className="game-status">
          <h2 className="status-message">{getStatusMessage()}</h2>
          {getCurrentPlayerDisplay() && (
            <p className="current-player">Current Player: {getCurrentPlayerDisplay()}</p>
          )}
        </div>

        <div className="board-grid">
          {board.map((cell, index) => (
            <Cell
              key={index}
              index={index}
              value={cell}
              onClick={() => handleCellClick(index)}
              isWinning={gameStatus.winningCells.includes(index)}
            />
          ))}
        </div>

        <div className="game-actions">
          <button 
            className="reset-game-button"
            onClick={resetGame}
          >
            🔄 New Game
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameBoard