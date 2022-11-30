class Ghosty extends Neutral {
  static Animation = null;

  constructor(text) {
    super(text, Ghosty.Animation, createVector(-5, -100));
  }
  static loadAnimationFiles() {
    Ghosty.Animation = loadAnimation("./actors/neutrals/sprites/ghosty.png", {
      size: [120, 258],
      frames: 60,
    });
  }
}
