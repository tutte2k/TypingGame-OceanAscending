class Huitzilopochtli extends Hostile {
  static Animation = null;
  constructor(text) {
    super(
      text,
      Huitzilopochtli.Animation,
      createVector(0, 100),
      createVector(width, 0),
      (score) => 5,
      (score) => -2
    );
    this.loot = "emerald";
  }
  static loadAnimationFiles() {
    Huitzilopochtli.Animation = loadAnimation(
      "./actors/hostiles/sprites/huitzilopochtli.webp",
      {
        size: [640, 640],
        frames: 56,
      }
    );
  }
}
