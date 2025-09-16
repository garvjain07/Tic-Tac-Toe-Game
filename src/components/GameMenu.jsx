import './GameMenu.css'

const GameMenu = ({ onModeSelect }) => {
  return (
    <div className="game-menu">
      <div className="menu-content">
        <h2 className="menu-title">Choose Game Mode</h2>
        
        <div className="menu-buttons">
          <button 
            className="menu-button pvp-button"
            onClick={() => onModeSelect('player-vs-player')}
          >
            <div className="button-icon">👥</div>
            <div className="button-text">
              <h3>Player vs Player</h3>
              <p>Play with a friend locally</p>
            </div>
          </button>

          <button 
            className="menu-button pvc-button"
            onClick={() => onModeSelect('player-vs-computer')}
          >
            <div className="button-icon">🤖</div>
            <div className="button-text">
              <h3>Player vs Computer</h3>
              <p>Challenge the AI opponent</p>
            </div>
          </button>
        </div>

        <div className="menu-footer">
          <p>Built with React • Modern Design</p>
        </div>
      </div>
    </div>
  )
}

export default GameMenu