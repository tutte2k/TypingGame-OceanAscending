class Shotty extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Shotty.Animation,
      createVector(0, 25),
      createVector(width / 2, 0),
      (score) => 1,
      (score) => -1
    );
  }
  static loadAnimationFiles() {
    Shotty.Animation = loadAnimation("./actors/hostiles/sprites/shotty.png", {
      size: [100, 100],
      frames: 37,
    });
  }
}
