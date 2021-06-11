import Player from "../Player";

describe("player functions", () => {
  let player;
  let playerCpu;
  beforeEach(() => {
    player = new Player("yo");
    playerCpu = new Player("cpu", "cpu");
  });
  it("correctly autoplay cpu", () => {
    playerCpu.autoplay(player.gameBoard);
    let res = player.gameBoard.board.flat();
    expect(res.some((item) => item.isShot === true)).toBeTruthy();
  });
});
