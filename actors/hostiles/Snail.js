class Snail extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Snail.Animation,
      createVector(12, 7),
      createVector(width, height - 90),
      (score) => text.length
    );
  }
  static loadAnimationFiles() {
    Snail.Animation = loadAnimation("./actors/hostiles/sprites/snail.webp", {
      size: [243, 203],
      frames: 46,
    });
  }
}
