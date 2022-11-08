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
    expect(tileOne.isValid()).toEqual(false);
  });
});