class BoltIcon {
  constructor() {
    this.position = createVector(40, height / 2);
    this.intact = true;
    this.animation = Bolt.Animation;
  }
  draw() {
    animation(this.animation, this.position.x, this.position.y);
  }
  update() {}
  erode(keyCode) {}
}
