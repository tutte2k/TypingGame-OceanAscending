class Actor {
  constructor(text, animation, textPositionOffset, position) {
    this.position = position;
    this.text = text;
    this.completedText = "";
    this.focused = false;
    this.intact = true;
    this.animation = animation;
    this.textPositionOffset = textPositionOffset;
    this.displayText = text;
  }

  draw() {
    animation(this.animation, this.position.x, this.position.y);
    this.displayText = this.text.replace(this.completedText, "");
    stroke(1);
    strokeWeight(3);
    textAlign(CENTER);
    textSize(25);
    fill(255);
    if (this.focused) {
      fill(100, 200, 100);
    }
    if (!game.paused) {
      text(
        this.displayText.toUpperCase(),
        this.position.x + this.textPositionOffset.x,
        this.position.y + this.textPositionOffset.y
      );
    }
    fill(255);
  }

  erode(keyCode) {
    var inputChar = String.fromCharCode(keyCode).toLowerCase();
    var length = this.completedText.length + 1;

    let isNextChar =
      this.text.substring(0, length) === this.completedText + inputChar;
    if (isNextChar) {
      this.completedText += inputChar;
      this.position.x += 5;
    }
    this.intact = this.completedText !== this.text;
    return isNextChar;
  }
  static Loot(type) {
    const loot = {
      sapphire: new Sapphire(),
      amethyst: new Amethyst(),
      diamond: new Diamond(),
      topaz: new Topaz(),
      emerald: new Emerald(),
      prism: new Prism(),
    };
    return loot[type];
  }
}
