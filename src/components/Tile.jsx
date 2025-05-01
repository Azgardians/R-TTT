function Tile({ className, value, onClick, playerTurn }) {
  let hoverClass = "";
  if (value === null && playerTurn !== null) {
    hoverClass = playerTurn === "X" ? "x-hover" : "o-hover";
  }
  return <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
    {value}
  </div>;
}

export default Tile;
