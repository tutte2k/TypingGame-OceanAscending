class Swordeath extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Swordeath.Animation,
      createVector(15, 100),
      createVector(width, height - 140),
      (score) => 7
    );
    this.loot = "topaz";
    shake = true;
    shakeDepth = player.depth + 1;
  }
  static loadAnimationFiles() {
    Swordeath.Animation = loadAnimation(
      "./actors/hostiles/sprites/swordeath.webp",
      {
        size: [556, 282],
        frames: 50,
      }
    );
  }
}
