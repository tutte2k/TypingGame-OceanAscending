class Draw {
  static Radiobuttons() {
    ui.radio = createRadio();
    ui.radio.option("kids");
    var easyOptions = ui.radio.option("easy");
    ui.radio.option("hard");
    easyOptions.checked = true;
    ui.radio.elt.children.forEach((radio) => {
      radio.classList.add("form-check");
      radio.children[0].classList.add("form-check-input");
      radio.children[1].classList.add("text-uppercase");
      radio.children[1].classList.add("fs-6");
      radio.children[1].classList.add("fw-bold");
    });
    ui.radio.position(10, 50);
    ui.radio.mouseClicked(resetGame);
  }
  static Pausebutton() {
    ui.pause = createButton("Pause");
    ui.pause.position(10, 10);
    ui.pause.elt.classList.add("btn");
    ui.pause.elt.classList.add("btn-outline-warning");
    ui.pause.elt.classList.add("fw-bold");
    ui.pause.mousePressed(togglePause);
  }
  static Gui() {
    textAlign(CENTER);
    stroke(1);
    strokeWeight(3);
    textSize(30);
    fill(255);
    text(
      `Level: ${player.level} (${Math.round(
        (player.experience / game.mode.experience) * 100
      )}%)`,
      width / 2,
      30
    );
    text(`Depth: ${player.depth}m`, 100, height / 2 + 145);
    text(`Catched: ${player.catched.fishes}`, 100, height - 10);
    text(`$${player.items.cash}k`, width - 150, height - 10);
    text(`Missed: ${player.missed.fishes}`, width / 3, height - 10);
    text(
      `Accuracy: ${Math.round(
        (player.catched.letters /
          (player.missed.letters.total + player.catched.letters)) *
          100
      )}%`,
      (width / 3) * 2,
      height - 10
    );
    textFont("Helvetica");
    for (let i = 0; i < player.health; i++) {
      text(`❤️`, width / 2 - 40 + i * 40, height - 10);
    }
    textFont(font);
  }
  static Player() {
    let standardPosition = height / 2;
    if (player.position < standardPosition) {
      player.position++;
    }
    if (!game.over) {
      animation(player.animation, 90, player.position);
    }
  }
  static Line() {
    if (!focus) return;
    stroke(255);
    strokeWeight(1);
    line(
      90,
      player.position,
      focus.position.x + focus.textPositionOffset.x,
      focus.position.y + focus.textPositionOffset.y
    );
    textAlign(CENTER);
    textSize(100);
    text(focus.displayText.toUpperCase(), width / 2, height - 50);
  }
  static Inputfield() {
    ui.textInput = createInput("", "text");
    ui.textInput.position(30, height / 2);
    ui.textInput.input(onInput);
    ui.textInput.elt.classList.add("form-control");
    ui.textInput.elt.classList.add("w-25");
  }
  static Postbutton() {
    ui.post = createButton("Submit Score");
    ui.post.position(30, height / 2 + 50);
    ui.post.elt.classList.add("btn");
    ui.post.elt.classList.add("btn-outline-warning");
    ui.post.elt.classList.add("fw-bold");
    ui.post.mouseClicked(postRequest);
  }
  static Highscores() {
    fill(255);
    stroke(1);
    strokeWeight(3);
    textAlign(LEFT);
    let sortable = [];
    for (var entry in game.mode.api.data) {
      sortable.push([entry, game.mode.api.data[entry]]);
    }
    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
    const top10 = sortable.slice(0, 10);
    text(`Highscores [${ui.radio.value()}]`, 30, 30);
    for (let i = 0; i < top10.length; i++) {
      text(`#${i + 1} ${top10[i][0]} : ${top10[i][1]}`, 30, 70 + i * 40);
    }
  }
  static Playbutton() {
    ui.playAgain = createButton("Play Again");
    ui.playAgain.position(width / 5, height / 2 + 50);
    ui.playAgain.elt.classList.add("btn");
    ui.playAgain.elt.classList.add("btn-outline-warning");
    ui.playAgain.elt.classList.add("fw-bold");
    ui.playAgain.mouseClicked(goPlayAgain);
  }
  static Gameover() {
    textAlign(CENTER);
    textSize(80);
    text("Game Over!", width / 2, height / 3);
    text(
      `Score: ${Math.round(
        player.totalScore +
          player.experience *
            (player.catched.letters /
              (player.missed.letters.total + player.catched.letters))
      )}`,
      width / 2,
      height / 2
    );
    text(
      `Total catches: ${player.catched.fishes}`,
      width / 2,
      (height / 3) * 2
    );
  }
  static Error() {
    text(`Highscores:`, 30, 30);
    text(`Max 500 requests/day`, 30, 70);
  }

  static Upgradebuttons() {
    ui.zapperBtn = select("#zBtn");
    ui.zCount = select("#zCount");
    for (let i = 0; i < player.items.levels.zapper; i++) {
      ui.zCount.elt.innerHTML += "⚡";
    }
    ui.zapperBtn.elt.children[0].innerHTML =
      player.items.levels.zapper === 0 ? "Unlock" : "Upgrade";
    ui.zapperBtn.elt.children[1].innerHTML =
      shop.upgrade[player.items.levels.zapper];
    ui.zapperBtn.mouseClicked(upgradeZapper);

    ui.timewarpBtn = select("#tBtn");
    ui.tCount = select("#tCount");
    for (let i = 0; i < player.items.levels.timewarp; i++) {
      ui.tCount.elt.innerHTML += "⌛";
    }
    ui.timewarpBtn.elt.children[0].innerHTML =
      player.items.levels.timewarp === 0 ? "Unlock" : "Upgrade";
    ui.timewarpBtn.elt.children[1].innerHTML =
      shop.upgrade[player.items.levels.timewarp];
    ui.timewarpBtn.mouseClicked(upgradeTimewarp);

    ui.shieldBtn = select("#sBtn");
    ui.sCount = select("#sCount");
    for (let i = 0; i < player.items.levels.shield; i++) {
      ui.sCount.elt.innerHTML += "🔰";
    }
    ui.shieldBtn.elt.children[0].innerHTML =
      player.items.levels.shield === 0 ? "Unlock" : "Upgrade";
    ui.shieldBtn.elt.children[1].innerHTML =
      shop.upgrade[player.items.levels.shield];
    ui.shieldBtn.mouseClicked(upgradeShield);

    ui.healthBtn = select("#hBtn");
    ui.hCount = select("#hCount");
    for (let i = 0; i < player.items.levels.health; i++) {
      ui.hCount.elt.innerHTML += "❤️";
    }
    ui.healthBtn.elt.children[0].innerHTML =
      player.items.levels.health === 0 ? "Unlock" : "Upgrade";
    ui.healthBtn.elt.children[1].innerHTML =
      shop.upgrade[player.items.levels.health];
    ui.healthBtn.mouseClicked(upgradeHealth);
    checkMax();
  }
}
