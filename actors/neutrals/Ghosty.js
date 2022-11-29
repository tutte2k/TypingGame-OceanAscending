class Ghosty extends Neutral {
  static Animation = null;

  constructor(text) {
    super(text, Ghosty.Animation, createVector(0, -85));
  }
  static loadAnimationFiles() {
    Ghosty.Animation = loadAnimation("./actors/neutrals/ghosty.png", {
      size: [500, 500],
      frames: 60,
    });
  }
}
