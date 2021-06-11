import Gameboard from "../Gameboard";
import Ship from "../Ship";

describe("funciones gameboard", () => {
  let gameboardEjemplo;
  beforeEach(() => {
    gameboardEjemplo = new Gameboard();
  });
  it("devuelve un gameboard vacio", () => {
    expect(new Gameboard(2).board).toEqual([
      [
        { hasShip: false, isShot: false },
        { hasShip: false, isShot: false },
      ],
      [
        { hasShip: false, isShot: false },
        { hasShip: false, isShot: false },
      ],
    ]);
  });
  it("devuelve las naves que hay en el gameboard", () => {
    expect(gameboardEjemplo.fleet).toEqual([
      { ship: new Ship(1), coords: [] },
      { ship: new Ship(1), coords: [] },
      { ship: new Ship(2), coords: [] },
      { ship: new Ship(2), coords: [] },
      { ship: new Ship(3), coords: [] },
      { ship: new Ship(3), coords: [] },
      { ship: new Ship(4), coords: [] },
    ]);
  });
  it("la celda recibe el ataque correspondiente", () => {
    gameboardEjemplo.receiveAttack([0, 0]);
    expect(gameboardEjemplo.board[0][0].isShot).toBe(true);
  });
  it("pone el ship correctamente", () => {
    gameboardEjemplo.placeShip([[0, 0]]);
    let res = gameboardEjemplo.board.flat();
    expect(res.some((item) => item.hasShip === true)).toBeTruthy();
  });
  it("chequea que en la celda no haya otra ship", () => {
    gameboardEjemplo.placeShip([[0, 0]])
    expect(gameboardEjemplo.checkCollisionsWithShips([0,0])).toBeTruthy()
  })
  it("chequea que en la celda no haya ninguna ship", () => {
    expect(gameboardEjemplo.checkCollisionsWithShips([0,0])).toBeFalsy()
  })
});
