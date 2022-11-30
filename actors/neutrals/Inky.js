class Inky extends Neutral {
  static Animation = null;

  constructor(text) {
    super(text, Inky.Animation, createVector(0, -30));
  }
  static loadAnimationFiles() {
    Inky.Animation = loadAnimation("./actors/neutrals/sprites/inky.png", {
      size: [118, 137],
      frames: 91,
    });
  }
}
