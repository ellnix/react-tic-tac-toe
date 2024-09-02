import { useState } from 'react'

function Square({label, onSquareClick}) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
    >
      {label}
    </button>
  )
}
export default function Board() {
  const [nextPlayer, setNextPlayer] = useState('X')
  const [squares, setSquares] = useState(new Array(9).fill(null))

  function clickSquare(square) {
    if (squares[square] !== null) return

    const nextSquares = squares.slice()
    nextSquares[square] = nextPlayer
    setNextPlayer(nextPlayer == 'X' ? 'O' : 'X')
    setSquares(nextSquares)
  }

  return(
    <>
      <div className="board-row">
        <Square label={squares[0]} onSquareClick={() => clickSquare(0)} />
        <Square label={squares[1]} onSquareClick={() => clickSquare(1)} />
        <Square label={squares[2]} onSquareClick={() => clickSquare(2)} />
      </div>
      <div className="board-row">
        <Square label={squares[3]} onSquareClick={() => clickSquare(3)} />
        <Square label={squares[4]} onSquareClick={() => clickSquare(4)} />
        <Square label={squares[5]} onSquareClick={() => clickSquare(5)} />
      </div>
      <div className="board-row">
        <Square label={squares[6]} onSquareClick={() => clickSquare(6)} />
        <Square label={squares[7]} onSquareClick={() => clickSquare(7)} />
        <Square label={squares[8]} onSquareClick={() => clickSquare(8)} />
      </div>
    </>
  )
}

