class Fish extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Fish.Animation,
      createVector(-25, 20),
      Hostile.randomPosition()
    );
  }
  static loadAnimationFiles() {
    Fish.Animation = loadAnimation("./actors/hostiles/sprites/fish.png", {
      size: [250, 250],
      frames: 61,
    });
  }
}
