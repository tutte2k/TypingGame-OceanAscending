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
    Abezethibou.Animation = loadAnimation("./sheet_abezethibou.png", {
      size: [500, 500],
      frames: 50,
    });
  }
}
