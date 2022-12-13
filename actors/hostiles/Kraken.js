class Kraken extends Hostile {
  static Animation = null;
  constructor(text) {
    super(
      text,
      Kraken.Animation,
      createVector(0, 0),
      createVector(width, height - 100),
      (score) => 3,
      (score) => 1.5
    );
    this.loot = "sapphire";
    shake = true;
    shakeDepth = player.depth + 1;
  }
  static loadAnimationFiles() {
    Kraken.Animation = loadAnimation("./actors/hostiles/sprites/kraken.webp", {
      size: [419, 342],
      frames: 57,
    });
  }
}
