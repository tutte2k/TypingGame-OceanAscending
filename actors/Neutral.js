class Neutral extends Actor {
  constructor(
    text,
    animation,
    textPositionOffset,
    position = Neutral.randomPosition(),
    speedFunctionX = Neutral.standardSpeedX,
    speedFunctionY = Neutral.standardSpeedY
  ) {
    super(text, animation, textPositionOffset, position);
    this.speedFunctionX = speedFunctionX;
    this.speedFunctionY = speedFunctionY;
    this.name = "Harmless";
    this.score = 10;
  }
  update() {
    this.position.x -= this.speedFunctionX(player.experience);
    this.position.y -= this.speedFunctionY(player.experience);
    if (this.focused) {
      this.position.x++;
    }
    if (this.position.y < 0) {
      this.score = 0;
      this.intact = false;
      if (this.focused === true) {
        focus = null;
      }
    }
  }
  static randomPosition() {
    return createVector(random(100, width - 100), height + 100);
  }
  static standardSpeedX(score) {
    return 0;
  }
  static standardSpeedY(score) {
    return map(score, 0, 1000, 1, 15);
  }
}
