import './ScoreBoard.css'

const ScoreBoard = ({ scores, gameMode, onReset }) => {
  const isPVP = gameMode === 'player-vs-player'

  return (
    <div className="scoreboard">
      <div className="scoreboard-content">
        <h3 className="scoreboard-title">Score Board</h3>
        
        <div className="scores-grid">
          <div className="score-item player1">
            <div className="score-icon">❌</div>
            <div className="score-info">
              <span className="score-label">Player 1</span>
              <span className="score-value">{scores.player1}</span>
            </div>
          </div>

          <div className="score-item draws">
            <div className="score-icon">🤝</div>
            <div className="score-info">
              <span className="score-label">Draws</span>
              <span className="score-value">{scores.draws}</span>
            </div>
          </div>

          <div className="score-item player2">
            <div className="score-icon">⭕</div>
            <div className="score-info">
              <span className="score-label">
                {isPVP ? 'Player 2' : 'Computer'}
              </span>
              <span className="score-value">
                {isPVP ? scores.player2 : scores.computer}
              </span>
            </div>
          </div>
        </div>

        <button 
          className="reset-button"
          onClick={onReset}
          title="Reset all scores"
        >
          🔄 Reset Scores
        </button>
      </div>
    </div>
  )
}

export default ScoreBoard