import { useState } from 'react'

function Square() {
  const [squareValue, setSquare] = useState(null)
  
  function tickSquare() {
    setSquare('X')
  }

  return (
    <button 
      className="square" 
      onClick={tickSquare}
    >
      {squareValue}
    </button>
  )
}
export default function Board() {
  return(
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

