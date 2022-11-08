import Tile, { checkSquares } from "./tile.js";

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
      let tileSet = [tileOne, tileTwo, tileThree];
      for (let r = 0; r < 3; r++) {
        // Get squares in tile row
        let squares = [];
        tileSet.forEach((ts) => {
          ts.self[r].forEach((square) => {
            squares.push(square);
          });
        });
        // check if tile row is valid
        if (!checkSquares(squares)) {
          valid = false;
        }
      }
    }
    return valid;
  }

  checkColumns() {
    let valid = true;
    for (let i = 0; i < 3; i++) {
      // Get board column tiles
      let tileOne = this.tiles[i];
      let tileTwo = this.tiles[i + 3];
      let tileThree = this.tiles[i + 6];
      let tileSet = [tileOne, tileTwo, tileThree];
      for (let c = 0; c < 3; c++) {
        // Get tile column squares
        let squares = [];
        for (let tr = 0; tr < 3; tr++) {
          tileSet.forEach((ts) => {
            squares.push(ts.self[tr][c]);
          });
        }

        // Check if column is valid
        if (!checkSquares(squares)) {
          valid = false;
        }
      }
    }
    return valid;
  }

  isValid() {}
}