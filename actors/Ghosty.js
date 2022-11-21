function Ghosty(text) {
  this.name = "Ghosty";
  this.position = createVector(random(100, width - 100), height + 100);
  this.text = text;
  this.completedText = "";
  this.focused = false;
  this.intact = true;
  this.animation = GhostyAnimation;
  this.score = 10;
}

Ghosty.prototype.draw = function () {
  animation(this.animation, this.position.x, this.position.y);
  let displayText = this.text.replace(this.completedText, "");

  noStroke();
  textAlign(CENTER);
  textSize(25);
  text(displayText.toUpperCase(), this.position.x, this.position.y - 85);
};
Ghosty.prototype.update = function () {
  this.position.y -= map(score, 0, 1000, 1, 15);
  if (this.focused) {
    this.position.x++;
  }
  if (this.position.y < 0) {
    this.score = 0;
    this.intact = false;
    if (this.focused === true) {
      focus = null;
    }
  }
};
Ghosty.prototype.erode = function (keyCode) {
  var inputChar = String.fromCharCode(keyCode).toLowerCase(); // keyCode to char
  var length = this.completedText.length + 1;
  if (this.text.substring(0, length) === this.completedText + inputChar)
    this.completedText += inputChar;
  this.intact = this.completedText !== this.text; // update intact
};
