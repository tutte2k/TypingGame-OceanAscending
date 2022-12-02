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
    this.position.x += this.speedFunctionX();
    this.position.y += this.speedFunctionY();
    if (this.focused) {
      this.position.y = this.position.y - 3;
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
  static standardSpeedX() {
    return 0;
  }
  static standardSpeedY() {
    return 6;
  }
}
