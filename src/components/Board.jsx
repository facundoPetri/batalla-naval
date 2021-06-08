import Cell from "./Cell";

const Board = ({ gameBoard, currentPlayer, switchPlayer, player }) => {
  let i = 0;
  const drawBoard = gameBoard.board.map((row, y) =>
    row.map((item, x) => {
      i++;
      return (
        <Cell
          name={player}
          currentPlayer={currentPlayer}
          switchPlayer={switchPlayer}
          hasShip={item.hasShip}
          gameBoard={gameBoard}
          coords={[x, y]}
          key={i}
        />
      );
    })
  );

  // anular eventos al que no le toca el turno
  const style = {
    pointerEvents: "none",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  };
  return (
    <div>
      <p className="name">{player}</p>
      <div className="board" style={currentPlayer === player ? style : null}>
        {drawBoard}
      </div>
    </div>
  );
};

export default Board;
