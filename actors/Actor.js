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
    text(
      this.displayText.toUpperCase(),
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
  static Get(value) {
    if (value) {
      if (value == "lulu" || value == "chtulu" || value == "chtululu") {
        return new Chtullie(value);
      }
      if (value == "chk" || value == "chkrac" || value == "chkracken") {
        return new Kraken(value);
      }
      if (value == "swo" || value == "sworde" || value == "swordeath") {
        return new Swordeath(value);
      }
      if (value == "jor" || value == "jormun" || value == "jormungandr") {
        return new Jormungandr(value);
      }
      if (value == "abe" || value == "abezeth" || value == "abezethibou") {
        return new Abezethibou(value);
      }
      if (value == "hui" || value == "huitzi" || value == "huitzilopochtli") {
        return new Huitzilopochtli(value);
      }
      if (value == "bez" || value == "bezelle" || value == "bezellebobba") {
        return new Bezzellebobba(value);
      }
      if (value.length == 1) {
        let enemies = [
          new Shotty(value),
          new Ghosty(value),
          new Puffer(value),
          new Inker(value),
          new Croccy(value),
          new Spearo(value),
        ];
        return random(enemies);
      }
      if (value.length == 2) {
        let enemies = [
          new Jinxy(value),
          new Puffer(value),
          new Inker(value),
          new Inky(value),
          new Croccy(value),
          new Ghosty(value),
        ];
        return random(enemies);
      }
      if (value.length == 3) {
        let enemies = [
          new Inky(value),
          new Jinxy(value),
          new Fish(value),
          new Teethy(value),
          new Ghosty(value),
        ];
        return random(enemies);
      }
      if (value.length == 4) {
        let enemies = [new Fish(value), new Teethy(value), new Inky(value)];
        return random(enemies);
      }
      if (value.length == 5 || value.length == 6) {
        let enemies = [new Leona(value), new Qocto(value)];
        return random(enemies);
      }
      if (value.length > 6) {
        return new Whale(value);
      }
    }
  }
}
