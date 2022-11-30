class Swordeath extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Swordeath.Animation,
      createVector(15, 100),
      createVector(width, height - 140),
      (score) => 7
    );
  }
  static loadAnimationFiles() {
    Swordeath.Animation = loadAnimation(
      "./actors/hostiles/sprites/swordeath.png",
      {
        size: [556, 282],
        frames: 50,
      }
    );
  }
}
