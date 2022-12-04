class HourglassIcon {
  constructor() {
    this.position = createVector(40, height / 3);
    this.intact = true;
    this.animation = Hourglass.Animation;
    this.keyCode = 17;
  }
  draw() {
    animation(this.animation, this.position.x, this.position.y);
  }
  update() {}
  erode(keyCode) {}
}
