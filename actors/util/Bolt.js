function Bolt() {
  this.position = createVector(125, height / 2 - 40);
  this.intact = true;
  this.animation = BoltAnimation;
}
Bolt.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
};
Bolt.prototype.update = function () {};
Bolt.prototype.erode = function (keyCode) {};
