class Swordeath extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Swordeath.Animation,
      createVector(25, 75),
      createVector(width, height - 100),
      (score) => 7
    );
  }
  static loadAnimationFiles() {
    Swordeath.Animation = loadAnimation("./actors/hostiles/swordeath.png", {
      size: [440, 230],
      frames: 50,
    });
  }
}
