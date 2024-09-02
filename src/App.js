function Square({ label }) {
  return <button className="square">{label}</button>
}
export default function Board() {
  return(
    <>
      <div className="board-row">
        <Square label="1" />
        <Square label="2" />
        <Square label="3" />
      </div>
      <div className="board-row">
        <Square label="4" />
        <Square label="5" />
        <Square label="6" />
      </div>
      <div className="board-row">
        <Square label="7" />
        <Square label="8" />
        <Square label="9" />
      </div>
    </>
  )
}

