class Inker extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Inker.Animation, createVector(-25, 7));
  }
  static loadAnimationFiles() {
    Inker.Animation = loadAnimation("./sheet_inker.png", {
      size: [188, 188],
      frames: 91,
    });
  }
}
