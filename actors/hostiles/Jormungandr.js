class Jormungandr extends Hostile {
  static Animation = null;
  constructor(text) {
    super(
      text,
      Jormungandr.Animation,
      createVector(40, 220),
      createVector(width, height - 100),
      (score) => 5,
      (score) => 2.5
    );
    this.loot = "diamond";
  }
  static loadAnimationFiles() {
    Jormungandr.Animation = loadAnimation(
      "./actors/hostiles/sprites/jormungandr.webp",
      {
        size: [426, 519],
        frames: 50,
      }
    );
  }
}
