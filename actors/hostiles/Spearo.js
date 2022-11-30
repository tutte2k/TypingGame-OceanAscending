class Spearo extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Spearo.Animation,
      createVector(-50, -50),
      createVector(width / 2, height),
      (score) => 1,
      (score) => 1.5
    );
  }
  static loadAnimationFiles() {
    Spearo.Animation = loadAnimation("./actors/hostiles/sprites/spearo.png", {
      size: [250, 250],
      frames: 60,
    });
  }
}
