class Health extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Health.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Health.Animation = loadAnimation("./actors/items/sprites/health.png", {
      size: [200, 200],
      frames: 31,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (health < 3) {
        health++;
      }
    }
  }
}
