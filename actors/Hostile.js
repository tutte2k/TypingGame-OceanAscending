class Hostile extends Actor {
  constructor(
    text,
    animation,
    textPositionOffset,
    position = Hostile.randomPosition(),
    speedFunctionX = Hostile.standardSpeedX,
    speedFunctionY = Hostile.standardSpeedY
  ) {
    super(text, animation, textPositionOffset, position);
    this.speedFunctionX = speedFunctionX;
    this.speedFunctionY = speedFunctionY;
  }
  update() {
    this.position.x -= this.speedFunctionX(player.experience);
    this.position.y -= this.speedFunctionY(player.experience);

    if (this.focused) {
      this.position.x++;
    }
    if (this.position.x < 0) {
      endGame(this);
    }
  }
  static randomPosition() {
    return createVector(width, random(100, height - 100));
  }
  static standardSpeedX(score) {
    return map(score, 0, 1000, 1, 15);
  }
  static standardSpeedY(score) {
    return 0;
  }
}
