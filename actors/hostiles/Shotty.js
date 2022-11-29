class Shotty extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Shotty.Animation, createVector(-30, 0));
  }
  static loadAnimationFiles() {
    Shotty.Animation = loadAnimation("./actors/hostiles/sprites/shotty.png", {
      size: [100, 100],
      frames: 22,
    });
  }
}
