class Leona extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Leona.Animation, createVector(-50, 40));
  }
  static loadAnimationFiles() {
    Leona.Animation = loadAnimation("./actors/hostiles/sprites/leona.png", {
      size: [364, 257],
      frames: 61,
    });
  }
}
