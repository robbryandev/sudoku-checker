import Board from "../src/board.js";

describe("Board", () => {
  let boardVar;

  beforeEach(() => {
    boardVar = new Board();
  });

  test("Should create a board containing 9 empty tile objects", () => {
    expect(boardVar.tiles).toEqual(
      [
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] },
        { self: [[0, 0, 0], [0, 0, 0], [0, 0, 0]] }
      ]);
  });

  test("Should check if board tiles are valid", () => {
    expect(boardVar.checkTiles()).toEqual(true);
  });
});