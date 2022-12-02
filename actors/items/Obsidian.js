class Obsidian extends Item {
  static Animation = null;

  constructor() {
    super("4thousand", Obsidian.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Obsidian.Animation = loadAnimation("./actors/items/sprites/obsidian.webp", {
      size: [120, 153],
      frames: 17,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (!this.intact) {
        player.items.cash += 4;
      }
    }
  }
}
