class Croccy extends Neutral {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Croccy.Animation,
      createVector(0, 0),
      createVector(width / 9, height + 100),
      (score) => -3,
      (score) => 4
    );
  }
  static loadAnimationFiles() {
    Croccy.Animation = loadAnimation("./actors/neutrals/croccy.png", {
      size: [250, 250],
      frames: 121,
    });
  }
}
