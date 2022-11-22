function Zapper(zapDepth) {
  this.position = createVector(width / 2, height / 2);
  this.intact = true;
  this.animation = ZapperAnimation;
  this.zapDepth = zapDepth;
}
Zapper.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
};
Zapper.prototype.update = function () {
  if (CURRENT_DEPTH > this.zapDepth + 1) {
    this.intact = false;
  }
};
Zapper.prototype.erode = function (keyCode) {};

function BoltIcon() {
  this.position = createVector(40, height / 2);
  this.intact = true;
  this.animation = BoltAnimation;
}
BoltIcon.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
};
BoltIcon.prototype.update = function () {};
BoltIcon.prototype.erode = function (keyCode) {};
