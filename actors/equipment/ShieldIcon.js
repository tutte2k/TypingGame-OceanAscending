class ShieldIcon {
  constructor() {
    this.position = createVector(40, height / 2 - 200);
    this.intact = true;
    this.animation = Shield.Animation;
    this.keyCode = 16;
  }
  draw() {
    animation(this.animation, this.position.x, this.position.y);
  }
  update() {}
  erode(keyCode) {}
}
