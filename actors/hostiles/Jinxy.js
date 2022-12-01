class Jinxy extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Jinxy.Animation, createVector(-35, -10));
  }
  static loadAnimationFiles() {
    Jinxy.Animation = loadAnimation("./actors/hostiles/sprites/jinxy.webp", {
      size: [166, 162],
      frames: 38,
    });
  }
}
