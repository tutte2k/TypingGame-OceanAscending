class Bubble {
  static Animation = null;

  constructor(zapDepth) {
    this.position = createVector(100, height / 2 - 20);
    this.intact = true;
    this.zapDepth = zapDepth;
  }
  draw() {
    animation(Bubble.Animation, this.position.x, this.position.y);
  }
  update() {
    if (player.depth > this.zapDepth + 10) {
      this.intact = false;
      player.invulnerable = false;
    }
  }
  erode(keyCode) {}
  static loadAnimationFiles() {
    Bubble.Animation = loadAnimation(
      "./actors/environment/sprites/bubble.webp",
      {
        size: [300, 300],
        frames: 75,
      }
    );
  }
}
