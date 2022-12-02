class Topaz extends Item {
  static Animation = null;

  constructor() {
    super("5thousand", Topaz.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Topaz.Animation = loadAnimation("./actors/items/sprites/topaz.webp", {
      size: [146, 160],
      frames: 72,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 5;
      }
    }
  }
}
