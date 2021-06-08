/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const Cell = ({
  name,
  currentPlayer,
  switchPlayer,
  hasShip,
  gameBoard,
  coords,
}) => {
  // array destruct las coords
  let [x, y] = coords;

  const [class1, setclass1] = useState(
    hasShip && name !== "cpu" ? "cell has-ship" : `cell ${name}`
  );
  const [shotDisplay, setshotDisplay] = useState(null);
  const [currentCell, setcurrentCell] = useState(gameBoard.board[y][x].isShot);

  const handleClick = () => {
    // llamar a la funcion para recibir el ataque y cambiar el gameboard
    if (gameBoard.receiveAttack([x, y]) === false) {
      return;
    } else {
      gameBoard.receiveAttack([x, y]);
    }
    // cambiar de turno
    switchPlayer();
  };

  useEffect(() => {
    // usando los datos cambiados del gameboard pintar en el DOM segun corresponda
    if (currentCell) {
      setclass1(class1 + " is-shot");
      if (hasShip) {
        setshotDisplay("x");
      }
    }
  }, [currentCell, hasShip]);

  useEffect(() => {
    setcurrentCell(gameBoard.board[y][x].isShot);
  });

  return (
    <div onClick={handleClick} className={class1}>
      {shotDisplay}
    </div>
  );
};

export default Cell;
