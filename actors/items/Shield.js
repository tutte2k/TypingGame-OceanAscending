class Shield extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Shield.Animation, createVector(-10, 40));
  }
  static loadAnimationFiles() {
    Shield.Animation = loadAnimation("./actors/items/sprites/shield.webp", {
      size: [113, 105],
      frames: 61,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      field.environment.push(new ShieldIcon());
      player.items.shield = true;
    }
  }
}
