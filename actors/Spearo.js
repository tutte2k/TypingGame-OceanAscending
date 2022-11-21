function Spearo(text) {
  this.position = createVector(width / 2 - 400, height);
  this.text = text;
  this.completedText = "";
  this.focused = false;
  this.intact = true;
  this.animation = SpearoAnimation;
}

Spearo.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
  let displayText = this.text;
  displayText = this.text.replace(this.completedText, "");
  noStroke();
  textAlign(CENTER);
  textSize(25);
  text(displayText.toUpperCase(), this.position.x - 50, this.position.y - 50);
};
Spearo.prototype.update = function () {
  this.position.x -= 1;
  this.position.y -= 1;
  if (this.focused) {
    this.position.x++;
    this.position.y++;
  }
  if (this.position.x < 0) {
    endGame();
  }
};
Spearo.prototype.erode = function (keyCode) {
  var inputChar = String.fromCharCode(keyCode).toLowerCase(); // keyCode to char
  var length = this.completedText.length + 1;
  if (this.text.substring(0, length) === this.completedText + inputChar)
    this.completedText += inputChar;
  this.intact = this.completedText !== this.text; // update intact
};
