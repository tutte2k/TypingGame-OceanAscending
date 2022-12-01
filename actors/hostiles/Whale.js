class Whale extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Whale.Animation, createVector(0, 50));
  }
  static loadAnimationFiles() {
    Whale.Animation = loadAnimation("./actors/hostiles/sprites/whale.webp", {
      size: [469, 234],
      frames: 66,
    });
  }
}
