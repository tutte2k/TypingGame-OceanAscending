class Shellie extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Shellie.Animation, createVector(12, 7));
  }
  static loadAnimationFiles() {
    Shellie.Animation = loadAnimation("./actors/hostiles/shellie.png", {
      size: [264, 224],
      frames: 60,
    });
  }
}
