function preload() {
  target.words = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
  font = loadFont("./assets/RifficFree-Bold.ttf");
  Load.Animations();
  getStoredCash();
  getHighscores();
}
function getStoredCash() {
  if (localStorage.getItem("cash")) {
    player.items.cash = +localStorage.getItem("cash");
  }
  if (localStorage.getItem("itemlevels")) {
    player.items.levels = JSON.parse(localStorage.getItem("itemlevels"));
    player.health = player.items.levels.health;
  }
}

function getHighscores() {
  httpGet(config.kids.api.get, "json", false, function (response) {
    config.kids.api.data = response;
  });
  httpGet(config.easy.api.get, "json", false, function (response) {
    config.easy.api.data = response;
  });
  httpGet(config.hard.api.get, "json", false, function (response) {
    config.hard.api.data = response;
  });
}
function togglePause() {
  if (game.paused && !game.over) {
    loop();
    game.paused = !game.paused;
  } else {
    noLoop();
    game.paused = !game.paused;
  }
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("ocean");
  if (windowWidth < 1000) {
    let keyboard = document.getElementById("kb-con");
    keyboard.hidden = false;
    resizeCanvas(windowWidth, windowHeight - windowHeight / 3);
  }
  Draw.Pausebutton();
  Draw.Radiobuttons();
  Draw.Upgradebuttons();
  game.mode = config.easy;
  focus = null;
  textFont(font);
}

function windowResized() {
  if (windowWidth < 1000) {
    resizeCanvas(windowWidth, windowHeight);
  }
}
function draw() {
  clear();
  Draw.Line();

  Draw.Gui();
  Draw.Player();
  handleField();
}
function resetGame() {
  game.over = false;
  player.depth = 0;
  player.experience = 0;
  player.level = 1;
  player.score = 0;
  player.totalScore = 0;
  player.position = 0;
  player.catched.fishes = 0;
  player.missed.letters.total = 0;
  player.catched.letters = 0;
  player.missed.fishes = 0;
  player.missed.letters.consecutive = 0;
  player.items.zapper = false;
  player.items.timewarp = false;
  player.items.shield = false;
  field.hostile = [];
  field.neutral = [];
  field.item = [];
  field.environment = [];
  ui.radio.elt.hidden = false;
  ui.pause.elt.hidden = false;
  focus = null;
  if (ui.radio.value() == "kids") {
    game.mode = config.kids;
  }
  if (ui.radio.value() == "easy") {
    game.mode = config.easy;
  }
  if (ui.radio.value() == "hard") {
    game.mode = config.hard;
  }
  loop();
}
function handleField() {
  try {
    updateItemField();
    updateField();
    updateSecondField();
    updateEnvironmentField();
  } catch (error) {}

  if (frameCount % 60 === 0) {
    player.depth++;
    Spawn.Items();
    if (field.hostile.length == 0 && field.neutral.length == 0) {
      Spawn.Single();
    } else {
      if (player.experience > game.mode.experience) {
        levelUp();
      }
      game.mode.spawn.progression();
      game.mode.spawn.boss();
    }
  }
}
function levelUp() {
  player.totalScore += player.experience + player.depth;
  player.experience = 0;
  player.level++;
  for (let i = 0; i < 3; i++) {
    const index = Math.round(
      target.words.length / game.mode.spawn.indexDenominator
    );
    const word = getNextWord(index);
    const creature = new Shellie(word);
    field.hostile.push(creature);
    if (random() > 0.99) {
      field.item.push(new Obsidian());
    }
  }
}
function updateField() {
  for (var i = field.hostile.length - 1; i >= 0; i--) {
    if (field.hostile[i]) {
      field.hostile[i].update();
      if (
        focus == null &&
        field.hostile[i].intact &&
        field.hostile[i].focused
      ) {
        focus = field.hostile[i];
      } else if (field.hostile[i].intact) {
        field.hostile[i].draw();
      } else {
        if (field.hostile[i].text) {
          player.experience += field.hostile[i].text.length;
          player.catched.fishes++;
          if (field.hostile[i].loot) {
            field.item.push(getLoot(field.hostile[i].loot));
          }
          field.hostile.splice(i, 1);
          focus = null;
        }
      }
    }
  }
}
function updateSecondField() {
  for (var i = field.neutral.length - 1; i >= 0; i--) {
    if (field.neutral[i]) {
      field.neutral[i].update();

      if (field.neutral[i].intact) {
        field.neutral[i].draw();
      } else if (!field.neutral.intact) {
        player.experience += field.neutral[i].score;
        if (field.neutral[i].score > 0) {
          player.catched.fishes++;
        } else {
          player.missed.fishes++;
        }
        if (field.neutral[i].focused) {
          focus = null;
        }
        field.neutral.splice(i, 1);
      }
    }
  }
}
function updateItemField() {
  for (var i = field.item.length - 1; i >= 0; i--) {
    if (field.item[i]) {
      field.item[i].update();
      if (field.item[i].intact) {
        field.item[i].draw();
      } else if (!field.item.intact) {
        if (field.item[i].focused) {
          player.experience += 10;
          focus = null;
        }
        field.item.splice(i, 1);
      }
    }
  }
}
function updateEnvironmentField() {
  for (var i = field.environment.length - 1; i >= 0; i--) {
    if (field.environment[i]) {
      field.environment[i].update();
      if (field.environment[i].intact) {
        field.environment[i].draw();
      } else if (!field.environment.intact) {
        field.environment.splice(i, 1);
      }
    }
  }
}
function getLoot(type) {
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
function keyPressed() {
  if (!game.paused) {
    if (keyCode == 13 && player.items.zapper === true) {
      clearFields();
      field.environment = field.environment.filter((x) => x.keyCode != 13);
      player.items.zapper = false;
      field.environment.push(new Zapper(player.depth));
      focus = null;
    } else if (keyCode == 17 && player.items.timewarp === true) {
      field.environment = field.environment.filter((x) => x.keyCode != 17);
      player.totalScore += player.experience;
      player.experience = 0;
      player.items.timewarp = false;
      for (let i = 0; i < field.hostile.length; i++) {
        field.hostile[i].position.x = windowWidth - 100;
      }
      for (let i = 0; i < field.neutral.length; i++) {
        field.neutral[i].position.y = windowHeight - 100;
      }
      for (let i = 0; i < field.item.length; i++) {
        field.item[i].position.y = 0;
      }
    } else if (keyCode == 16 && player.items.shield === true) {
      field.environment = field.environment.filter((x) => x.keyCode != 16);
      player.items.shield = false;
      player.invulnerable = true;
      field.environment.push(new Bubble(player.depth));
    }
    if (game.paused && !game.over) {
      loop();
      game.paused = !game.paused;
    }
    if (focus) {
      let hit = focus.erode(keyCode);
      if (hit) {
        player.catched.letters++;
      }
    } else {
      focus = findFocus(keyCode);
      if (focus) {
        let hit = focus.erode(keyCode);
        if (hit) {
          player.catched.letters++;
        }
      }
    }
  }
}
function virtuaKeyPressed(keyCodeFromChar) {
  if (!game.paused)
    if (keyCodeFromChar == 13 && player.items.zapper === true) {
      clearFields();
      field.environment = [];
      player.items.zapper = false;
      field.environment.push(new Zapper(player.depth));
      focus = null;
    } else if (keyCode == 17 && player.items.timewarp === true) {
      field.environment = field.environment.filter((x) => x.keyCode != 17);
      player.totalScore += player.experience;
      player.experience = 0;
      player.items.timewarp = false;
      for (let i = 0; i < field.hostile.length; i++) {
        field.hostile[i].position.x = windowWidth - 100;
      }
      for (let i = 0; i < field.neutral.length; i++) {
        field.neutral[i].position.y = windowHeight - 100;
      }
      for (let i = 0; i < field.item.length; i++) {
        field.item[i].position.y = 0;
      }
    }
  if (game.paused && !game.over) {
    loop();
    game.paused = !game.paused;
  }
  if (focus) {
    focus.erode(keyCodeFromChar);
    if (hit) {
      player.catched.letters++;
    }
  } else {
    focus = findFocus(keyCodeFromChar);
    if (focus) {
      focus.erode(keyCodeFromChar);
      if (hit) {
        player.catched.letters++;
      }
    }
  }
}

function findFocus(code) {
  var char = String.fromCharCode(code).toLowerCase();
  for (var i = 0; i < field.item.length; i++) {
    if (field.item[i]) {
      if (field.item[i].text.startsWith(char)) {
        field.item[i].focused = true;
        player.missed.letters.consecutive = 0;
        return field.item[i];
      }
    }
  }
  for (var i = 0; i < field.hostile.length; i++) {
    if (field.hostile[i]) {
      if (field.hostile[i].text.startsWith(char)) {
        field.hostile[i].focused = true;
        player.missed.letters.consecutive = 0;
        return field.hostile[i];
      }
    }
  }

  for (var i = 0; i < field.neutral.length; i++) {
    if (field.neutral[i]) {
      if (field.neutral[i].text.startsWith(char)) {
        field.neutral[i].focused = true;
        player.missed.letters.consecutive = 0;
        return field.neutral[i];
      }
    }
  }
  player.missed.letters.total++;
  player.missed.letters.consecutive++;
  if (player.missed.letters.consecutive > 10) {
    field.hostile.push(new Snail("{anticheat}"));
    player.missed.letters.consecutive = 8;
  }
  return null;
}
function endGame(enemy) {
  if (enemy.name) {
    if (enemy.name === "LivingDead") {
      field.environment.push(new Death(player.depth));
      clearFields();
    }
  }
  if (player.invulnerable === true) {
    enemy.intact = false;
    if (enemy.focused === true) {
      focus = null;
    }
    player.missed.fishes++;
    player.catched.fishes--;
  } else if (player.health === 0) {
    ui.pause.elt.hidden = true;
    ui.radio.elt.hidden = true;
    localStorage.setItem("cash", player.items.cash);
    game.over = true;
    clearFields();
    noLoop();
    if (game.mode.api.data) {
      Draw.Highscores();
      Draw.Inputfield();
      Draw.Postbutton();
    } else {
      text(`Highscores:`, 30, 30);
      text(`Max 500 requests/day`, 30, 70);
    }
    Draw.Playbutton();
    Draw.Gameover();
  } else {
    enemy.intact = false;
    if (enemy.focused === true) {
      focus = null;
    }
    player.health--;
    player.missed.fishes++;
    player.catched.fishes--;
  }
}
function onInput() {
  userInput.name = this.value();
}
function clearFields() {
  if (game.over) {
    noLoop();
    field.hostile.length = 0;
    field.neutral.length = 0;
    field.item.length = 0;
  } else {
    for (let i = field.hostile.length; i >= 0; i--) {
      field.hostile.splice(i, 1);
      player.experience += 3;
      player.catched.fishes++;
    }
    for (let i = field.neutral.length; i >= 0; i--) {
      field.neutral.splice(i, 1);
      player.experience += 3;
      player.catched.fishes++;
    }
  }
}
function goPlayAgain() {
  ui.post.remove();
  ui.playAgain.remove();
  ui.textInput.remove();
  resetGame();
}

function postRequest() {
  if (userInput.name) {
    ui.post.elt.innerHTML = "";
    ui.post.elt.innerText = "";
    ui.post.elt.classList.add("spinner-border");
    let responseData;
    fetch(game.mode.api.get, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        responseData = await response.json();
      })
      .then(async () => {
        responseData[userInput.name] = Math.round(
          player.totalScore +
            player.experience *
              (player.catched.letters /
                (player.missed.letters.total + player.catched.letters))
        );

        fetch(game.mode.api.put, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(responseData),
        })
          .then()
          .then((x) => (ui.post.elt.hidden = true));
      });
  }
}
function getNextWord(startIndex) {
  let notAvailableChars = [];
  for (let i = 0; i < field.hostile.length; i++) {
    if (field.hostile[i]) {
      if (!notAvailableChars.includes(field.hostile[i].text.charAt(0))) {
        notAvailableChars.push(field.hostile[i].text.charAt(0));
      }
    }
  }
  for (let i = 0; i < field.neutral.length; i++) {
    if (field.neutral[i]) {
      if (!notAvailableChars.includes(field.neutral[i].text.charAt(0))) {
        notAvailableChars.push(field.neutral[i].text.charAt(0));
      }
    }
  }

  for (let i = startIndex; i >= 0; i--) {
    const wordSuggestion = target.words[i];
    if (wordSuggestion) {
      const firstLetterInWord = wordSuggestion.charAt(0);
      if (!notAvailableChars.includes(firstLetterInWord)) {
        return target.words.splice(i, 1)[0];
      } else {
        continue;
      }
    }
  }
  return target.words.pop();
}
function getSeaCreature(value) {
  if (value) {
    if (value == "lulu" || value == "chtulu" || value == "chtululu") {
      return new Chtullie(value);
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
      enemies = [
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
      enemies = [
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
      enemies = [
        new Inky(value),
        new Jinxy(value),
        new Fish(value),
        new Teethy(value),
        new Ghosty(value),
      ];
      return random(enemies);
    }
    if (value.length == 4) {
      enemies = [new Fish(value), new Teethy(value), new Inky(value)];
      return random(enemies);
    }
    if (value.length == 5) {
      return new Qocto(value);
    }
    if (value.length == 6) {
      return new Leona(value);
    }
    if (value.length > 6) {
      return new Whale(value);
    }
  }
}

function upgradeZapper() {
  upgrade("zapper", player.items.levels.zapper, "⚡");
}
function upgradeTimewarp() {
  upgrade("timewarp", player.items.levels.timewarp, "⌛");
}
function upgradeShield() {
  upgrade("shield", player.items.levels.shield, "🔰");
}
function upgradeHealth() {
  upgrade("health", player.items.levels.health, "❤️");
}
function upgrade(item, level, icon) {
  let price = getPrice(item, level);
  if (player.items.cash >= price && player.items.levels[item] < 5) {
    player.items.cash -= price;
    ui.count[item].elt.innerHTML += icon;
    player.items.levels[item]++;
    ui.button[item].elt.children[0].innerHTML =
      player.items.levels.health === 0 ? "Unlock" : "Upgrade";
    ui.button[item].elt.children[1].innerHTML = getPrice(
      item,
      player.items.levels[item]
    );
    localStorage.setItem("cash", player.items.cash);
    localStorage.setItem("itemlevels", JSON.stringify(player.items.levels));
    checkMax();
  }
}

function getPrice(item, level) {
  return shop[item][level];
}

function checkMax() {
  if (player.items.levels.health == 5) {
    ui.healthBtn.elt.hidden = true;
    ui.count.health.elt.innerHTML = "💯";
  }
  if (player.items.levels.shield == 5) {
    ui.shieldBtn.elt.hidden = true;
    ui.count.shield.elt.innerHTML = "💯";
  }
  if (player.items.levels.timewarp == 5) {
    ui.timewarpBtn.elt.hidden = true;
    ui.count.timewarp.elt.innerHTML = "💯";
  }
  if (player.items.levels.zapper == 5) {
    ui.button.zapper.elt.hidden = true;
    ui.count.zapper.elt.innerHTML = "💯";
  }
}
