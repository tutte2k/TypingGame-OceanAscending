class Leona extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Leona.Animation, createVector(-50, 15));
  }
  static loadAnimationFiles() {
    Leona.Animation = loadAnimation("./actors/hostiles/sprites/leona.png", {
      size: [500, 500],
      frames: 61,
    });
  }
}
