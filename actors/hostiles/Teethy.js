class Teethy extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Teethy.Animation, createVector(35, 0));
  }
  static loadAnimationFiles() {
    Teethy.Animation = loadAnimation("./actors/hostiles/teethy.png", {
      size: [375, 375],
      frames: 61,
    });
  }
}
