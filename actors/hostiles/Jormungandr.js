class Jormungandr extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Jormungandr.Animation,
      createVector(0, 90),
      createVector(width, height - 100)
    );
  }
  static loadAnimationFiles() {
    Jormungandr.Animation = loadAnimation(
      "./actors/hostiles/sprites/jormungandr.png",
      {
        size: [500, 500],
        frames: 50,
      }
    );
  }
}
