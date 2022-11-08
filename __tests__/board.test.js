import Board from "../src/board.js";

describe("Example", () => {
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
});