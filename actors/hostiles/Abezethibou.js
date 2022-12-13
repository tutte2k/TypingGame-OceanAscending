class Abezethibou extends Hostile {
  static Animation = null;
  constructor(text) {
    super(
      text,
      Abezethibou.Animation,
      createVector(-35, -70),
      createVector(width, height / 2)
    );
    this.loot = "amethyst";
    shake = true;
    shakeDepth = player.depth + 1;
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
