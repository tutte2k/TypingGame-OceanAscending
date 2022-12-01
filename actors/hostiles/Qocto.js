class Qocto extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Qocto.Animation, createVector(3, -20));
  }
  static loadAnimationFiles() {
    Qocto.Animation = loadAnimation("./actors/hostiles/sprites/qocto.webp", {
      size: [430, 227],
      frames: 60,
    });
  }
}
