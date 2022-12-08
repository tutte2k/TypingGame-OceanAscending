class Amethyst extends Item {
  static Animation = null;

  constructor() {
    super("2000", Amethyst.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Amethyst.Animation = loadAnimation("./actors/items/sprites/amethyst.webp", {
      size: [148, 125],
      frames: 84,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 2;
      }
    }
  }
}
