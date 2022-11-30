class Chtullie extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Chtullie.Animation,
      createVector(12, 7),
      createVector(width, height / 2)
    );
  }
  static loadAnimationFiles() {
    Chtullie.Animation = loadAnimation(
      "./actors/hostiles/sprites/chtullie.png",
      {
        size: [500, 500],
        frames: 48,
      }
    );
  }
}
