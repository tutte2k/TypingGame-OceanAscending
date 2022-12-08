class Sapphire extends Item {
  static Animation = null;

  constructor() {
    super("1000", Sapphire.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Sapphire.Animation = loadAnimation("./actors/items/sprites/sapphire.webp", {
      size: [148, 125],
      frames: 84,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 1;
      }
    }
  }
}
