import Gameboard from "./Gameboard";

class Player {
  constructor(name, type = "human") {
    this.name = name;
    this.type = type;
    this.gameBoard = new Gameboard();
    this.gameBoard.init();
  }

  autoplay(playerBoard) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    if (playerBoard.board[y][x].isShot === true) {
      this.autoplay(playerBoard);
    } else {
      playerBoard.receiveAttack([x, y]);
    }
  }
}

export default Player;
