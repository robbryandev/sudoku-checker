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
});

describe("Board.checkTiles", () => {
  let boardVar;

  beforeEach(() => {
    boardVar = new Board();
  });

  test("Should check if board tiles are valid", () => {
    expect(boardVar.checkTiles()).toEqual(true);
  });
});

describe("Board.checkRows", () => {
  let boardVar;

  beforeEach(() => {
    boardVar = new Board();
  });

  test("Should check if all empty rows are valid", () => {
    expect(boardVar.checkRows()).toEqual(true);
  });

  test("Should check if a bad row is valid", () => {
    boardVar.tiles[0].self[0] = [1, 2, 2];
    expect(boardVar.checkRows()).toEqual(false);
  });
});

describe("Board.checkColumns", () => {
  let boardVar;

  beforeEach(() => {
    boardVar = new Board();
  });

  test("Should check if all empty columns are valid", () => {
    expect(boardVar.checkColumns()).toEqual(true);
  });

  test("Should check if bad columns are valid", () => {
    boardVar.tiles[0].self[0] = [1, 0, 0];
    boardVar.tiles[3].self[1] = [1, 0, 0];
    expect(boardVar.checkColumns()).toEqual(false);
  });
});

describe("Board.isValid", () => {
  let boardVar;

  beforeEach(() => {
    boardVar = new Board();
  });

  test("Should check if an empty board is valid", () => {
    expect(boardVar.isValid()).toEqual(true);
  });

  test("Should check if bad board is valid", () => {
    boardVar.tiles[0].self[0] = [1, 0, 0];
    boardVar.tiles[3].self[1] = [1, 0, 0];
    expect(boardVar.isValid()).toEqual(false);
  });
});

describe("Board.isFilled", () => {
  let boardVar;

  beforeEach(() => {
    boardVar = new Board();
  });

  test("Should check if an empty board is filled", () => {
    expect(boardVar.isFilled()).toEqual(false);
  });
});