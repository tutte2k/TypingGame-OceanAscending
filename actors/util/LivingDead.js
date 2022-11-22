function LivingDead(text) {
  this.name = "LivingDead";
  this.position = createVector(random(100, width - 100), 0);
  this.text = text;
  this.completedText = "";
  this.focused = false;
  this.intact = true;
  this.animation = LivingDeadAnimation;
}
LivingDead.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
  let displayText = this.text.replace(this.completedText, "");
  noStroke();
  textAlign(CENTER);
  textSize(25);
  text(displayText.toUpperCase(), this.position.x, this.position.y - 10);
};
LivingDead.prototype.update = function () {
  this.position.y = this.position.y + 6;
  if (this.position.y > height + 100) {
    this.intact = false;
    if (this.focused === true) {
      focus = null;
    }
  }
};
LivingDead.prototype.erode = function (keyCode) {
  var inputChar = String.fromCharCode(keyCode).toLowerCase();
  var length = this.completedText.length + 1;
  if (this.text.substring(0, length) === this.completedText + inputChar) {
    this.completedText += inputChar;
    endGame(this);
    this.focused = true;
  }
  this.intact = this.completedText !== this.text;
};
