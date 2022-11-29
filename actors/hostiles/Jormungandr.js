class Jormungandr extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Jormungandr.Animation,
      createVector(0, 85),
      createVector(width, height - 100)
    );
  }
  static loadAnimationFiles() {
    Jormungandr.Animation = loadAnimation("./actors/hostiles/jormungandr.png", {
      size: [500, 500],
      frames: 50,
    });
  }
}
