class Abezethibou extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Abezethibou.Animation,
      createVector(-70, -10),
      createVector(width, height / 2)
    );
  }
  static loadAnimationFiles() {
    Abezethibou.Animation = loadAnimation(
      "./actors/hostiles/sprites/abezethibou.png",
      {
        size: [640, 640],
        frames: 75,
      }
    );
  }
}
