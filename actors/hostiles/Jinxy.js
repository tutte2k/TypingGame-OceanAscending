class Jinxy extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Jinxy.Animation, createVector(-35, -10));
  }
  static loadAnimationFiles() {
    Jinxy.Animation = loadAnimation("./actors/hostiles/jinxy.png", {
      size: [170, 182],
      frames: 38,
    });
  }
}
