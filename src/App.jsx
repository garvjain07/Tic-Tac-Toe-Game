import { useState } from 'react'
import GameMenu from './components/GameMenu'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import './App.css'

const GAME_MODES = {
  MENU: 'menu',
  PVP: 'player-vs-player',
  PVC: 'player-vs-computer'
}

function App() {
  const [gameMode, setGameMode] = useState(GAME_MODES.MENU)
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
    computer: 0,
    draws: 0
  })

  const handleModeSelect = (mode) => {
    setGameMode(mode)
    // Reset scores when switching game modes
    setScores({
      player1: 0,
      player2: 0,
      computer: 0,
      draws: 0
    })
  }

  const handleBackToMenu = () => {
    setGameMode(GAME_MODES.MENU)
  }

  const updateScores = (winner) => {
    setScores(prev => ({
      ...prev,
      [winner]: prev[winner] + 1
    }))
  }

  const resetScores = () => {
    setScores({
      player1: 0,
      player2: 0,
      computer: 0,
      draws: 0
    })
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Tic Tac Toe</h1>
          <p className="app-subtitle">Modern • Interactive • Fun</p>
        </header>

        {gameMode === GAME_MODES.MENU ? (
          <GameMenu onModeSelect={handleModeSelect} />
        ) : (
          <div className="game-container">
            <ScoreBoard 
              scores={scores} 
              gameMode={gameMode}
              onReset={resetScores}
            />
            <GameBoard 
              gameMode={gameMode}
              onScoreUpdate={updateScores}
              onBackToMenu={handleBackToMenu}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
