// Game logic utilities

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
]

export const checkWinner = (board) => {
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        winningCells: combination
      }
    }
  }
  return null
}

export const isBoardFull = (board) => {
  return board.every(cell => cell !== null)
}

export const getAvailableMoves = (board) => {
  return board
    .map((cell, index) => cell === null ? index : null)
    .filter(index => index !== null)
}

// Minimax algorithm for AI opponent
export const minimax = (board, depth, isMaximizing, alpha = -Infinity, beta = Infinity) => {
  const result = checkWinner(board)
  
  // Terminal states
  if (result && result.winner === 'O') return 10 - depth // AI wins
  if (result && result.winner === 'X') return depth - 10 // Human wins
  if (isBoardFull(board)) return 0 // Draw

  if (isMaximizing) {
    let bestScore = -Infinity
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O'
        const score = minimax(board, depth + 1, false, alpha, beta)
        board[i] = null
        bestScore = Math.max(score, bestScore)
        alpha = Math.max(alpha, score)
        if (beta <= alpha) break // Alpha-beta pruning
      }
    }
    return bestScore
  } else {
    let bestScore = Infinity
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'X'
        const score = minimax(board, depth + 1, true, alpha, beta)
        board[i] = null
        bestScore = Math.min(score, bestScore)
        beta = Math.min(beta, score)
        if (beta <= alpha) break // Alpha-beta pruning
      }
    }
    return bestScore
  }
}

export const getBestMove = (board, difficulty = 'hard') => {
  const availableMoves = getAvailableMoves(board)
  
  if (availableMoves.length === 0) return -1

  // Easy mode: random move with occasional good move
  if (difficulty === 'easy') {
    const randomChance = Math.random()
    if (randomChance < 0.7) {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)]
    }
  }

  // Medium mode: mix of good and random moves
  if (difficulty === 'medium') {
    const randomChance = Math.random()
    if (randomChance < 0.4) {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)]
    }
  }

  // Hard mode (default): always use minimax for best move
  let bestScore = -Infinity
  let bestMove = -1

  for (let move of availableMoves) {
    board[move] = 'O'
    const score = minimax(board, 0, false)
    board[move] = null

    if (score > bestScore) {
      bestScore = score
      bestMove = move
    }
  }

  return bestMove
}

export const getGameStatus = (board) => {
  const result = checkWinner(board)
  if (result) {
    return {
      status: 'finished',
      winner: result.winner,
      winningCells: result.winningCells
    }
  }
  
  if (isBoardFull(board)) {
    return {
      status: 'finished',
      winner: 'draw',
      winningCells: []
    }
  }
  
  return {
    status: 'playing',
    winner: null,
    winningCells: []
  }
}