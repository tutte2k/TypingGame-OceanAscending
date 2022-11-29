class Qocto extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Qocto.Animation, createVector(10, 0));
  }
  static loadAnimationFiles() {
    Qocto.Animation = loadAnimation("./actors/hostiles/qocto.png", {
      size: [500, 500],
      frames: 30,
    });
  }
}
