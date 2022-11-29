class Snail extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Snail.Animation,
      createVector(12, 7),
      createVector(width, height - 160),
      (score) => text.length
    );
  }
  static loadAnimationFiles() {
    Snail.Animation = loadAnimation("./actors/hostiles/snail.png", {
      size: [640, 640],
      frames: 46,
    });
  }
}
