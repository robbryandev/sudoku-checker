import Tile from "../src/tile.js";

describe("Tile", () => {
  let tileOne;

  beforeEach(() => {
    tileOne = new Tile();
  });

  test("Should create a Tile class object", () => {
    expect(tileOne.self).toEqual([[0, 0, 0],[0, 0, 0],[0, 0, 0]]);
  });

  test("Should check if an empty tile is valid", () => {
    expect(tileOne.isValid()).toEqual(true);
  });

  test("Should check if an full 1-9 tile is valid", () => {
    tileOne.self = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(tileOne.isValid()).toEqual(true);
  });

  test("Should check if a badly filled tile is valid", () => {
    tileOne.self = [[1, 3, 3], [4, 5, 6], [7, 8, 9]];
    expect(tileOne.isValid()).toEqual(false);
  });
});