class Shake {
  constructor(zapDepth) {
    this.zapDepth = zapDepth;
    shake = true;
  }
  draw() {}
  update() {
    if (player.depth > this.zapDepth + 1) {
      this.intact = false;
      shake = false;
    }
  }
  erode(keyCode) {}
}
