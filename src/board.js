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

  checkTiles() {}
}