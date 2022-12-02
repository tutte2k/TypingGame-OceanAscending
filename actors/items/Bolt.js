class Bolt extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Bolt.Animation, createVector(-10, 40));
  }
  static loadAnimationFiles() {
    Bolt.Animation = loadAnimation("./actors/items/sprites/bolt.webp", {
      size: [100, 100],
      frames: 91,
    });
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      field.environment.push(new BoltIcon());
      player.items.zapper = true;
    }
  }
}
