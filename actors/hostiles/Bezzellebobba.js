class Bezzellebobba extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Bezzellebobba.Animation,
      createVector(15, 100),
      createVector(width, height - 140),
      (score) => 10
    );
    this.loot = "prism";
    shake = true;
    shakeDepth = player.depth + 1;
  }
  static loadAnimationFiles() {
    Bezzellebobba.Animation = loadAnimation(
      "./actors/hostiles/sprites/bezzellebobba.webp",
      {
        size: [442, 387],
        frames: 42,
      }
    );
  }
}
