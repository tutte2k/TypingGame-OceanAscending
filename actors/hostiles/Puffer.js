class Puffer extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Puffer.Animation, createVector(0, 70));
  }
  static loadAnimationFiles() {
    Puffer.Animation = loadAnimation("./actors/hostiles/sprites/puffer.png", {
      size: [124, 196],
      frames: 79,
    });
  }
}
