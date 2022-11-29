class Inky extends Neutral {
  static Animation = null;

  constructor(text) {
    super(text, Inky.Animation, createVector(0, -20));
  }
  static loadAnimationFiles() {
    Inky.Animation = loadAnimation("./actors/neutrals/inky.png", {
      size: [188, 188],
      frames: 91,
    });
  }
}
