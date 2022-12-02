class Croccy extends Neutral {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Croccy.Animation,
      createVector(50, 10),
      createVector(width / 9, height + 100),
      (score) => -3,
      (score) => 4
    );
  }
  static loadAnimationFiles() {
    Croccy.Animation = loadAnimation("./actors/neutrals/sprites/croccy.webp", {
      size: [247, 185],
      frames: 61,
    });
  }
}
