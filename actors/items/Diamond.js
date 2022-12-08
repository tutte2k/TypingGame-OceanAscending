class Diamond extends Item {
  static Animation = null;

  constructor() {
    super("3000", Diamond.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Diamond.Animation = loadAnimation("./actors/items/sprites/diamond.webp", {
      size: [121, 90],
      frames: 7,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 3;
      }
    }
  }
}
