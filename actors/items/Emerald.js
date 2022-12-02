class Emerald extends Item {
  static Animation = null;

  constructor() {
    super("6thousand", Emerald.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Emerald.Animation = loadAnimation("./actors/items/sprites/emerald.webp", {
      size: [96, 96],
      frames: 34,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 6;
      }
    }
  }
}
