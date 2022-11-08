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

  checkRows() {}
}