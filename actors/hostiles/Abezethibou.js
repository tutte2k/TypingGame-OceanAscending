class Abezethibou extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Abezethibou.Animation,
      createVector(-35, -70),
      createVector(width, height / 2)
    );
  }
  static loadAnimationFiles() {
    Abezethibou.Animation = loadAnimation(
      "./actors/hostiles/sprites/abezethibou.webp",
      {
        size: [419, 389],
        frames: 75,
      }
    );
  }
}
