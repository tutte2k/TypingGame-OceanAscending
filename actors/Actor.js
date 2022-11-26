class Actor {
  constructor(text, animation, textPositionOffset, position) {
    this.position = position;
    this.text = text;
    this.completedText = "";
    this.focused = false;
    this.intact = true;
    this.animation = animation;
    this.textPositionOffset = textPositionOffset;
  }

  draw() {
    animation(this.animation, this.position.x, this.position.y);
    let displayText = this.text;
    displayText = this.text.replace(this.completedText, "");
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text(
      displayText.toUpperCase(),
      this.position.x + this.textPositionOffset.x,
      this.position.y + this.textPositionOffset.y
    );
  }

  erode(keyCode) {
    var inputChar = String.fromCharCode(keyCode).toLowerCase();
    var length = this.completedText.length + 1;

    let isNextChar =
      this.text.substring(0, length) === this.completedText + inputChar;
    if (isNextChar) {
      this.completedText += inputChar;
    }
    this.intact = this.completedText !== this.text;
    return isNextChar;
  }
}
