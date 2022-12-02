class Prism extends Item {
  static Animation = null;

  constructor() {
    super("7thousand", Prism.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Prism.Animation = loadAnimation("./actors/items/sprites/prism.webp", {
      size: [125, 125],
      frames: 60,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 7;
      }
    }
  }
}
