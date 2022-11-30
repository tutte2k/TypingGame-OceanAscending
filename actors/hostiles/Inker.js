class Inker extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Inker.Animation, createVector(-25, 7));
  }
  static loadAnimationFiles() {
    Inker.Animation = loadAnimation("./actors/hostiles/sprites/inker.png", {
      size: [105, 88],
      frames: 91,
    });
  }
}
