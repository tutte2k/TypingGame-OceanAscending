class Health extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Health.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Health.Animation = loadAnimation("./actors/items/sprites/health.webp", {
      size: [150, 150],
      frames: 31,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (player.health < player.items.levels.health) {
        player.health++;
      }
    }
  }
}
