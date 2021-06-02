import Gameboard from "./Gameboard"

class Player {
  constructor(name, type = "human") {
    this.name = name;
    this.type = type;
    this.gameBoard = new Gameboard();
  }

  play(x, y, enemyBoard) {
    enemyBoard.receiveAttack([x, y]);
  }

  autoplay(enemyBoard) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    if (enemyBoard.board[y][x].isShot === true) {
      this.autoplay();
    } else {
      enemyBoard.receiveAttack([x, y]);
    }
  }
}

export default Player