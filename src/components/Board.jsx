import Cell from "./Cell";

const Board = ({ board, playerName, init }) => {
  init()
  let drawBoard = board.map((row) =>
    row.map((item, index) => (
      <Cell name={playerName} hasShip={item.hasShip} isShot={item.isShot} key={index} />
    ))
  );
  return (
    <div>
      <p className="name">{playerName}</p>
      <div className="board">{drawBoard}</div>
    </div>
  );
};

export default Board;
