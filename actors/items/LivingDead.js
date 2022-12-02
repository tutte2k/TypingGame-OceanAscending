class LivingDead extends Item {
  static Animation = null;

  constructor(text) {
    super(text, LivingDead.Animation, createVector(0, -10));
    this.name = "LivingDead";
  }

  static loadAnimationFiles() {
    LivingDead.Animation = loadAnimation(
      "./actors/items/sprites/livingdead.webp",
      {
        size: [200, 200],
        frames: 51,
      }
    );
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      endGame(this);
    }
  }
}
