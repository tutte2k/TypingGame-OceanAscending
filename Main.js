var shake;
var shakeDepth;

var gameStarted = false;
function preload() {
  target.words = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
  font = loadFont("./assets/RifficFree-Bold.ttf");
  Load.Animations();
  getStored();
}
function getStored() {
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
  game.paused = !game.paused;
  if (game.paused && !game.over) {
    noLoop();
  } else if (!game.over) {
    loop();
  }
}
function setup() {
  Draw.Canvas();
  Draw.Pausebutton();
  Draw.Radiobuttons();
  Draw.Upgradebuttons();
  game.mode = config.easy;
  shake = false;
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

  player.health = player.items.levels.health || 0;

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
  game.mode = config[ui.radio.value()];
  loop();
}
function handleField() {
  updateFields();

  if (frameCount % 60 === 0) {
    if (player.depth > shakeDepth) {
      shake = false;
    }
    player.depth++;
    Spawn.Items();
    if (field.hostile.length == 0 && field.neutral.length == 0) {
      Spawn.Single();
      if (!gameStarted && windowWidth > 1000) {
        togglePause();
      }
    } else {
      if (player.experience > game.mode.experience) {
        levelUp();
      }
      game.mode.spawn.progression();
      game.mode.spawn.boss();
    }
  }
}
function updateFields() {
  updateField("item");
  updateField("hostile");
  updateField("neutral");
  updateField("environment");
}
function levelUp() {
  player.totalScore += player.experience + player.depth;
  player.experience = 0;
  player.level++;
  for (let i = 0; i < 3; i++) {
    const index = Math.round(
      target.words.length / game.mode.spawn.indexDenominator
    );
    const word = Spawn.getNextWord(index);
    const creature = new Shellie(word);
    field.hostile.push(creature);
    if (random() > 0.99) {
      field.item.push(new Obsidian());
    }
  }
}

function updateField(fieldType) {
  for (var i = field[fieldType].length - 1; i >= 0; i--) {
    if (actorIsPresent(fieldType, i)) {
      field[fieldType][i].update();
      if (actorWasFocused(i, fieldType)) {
        focus = field[fieldType][i];
      } else if (actorIsIntact(fieldType, i)) {
        field[fieldType][i].draw();
      } else {
        if (actorHasText(fieldType, i)) {
          player.experience += field[fieldType][i].text.length;
          player.catched.fishes++;
          if (field[fieldType][i].score === 0) {
            player.catched.fishes--;
            player.missed.fishes++;
          } else if (field[fieldType][i].score > 0) {
            player.experience += field[fieldType][i].score;
          }

          field[fieldType][i].loot && dropLoot(fieldType, i);

          field[fieldType].splice(i, 1);
          focus = null;
        }
      }
    }
  }
}

function actorIsIntact(fieldType, i) {
  return field[fieldType][i].intact;
}

function dropLoot(fieldType, i) {
  field.item.push(Actor.Loot(field[fieldType][i].loot));
}

function actorWasFocused(i, fieldType) {
  return (
    focus == null && field[fieldType][i].intact && field[fieldType][i].focused
  );
}

function keyPressed() {
  if (keyCode === 32) {
    gameStarted = true;
    togglePause();
    return false;
  }
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
  for (const type in field) {
    if (Object.hasOwnProperty.call(field, type)) {
      for (var i = 0; i < field[type].length; i++) {
        if (
          actorIsPresent(type, i) &&
          actorHasText(type, i) &&
          actorTextStartsWith(type, i, char)
        ) {
          field[type][i].focused = true;
          player.missed.letters.consecutive = 0;
          return field[type][i];
        }
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

function actorTextStartsWith(type, i, char) {
  return field[type][i].text.startsWith(char);
}

function actorHasText(type, i) {
  return field[type][i].text;
}

function actorIsPresent(type, i) {
  return field[type][i];
}

function endGame(enemy) {
  enemy.name && enemy.name === "LivingDead" && castLivingDead();

  if (player.invulnerable === true) {
    setIntactFalse(enemy);
  } else {
    player.health--;
    tryGameOver(enemy);
  }
}
function tryGameOver(enemy) {
  if (player.health === -1) {
    ui.pause.elt.hidden = true;
    ui.radio.elt.hidden = true;
    game.over = true;
    localStorage.setItem("cash", player.items.cash);
    clearFields();
    noLoop();
    if (game.mode.api.data) {
      Draw.Highscores();
      Draw.Inputfield();
      Draw.Postbutton();
    }
    Draw.Playbutton();
    Draw.Gameover();
  } else {
    setIntactFalse(enemy);
  }
}

function setIntactFalse(enemy) {
  enemy.intact = false;
  if (enemy.focused === true) {
    focus = null;
  }
  player.missed.fishes++;
  player.catched.fishes--;
}

function castLivingDead() {
  field.environment.push(new Death(player.depth));
  clearFields();
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
