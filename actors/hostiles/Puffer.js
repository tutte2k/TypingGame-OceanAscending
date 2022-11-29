class Puffer extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Puffer.Animation, createVector(5, 40));
  }
  static loadAnimationFiles() {
    Puffer.Animation = loadAnimation("./actors/hostiles/sprites/puffer.png", {
      size: [250, 250],
      frames: 40,
    });
  }
}
