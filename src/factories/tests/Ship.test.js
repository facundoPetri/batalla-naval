import Ship from "../Ship";

describe("funciones ship", () => {
  let shipEjemplo;
  beforeEach(() => {
    shipEjemplo = new Ship(3);
  });
  it("devuelve correctamente un ship", () => {
    expect(shipEjemplo).toEqual({ ship: ["o", "o", "o"], length: 3 });
  });
  it("recibe correctamente un hit", () => {
    shipEjemplo.hit(1);
    expect(shipEjemplo.ship).toEqual(["o", "i", "o"]);
  });
  it("detecta correctamente si el ship se hundio", () => {
    shipEjemplo.hit(0);
    shipEjemplo.hit(1);
    shipEjemplo.hit(2);
    expect(shipEjemplo.isSunk()).toBeTruthy();
  });
  it("detecta correctamente si el ship no se hundio", () => {
    shipEjemplo.hit(0);
    shipEjemplo.hit(2);
    expect(shipEjemplo.isSunk()).toBeFalsy();
  });
});
