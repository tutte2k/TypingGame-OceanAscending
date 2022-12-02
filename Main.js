const target = {
  words: [],
  numbers: "1 2 3 4 5 6 7 8 9 0".split(" "),
  chars: "a b c d e f g h i j k l m n o p q r s t u v x y z".split(" "),
};

const api = {
  data: {},
  kids: {
    get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527",
    put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
    data: {},
  },
  easy: {
    get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca",
    put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
    data: {},
  },
  normal: {
    get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec",
    put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
    data: {},
  },
};

const field = {
  hostile: [],
  neutral: [],
  item: [],
  environment: [],
};

const game = {
  paused: false,
  over: false,

  difficulty: {
    kids: false,
    easy: false,
    normal: true,
  },
};

const player = {
  animation: null,
  position: 0,
  health: 3,
  level: 1,
  experience: 0,
  depth: 0,
  totalScore: 0,

  catched: {
    fishes: 0,
    letters: 0,
  },

  missed: {
    fishes: 0,
    letters: {
      total: 0,
      consecutive: 0,
    },
  },
  items: {
    zapper: false,
    cash: 0,
  },
};

let radioBtn;
let postBtn;
let playAgainBtn;
let focus;
let inputContents;

function preload() {
  target.words = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
  font = loadFont("./assets/RifficFree-Bold.ttf");

  Whale.loadAnimationFiles();
  Teethy.loadAnimationFiles();
  Qocto.loadAnimationFiles();
  Shotty.loadAnimationFiles();
  Jormungandr.loadAnimationFiles();
  Abezethibou.loadAnimationFiles();
  Swordeath.loadAnimationFiles();
  Shellie.loadAnimationFiles();
  Leona.loadAnimationFiles();
  Jinxy.loadAnimationFiles();
  Inker.loadAnimationFiles();
  Fish.loadAnimationFiles();
  Chtullie.loadAnimationFiles();
  Puffer.loadAnimationFiles();
  Spearo.loadAnimationFiles();
  Snail.loadAnimationFiles();
  Bezzellebobba.loadAnimationFiles();
  Huitzilopochtli.loadAnimationFiles();

  Ghosty.loadAnimationFiles();
  Inky.loadAnimationFiles();
  Croccy.loadAnimationFiles();

  Bolt.loadAnimationFiles();
  Health.loadAnimationFiles();
  LivingDead.loadAnimationFiles();

  Emerald.loadAnimationFiles();
  Prism.loadAnimationFiles();
  Topaz.loadAnimationFiles();
  Diamond.loadAnimationFiles();
  Amethyst.loadAnimationFiles();
  Obsidian.loadAnimationFiles();
  Sapphire.loadAnimationFiles();

  Zapper.loadAnimationFiles();

  player.animation = loadAnimation("./actors/guy.webp", {
    size: [177, 192],
    frames: 48,
  });

  getHighscores();
}
function getHighscores(kids, easy, normal) {
  httpGet(api.kids.get, "json", false, function (response) {
    api.kids.data = response;
  });
  httpGet(api.easy.get, "json", false, function (response) {
    api.easy.data = response;
  });
  httpGet(api.normal.get, "json", false, function (response) {
    api.normal.data = response;
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
    resizeCanvas(windowWidth, windowHeight - windowHeight / 3);
  } else {
    let keyboard = document.getElementById("keyboard");
    keyboard.hidden = true;
  }

  setUpButtons();
  focus = null;
  textFont(font);
}
function setUpButtons() {
  button = createButton("Pause");
  button.position(width / 4, 10);
  button.mousePressed(togglePause);
  radioBtn = createRadio();
  radioBtn.option("kids");
  radioBtn.option("easy");
  var normalOptions = radioBtn.option("normal");
  normalOptions.checked = true;
  radioBtn.style("width", "10px");
  radioBtn.position(10, 10);
  radioBtn.mouseClicked(resetGame);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  clear();
  drawLine();
  drawScore();
  handleField();
  drawGuy();
}
function resetGame() {
  game.over = false;
  player.depth = 0;
  player.experience = 0;
  player.level = 1;
  player.position = 0;
  player.catched.fishes = 0;
  player.missed.letters.total = 0;
  player.catched.letters = 0;
  player.missed.fishes = 0;
  player.missed.letters.consecutive = 0;
  player.items.zapper = false;
  field.hostile = [];
  field.neutral = [];
  field.item = [];
  field.environment = [];
  focus = null;
  radioBtn.elt.hidden = false;
  loop();
}
function handleField() {
  updateItemField();
  updateField();
  updateSecondField();
  updateEnvironmentField();

  if (frameCount % 60 === 0) {
    player.depth++;
    game.difficulty.kids = radioBtn.value() == "kids";
    game.difficulty.easy = radioBtn.value() == "easy";
    game.difficulty.normal = radioBtn.value() == "normal";
    spawnItems();
    if (field.hostile.length == 0 && field.neutral.length == 0) {
      spawnActor();
    } else {
      if (game.difficulty.kids) {
        if (player.experience > 100) {
          levelUp(1);
        }
        spawnKidsMode();
      } else if (game.difficulty.easy) {
        if (player.experience > 200) {
          levelUp(5);
        }
        spawnEasyMode();
      } else if (game.difficulty.normal) {
        if (player.experience > 330) {
          levelUp(2);
        }
        spawnNormalMode();
      }
    }
  }
}
function spawnItems() {
  if (random() > 0.99 && player.health < 3) {
    field.item.push(new Health(random(target.numbers)));
  }
  if (random() > 0.99 && player.health > 1) {
    field.item.push(new LivingDead(random(target.numbers)));
  }
  if (random() > 0.99) {
    field.item.push(new Bolt(random(target.numbers)));
  }
  if (random() > 0.99) {
    field.item.push(new Sapphire());
  }
}
function spawnKidsMode() {
  spawnProgression(0.05);

  spawnBoss(200, 0.99, "lulu");
  spawnBoss(500, 0.99, "abe");
  spawnBoss(750, 0.99, "jor");
  spawnBoss(1000, 0.99, "swo");
  spawnBoss(1250, 0.99, "hui");
  spawnBoss(1500, 0.99, "bez");
}
function spawnEasyMode() {
  spawnProgression(0.5);

  spawnRandom(50, 0.99);

  spawnBoss(200, 0.99, "chtulu");
  spawnBoss(500, 0.99, "abezeth");
  spawnBoss(750, 0.99, "jormun");
  spawnBoss(1000, 0.99, "sworde");
  spawnBoss(1250, 0.99, "huitzi");
  spawnBoss(1500, 0.99, "bezzelle");
}
function spawnNormalMode() {
  spawnProgression(1);

  spawnDoubleTrouble(50, 0.99);
  spawnTrippleNipple(50, 0.99);
  spawnWhale(100, 0.99);
  spawnRandom(150, 0.99);

  spawnBoss(200, 0.99, "chtululu");
  spawnBoss(500, 0.99, "abezethibou");
  spawnBoss(750, 0.99, "jormungandr");
  spawnBoss(1000, 0.99, "swordeath");
  spawnBoss(1250, 0.99, "huitzilopochtli");
  spawnBoss(1500, 0.99, "bezzellebobba");
}
function levelUp(denominator) {
  player.totalScore += player.experience + player.depth;
  player.experience = 0;
  player.level++;
  for (let i = 0; i < 3; i++) {
    const index = Math.round(target.words.length / denominator);
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
      if (field.hostile[i].intact) {
        field.hostile[i].draw();
      } else {
        if (field.hostile[i].text) {
          player.experience += field.hostile[i].text.length;
          player.catched.fishes++;

          if (field.hostile[i].loot) {
            const loot = {
              sapphire: new Sapphire(),
              amethyst: new Amethyst(),
              diamond: new Diamond(),
              topaz: new Topaz(),
              emerald: new Emerald(),
              prism: new Prism(),
            };
            field.item.push(loot[field.hostile[i].loot]);
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
        if (field.environment[i].focused) {
          focus = null;
        }
        field.environment.splice(i, 1);
      }
    }
  }
}
function keyPressed() {
  if (!game.paused) {
    if (keyCode == 13 && player.items.zapper === true) {
      clearFields();
      field.environment = [];
      player.items.zapper = false;
      field.environment.push(new Zapper(player.depth));
      focus = null;
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
  if (!game.paused) {
    if (keyCodeFromChar == 13 && player.items.zapper === true) {
      clearFields();
      field.environment = [];
      player.items.zapper = false;
      field.environment.push(new Zapper(player.depth));
      focus = null;
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
    field.hostile.push(new Snail("10 000 IQ :}"));
  }
  return null;
}
function drawLine() {
  if (!focus) return;
  stroke(1);
  line(90, player.position, focus.position.x, focus.position.y);
  textAlign(CENTER);
  textSize(100);

  text(focus.displayText.toUpperCase(), width / 2, height - 50);
}
function drawScore() {
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(
    `Level: ${player.level} (${Math.round((player.experience / 350) * 100)}%)`,
    width / 2,
    30
  );
  text(`Depth: ${player.depth}m`, 100, height / 2 + 145);
  text(`Catches: ${player.catched.fishes}`, 100, height - 10);
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
function drawGuy() {
  standardPosition = height / 2;
  if (player.position < standardPosition) {
    player.position++;
  }
  if (!game.over) {
    animation(player.animation, 90, player.position);
  }
}
function endGame(enemy) {
  if (enemy.name) {
    if (enemy.name === "LivingDead") {
      clearFields();
    }
  }
  if (player.health === 0) {
    radioBtn.elt.hidden = true;
    game.over = true;
    clearFields();
    noLoop();
    fill(255);
    strokeWeight(5);
    stroke(0);
    textAlign(LEFT);
    if (radioBtn.value() == "kids") {
      api.data = api.kids.data;
    } else if (radioBtn.value() == "easy") {
      api.data = api.easy.data;
    } else if (radioBtn.value() == "normal") {
      api.data = api.normal.data;
    }
    if (api.data) {
      let sortable = [];
      for (var entry in api.data) {
        sortable.push([entry, api.data[entry]]);
      }
      sortable.sort(function (a, b) {
        return b[1] - a[1];
      });
      const top10 = sortable.slice(0, 10);
      text(`${radioBtn.value()}Highscores`, 30, 30);
      for (let i = 0; i < top10.length; i++) {
        text(`#${i + 1} ${top10[i][0]} : ${top10[i][1]}`, 30, 70 + i * 40);
      }
      usernameInput = createInput("", "text");
      usernameInput.position(30, height / 2);
      usernameInput.input(onInput);
      postBtn = createButton("Submit Score");
      postBtn.position(30, height / 2 + 30);
      postBtn.mouseClicked(postRequest);
    } else {
      text(`Highscores:`, 30, 30);
      text(`Max 500 requests/day`, 30, 70);
    }
    textAlign(CENTER);
    textSize(80);

    playAgainBtn = createButton("Play Again");
    playAgainBtn.position(30, height / 2 + 60);
    playAgainBtn.mouseClicked(goPlayAgain);

    text("Game Over!", width / 2, height / 3);
    text(
      `Score: ${player.totalScore + player.experience}`,
      width / 2,
      height / 2
    );
    text(
      `Total catches: ${player.catched.fishes}`,
      width / 2,
      (height / 3) * 2
    );
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
  playAgainBtn.remove();
  postBtn.remove();
  usernameInput.remove();
  resetGame();
}
function onInput() {
  inputContents = this.value();
}
function postRequest() {
  if (inputContents) {
    let get_api_url;
    let post_api_url;
    if (radioBtn.value() == "kids") {
      get_api_url = api.kids.get;
      post_api_url = api.kids.put;
    } else if (radioBtn.value() == "easy") {
      get_api_url = api.easy.get;
      post_api_url = api.easy.put;
    } else if (radioBtn.value() == "normal") {
      get_api_url = api.normal.get;
      post_api_url = api.normal.put;
    }
    postBtn.elt.hidden = true;
    let responseData;
    fetch(get_api_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        responseData = await response.json();
      })
      .then(async () => {
        responseData[inputContents] = Math.round(
          player.totalScore +
            player.experience *
              (player.catched.letters /
                (player.missed.letters.total + player.catched.letters))
        );

        fetch(post_api_url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(responseData),
        });
      });
  }
}
function spawnBoss(afterDepth, chance, value) {
  if (player.depth > afterDepth && random() > chance) {
    let creature = getSeaCreature(value);
    field.hostile.push(creature);
    field.item.push(creature.Loot);
  }
}
function spawnRandom(belowScore, chance) {
  if (player.experience < belowScore && random() > chance) {
    const indexOfLastWord = target.words.length - 1;
    const randomIndex = Math.round(random(0, indexOfLastWord));
    const word = getNextWord(randomIndex);
    const creature = getSeaCreature(word);
    field.hostile.push(creature);
  }
}
function spawnWhale(belowScore, chance) {
  if (player.experience < belowScore && random() > chance) {
    const indexOfBigWord = 0;
    const word = getNextWord(indexOfBigWord);
    const creature = getSeaCreature(word);
    field.hostile.push(creature);
  }
}
function spawnDoubleTrouble(belowScore, chance) {
  if (player.experience < belowScore && random() > chance) {
    for (let i = 0; i < 2; i++) {
      const indexOfSemiBigWord = Math.round(target.words.length / 3);
      const word = getNextWord(indexOfSemiBigWord);
      const creature = getSeaCreature(word);
      field.hostile.push(creature);
    }
  }
}
function spawnTrippleNipple(belowScore, chance) {
  if (player.experience < belowScore && random() > chance) {
    for (let i = 0; i < 3; i++) {
      const indexOfMediumWord = Math.round(target.words.length / 5);
      const word = getNextWord(indexOfMediumWord);
      const creature = getSeaCreature(word);
      field.hostile.push(creature);
    }
  }
}
function spawnProgression(chance) {
  if (random() < chance) {
    const indexOfLastWord = target.words.length - 1;
    const word = getNextWord(indexOfLastWord);
    const creature = getSeaCreature(word);
    if (creature.name) {
      field.neutral.push(creature);
    } else {
      field.hostile.push(creature);
    }
  }
}
function spawnActor() {
  const indexOfLastWord = target.words.length - 1;
  const word = getNextWord(indexOfLastWord);
  const creature = getSeaCreature(word);
  if (creature.name) {
    field.neutral.push(creature);
  } else {
    field.hostile.push(creature);
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
