class Death {
  static Animation = null;

  constructor(zapDepth) {
    this.position = createVector(width / 2, height / 2);
    this.intact = true;
    this.zapDepth = zapDepth;
  }
  draw() {
    animation(Death.Animation, this.position.x, this.position.y);
  }
  update() {
    if (player.depth > this.zapDepth + 1) {
      this.intact = false;
    }
  }
  erode(keyCode) {}
  static loadAnimationFiles() {
    Death.Animation = loadAnimation("./actors/environment/sprites/death.webp", {
      size: [1200, 1200],
      frames: 23,
    });
  }
}
