class Ship {
  constructor(length) {
    this.ship = Array(length).fill("o");
    this.length = length;
  }
  hit(index) {
    this.ship[index] = "i";
  }
  isSunk() {
    return this.ship.every((curr) => curr === "i");
  }
}

export default Ship