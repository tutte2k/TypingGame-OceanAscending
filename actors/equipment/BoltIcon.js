class BoltIcon {
  constructor() {
    this.position = createVector(40, height / 2 - 100);
    this.intact = true;
    this.animation = Bolt.Animation;
    this.keyCode = 13;
  }
  draw() {
    animation(this.animation, this.position.x, this.position.y);
  }
  update() {}
  erode(keyCode) {}
}
