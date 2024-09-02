import { useState } from 'react'

function calculateWinner(squares) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]

  const winning_line = wins
    .map(sqs => sqs.map(sq => squares[sq]))
    .find(sqs => sqs.reduce((acc, sq) => acc == sq ? sq : null))

  return winning_line && winning_line[0] || null
}

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

function Board({ squares, onPlay, nextPlayer}) {
  let board_status;
  const winner = calculateWinner(squares)

  if (winner) {
    board_status = "Winner: " + winner
  } else {
    board_status = "Next: " + nextPlayer
  }

  function clickSquare(square) {
    if (squares[square] !== null || winner) return

    const nextSquares = squares.slice()
    nextSquares[square] = nextPlayer
    onPlay(nextSquares)
  }

  return(
    <>
      <div className="status">{board_status}</div>
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

export default function Game() {
  const [nextPlayer, setNextPlayer] = useState('X')
  const [history, setHistory] = useState([new Array(9).fill(null)])

  const currentSquares = history[history.length - 1]

  function handlePlay(nextSquares) {
    setNextPlayer(nextPlayer == 'X' ? 'O' : 'X')
    setHistory([...history, nextSquares])
  }

  return(
    <div className="game">
        <div className="game-board">
          <Board nextPlayer={nextPlayer} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>
          </ol>
        </div>
    </div>
  )
}

