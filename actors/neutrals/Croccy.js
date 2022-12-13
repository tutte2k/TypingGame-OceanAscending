class Croccy extends Neutral {
  static Animation = null;

  constructor(text) {
    super(text, Croccy.Animation, createVector(-5, -100));
  }
  static loadAnimationFiles() {
    Croccy.Animation = loadAnimation("./actors/neutrals/sprites/croccy.webp", {
      size: [120, 258],
      frames: 60,
    });
  }
}
