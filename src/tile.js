export default class Tile {
  constructor() {
    this.self = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
  }

  isValid() {
    let valid = true;
    let used = [];
    this.self.forEach((row) => {
      for (let i = 0; i < 3; i++) {
        used.includes(row[i]) ? valid = false : used.push(row[i]);
      }
    });
    return valid;
  }
}