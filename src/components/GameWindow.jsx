import { useState } from "react";
import Board from "./Board";
import Player from "../factories/Player";

const GameWindow = () => {
  const [newGame, setNewGame] = useState(false);
  const [name, setName] = useState("");
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "") return;
    setPlayer1(new Player(name));
    setPlayer2(new Player("cpu", "cpu"));
    setNewGame(true);
  };

  return (
    <div>
      {!newGame && (
        <form>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick(e)}>Comenzar</button>
        </form>
      )}
      {newGame && (
        
        <>
          <span className="turn">Turno de</span>
          <div className="game">
            <Board board={player1.gameBoard.board} playerName={player1.name} init={() => player1.gameBoard.init()}/>
            <Board board={player2.gameBoard.board} playerName={player2.name} init={() => player2.gameBoard.init()}/>
          </div>
        </>
      )}
    </div>
  );
};

export default GameWindow;
