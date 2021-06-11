import Ship from "./Ship";

class Gameboard {
  constructor(size = 10) {
    this.board = Array(size)
      .fill({ hasShip: false, isShot: false })
      .map((x) => Array(size).fill({ hasShip: false, isShot: false }));
    this.fleet = [
      { ship: new Ship(1), coords: [] },
      { ship: new Ship(1), coords: [] },
      { ship: new Ship(2), coords: [] },
      { ship: new Ship(2), coords: [] },
      { ship: new Ship(3), coords: [] },
      { ship: new Ship(3), coords: [] },
      { ship: new Ship(4), coords: [] },
    ];
  }

  receiveAttack(coord) {
    let [x, y] = coord;
    if (this.board[y][x].isShot) return false;
    this.board[y][x] = { ...this.board[y][x], isShot: true };
    if (this.board[y][x].hasShip) {
      for (let i = 0; i < this.fleet.length; i++) {
        for (let j = 0; j < this.fleet[i].coords.length; j++) {
          if (
            JSON.stringify(this.fleet[i].coords[j]) === JSON.stringify(coord)
          ) {
            this.fleet[i].ship.hit(j);
          }
        }
      }
    }
  }

  // tomar un punto en el mapa y verificar si tiene una ship
  checkCollisionsWithShips(coord) {
    let [x, y] = coord;
    return this.board[y][x].hasShip;
  }

  // tomar la longitud del ship y devolver un array con las
  // coordenadas contiguas dependiendo de la long, de los bordes y el orden
  setRandomCoords(shipLength) {
    let order = Math.random() < 0.5 ? "vertical" : "horizontal";

    let coords = [];

    if (order === "horizontal") {
      let x = Math.floor(Math.random() * (11 - shipLength));
      let y = Math.floor(Math.random() * 10);

      for (let i = 0; i < shipLength; i++) {
        coords.push([x + i, y]);
      }
    } else {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * (11 - shipLength));

      for (let i = 0; i < shipLength; i++) {
        coords.push([x, y + i]);
      }
    }
    return coords;
  }

  placeShip(coords) {
    coords.forEach((coord) => {
      let [x, y] = coord;
      this.board[y][x] = { hasShip: true, isShot: false };
    });
  }

  areAllShipsSunk() {
    return this.fleet.every((shipInfo) => shipInfo.ship.isSunk());
  }

  init() {
    this.fleet.forEach((shipInfo) => {
      // seguir pidiendo coords hasta que no coicidan en el mapa con otra ship
      do {
        shipInfo.coords = this.setRandomCoords(shipInfo.ship.length);
      } while (
        shipInfo.coords.some((coord) => this.checkCollisionsWithShips(coord))
      );

      this.placeShip(shipInfo.coords);
    });
  }
}

export default Gameboard;
