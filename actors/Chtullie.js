function Chtullie(text) {
  this.position = createVector(width, height / 2);
  this.text = text;
  this.completedText = "";
  this.focused = false;
  this.intact = true;
  this.animation = ChtullieAnimation;
}
Chtullie.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
  let displayText = this.text;
  displayText = this.text.replace(this.completedText, "");
  noStroke();
  textAlign(CENTER);
  textSize(25);
  text(displayText.toUpperCase(), this.position.x + 12, this.position.y + 7);
};
Chtullie.prototype.update = function () {
  this.position.x -= map(score, 0, 1000, 1, 15);
  if (this.focused) {
    this.position.x++;
  }
  if (this.position.x < 0) {
    endGame(this);
  }
};
Chtullie.prototype.erode = function (keyCode) {
  var inputChar = String.fromCharCode(keyCode).toLowerCase();
  var length = this.completedText.length + 1;
  if (this.text.substring(0, length) === this.completedText + inputChar)
    this.completedText += inputChar;
  this.intact = this.completedText !== this.text;
};
