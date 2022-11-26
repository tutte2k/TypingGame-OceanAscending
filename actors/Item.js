class Item extends Actor {
  constructor(
    text,
    animation,
    textPositionOffset,
    position = Item.randomPosition(),
    speedFunctionX = Item.standardSpeedX,
    speedFunctionY = Item.standardSpeedY
  ) {
    super(text, animation, textPositionOffset, position);
    this.speedFunctionX = speedFunctionX;
    this.speedFunctionY = speedFunctionY;
  }
  update() {
    this.position.x += this.speedFunctionX(score);
    this.position.y += this.speedFunctionY(score);
    if (this.focused) {
      this.position.x++;
    }
    if (this.position.y > height + 100) {
      this.intact = false;
      if (this.focused === true) {
        focus = null;
      }
    }
  }
  static randomPosition() {
    return createVector(random(100, width - 100), 0);
  }
  static standardSpeedX(score) {
    return 0;
  }
  static standardSpeedY(score) {
    return 6;
  }
}
