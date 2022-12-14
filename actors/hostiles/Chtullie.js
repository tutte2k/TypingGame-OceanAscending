class Chtullie extends Hostile {
  static Animation = null;
  constructor(text) {
    super(
      text,
      Chtullie.Animation,
      createVector(12, 7),
      createVector(width, height / 2)
    );
    this.loot = "sapphire";
    shake = true;
    shakeDepth = player.depth + 1;
  }
  static loadAnimationFiles() {
    Chtullie.Animation = loadAnimation(
      "./actors/hostiles/sprites/chtullie.webp",
      {
        size: [500, 500],
        frames: 48,
      }
    );
  }
}
