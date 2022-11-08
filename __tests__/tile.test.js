import Tile from "../src/tile.js";

describe("Tile", () => {
  let tileOne;

  beforeEach(() => {
    tileOne = new Tile();
  });

  test("Should create a Tile class object", () => {
    expect(tileOne.self).toEqual([[0, 0, 0],[0, 0, 0],[0, 0, 0]]);
  });
});