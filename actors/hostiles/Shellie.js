class Shellie extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Shellie.Animation, createVector(12, 7));
  }
  static loadAnimationFiles() {
    Shellie.Animation = loadAnimation("./actors/hostiles/sprites/shellie.png", {
      size: [299, 259],
      frames: 60,
    });
  }
}
