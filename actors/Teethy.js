function Teethy(text) {
  this.position = createVector(width, random(100, height - 100));
  this.text = text;
  this.completedText = "";
  this.focused = false;
  this.intact = true;
  this.animation = TeethyAnimation;
}
Teethy.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
  let displayText = this.text;
  displayText = this.text.replace(this.completedText, "");
  noStroke();
  textAlign(CENTER);
  textSize(25);
  text(displayText.toUpperCase(), this.position.x + 35, this.position.y);
};
Teethy.prototype.update = function () {
  this.position.x -= map(score, 0, 1000, 1, 15);
  if (this.focused) {
    this.position.x++;
  }
  if (this.position.x < 0) {
    endGame(this);
  }
};
Teethy.prototype.erode = function (keyCode) {
  var inputChar = String.fromCharCode(keyCode).toLowerCase();
  var length = this.completedText.length + 1;
  if (this.text.substring(0, length) === this.completedText + inputChar)
    this.completedText += inputChar;
  this.intact = this.completedText !== this.text;
};
