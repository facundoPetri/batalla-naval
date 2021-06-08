/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import Board from "./Board";
import Player from "../factories/Player";
import StartGame from "./StartGame";
import GameFinished from "./GameFinished";

const GameWindow = () => {
  const [newGame, setNewGame] = useState(false);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [gameWon, setgameWon] = useState(false);

  const [currentPlayer, setCurrentPlayer] = useState(null);
  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === player1.name ? "cpu" : player1.name);
  };

  const [name, setName] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  useEffect(() => {
    if (player1) {
      setCurrentPlayer(player1.name);
    }
  }, [player1]);

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "") return;
    setPlayer1(new Player(name));
    setPlayer2(new Player("cpu", "cpu"));
    setNewGame(true);
  };

  // jugada de la maquina y cambiar de turno
  const cpuPlay = () => {
    player2.autoplay(player1.gameBoard);
    switchPlayer();
  };
  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (currentPlayer === "cpu") {
        cpuPlay();
      }
    }, 500);
    return () => clearTimeout(timer1);
  }, [currentPlayer]);

  // usar useRef para saltear el primer useeffect
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    // preguntar a que gameboard se le hundieron los barcos
    // y el que de true es que gano el OPONENTE
    if (player1.gameBoard.areAllShipsSunk()) {
      setgameWon("cpu");
    }
    if (player2.gameBoard.areAllShipsSunk()) {
      setgameWon(name);
    }
  }, [currentPlayer]);
  return (
    <div>
      {gameWon && <GameFinished winner={gameWon} />}
      {!gameWon && !newGame && (
        <StartGame
          name={name}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      )}
      {!gameWon && newGame && (
        <>
          <span className="turn">Turno de {currentPlayer}</span>
          <div className="game">
            <Board
              gameBoard={player1.gameBoard}
              currentPlayer={currentPlayer}
              switchPlayer={switchPlayer}
              player={player1.name}
            />
            <Board
              gameBoard={player2.gameBoard}
              currentPlayer={currentPlayer}
              switchPlayer={switchPlayer}
              player={player2.name}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GameWindow;
