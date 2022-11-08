import Tile from "./tile.js";

export default class Board {
  constructor() {
    let tileArray = [];
    for (let i = 0; i < 9; i++) {
      let newTile = new Tile();
      tileArray.push(newTile);
    }

    this.tiles = tileArray;
  }

  checkTiles() {
    let valid = true;
    this.tiles.forEach((tile) => {
      if (!tile.isValid()) {
        valid = false;
      }
    });
    return valid;
  }

  checkRows() {
    let valid = true;
    for (let i = 0; i < 3; i++) {
      // Get tiles in board row
      let tileOne = this.tiles[i];
      let tileTwo = this.tiles[i + 1];
      let tileThree = this.tiles[i + 2];
      for (let r = 0; r < 3; r++) {
        // Get squares in tile row
        let squares = [];
        let tileSet = [tileOne, tileTwo, tileThree];
        tileSet.forEach((ts) => {
          ts.self[r].forEach((square) => {
            squares.push(square);
          });
        });
        // check if tile row is valid
        let used = [];
        squares.forEach((sq) => {
          if (sq > 0) {
            used.includes(sq) ? valid = false : used.push(sq);
          }
        });
      }
    }
    return valid;
  }
}