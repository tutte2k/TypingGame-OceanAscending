class Hourglass extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Hourglass.Animation, createVector(0, 40));
  }
  static loadAnimationFiles() {
    Hourglass.Animation = loadAnimation(
      "./actors/items/sprites/hourglass.webp",
      {
        size: [118, 106],
        frames: 73,
      }
    );
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      field.environment.push(new HourglassIcon());
      player.items.timewarp = true;
    }
  }
}
