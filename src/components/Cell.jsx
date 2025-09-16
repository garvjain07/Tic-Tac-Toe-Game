import './Cell.css'

const Cell = ({ value, onClick, isWinning, index }) => {
  const getCellContent = () => {
    if (value === 'X') return '❌'
    if (value === 'O') return '⭕'
    return ''
  }

  return (
    <button
      className={`cell ${isWinning ? 'winning' : ''} ${value ? 'filled' : 'empty'}`}
      onClick={onClick}
      disabled={!!value}
      data-index={index}
    >
      <span className="cell-content">{getCellContent()}</span>
    </button>
  )
}

export default Cell