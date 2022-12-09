function preload() {
  target.words = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
  font = loadFont("./assets/RifficFree-Bold.ttf");
  Load.Animations();
  getStoredCash();
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
  Draw.Canvas();
  Draw.Pausebutton();
  Draw.Radiobuttons();
  Draw.Upgradebuttons();
  game.mode = config.easy;
  focus = null;
  textFont(font);
  getHighscores();
}

function windowResized() {
  if (windowWidth > 1000) {
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
    updateFields();
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
function updateFields() {
  updateField("item");
  updateField("hostile");
  updateField("neutral");
  updateField("environment");
}

function updateField(fieldType) {
  for (var i = field[fieldType].length - 1; i >= 0; i--) {
    if (field[fieldType][i]) {
      field[fieldType][i].update();
      if (actorWasFocused(i, fieldType)) {
        focus = field[fieldType][i];
      } else if (field[fieldType][i].intact) {
        field[fieldType][i].draw();
      } else {
        if (field[fieldType][i].text) {
          player.experience += field[fieldType][i].text.length;
          player.catched.fishes++;
          if (field[fieldType][i].loot) {
            field.item.push(getLoot(field[fieldType][i].loot));
          }
          if (field[fieldType][i].score) {
            if (field[fieldType][i].score > 0) {
              player.catched.fishes++;
            } else {
              player.missed.fishes++;
            }
          }
          field[fieldType].splice(i, 1);
          focus = null;
        }
      }
    }
  }
}

function actorWasFocused(i, fieldType) {
  return (
    focus == null && field[fieldType][i].intact && field[fieldType][i].focused
  );
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
    let hit = focus.erode(keyCodeFromChar);
    if (hit) {
      player.catched.letters++;
    }
  } else {
    focus = findFocus(keyCodeFromChar);
    if (focus) {
      let hit = focus.erode(keyCodeFromChar);
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
    field.hostile.length = 0;
    field.neutral.length = 0;
    field.item.length = 0;
    noLoop();
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
          .then(() => (ui.post.elt.hidden = true));
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
  upgrade("zapper");
}
function upgradeTimewarp() {
  upgrade("timewarp");
}
function upgradeShield() {
  upgrade("shield");
}
function upgradeHealth() {
  upgrade("health");
}
function upgrade(item) {
  let level = player.items.levels[item];
  let price = getPrice(item, level);
  if (player.items.cash >= price && player.items.levels[item] < 5) {
    player.items.cash -= price;
    player.items.levels[item]++;
    ui.button[item].elt.children[0].innerHTML =
      player.items.levels[item] === 0
        ? "Unlock"
        : `Level ${player.items.levels[item] + 1}`;
    ui.button[item].elt.children[1].innerHTML = getPrice(
      item,
      player.items.levels[item]
    );
    localStorage.setItem("cash", player.items.cash);
    localStorage.setItem("itemlevels", JSON.stringify(player.items.levels));
    checkMax(item);
  }
}

function getPrice(item, level) {
  return shop[item][level];
}

function checkMax(item) {
  if (player.items.levels[item] == 5) {
    ui.button[item].elt.hidden = true;
    ui.count[item].elt.innerHTML = "💯";
  }
}
