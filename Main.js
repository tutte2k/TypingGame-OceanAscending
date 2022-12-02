const target = {
  words: [],
  numbers: "1 2 3 4 5 6 7 8 9 0".split(" "),
  chars: "a b c d e f g h i j k l m n o p q r s t u v x y z".split(" "),
};
const api = {
  kids: {
    get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527",
    put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
  },
  easy: {
    get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca",
    put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
  },
  normal: {
    get: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec",
    put: "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac",
  },
};
const field = {
  hostile: [],
  neutral: [],
  item: [],
  environment: [],
};

var radioBtn;
var postBtn;
var playAgainBtn;
let inputContents;

var data;
var kidsdata;
var easydata;
var normaldata;

var focus;
var paused = false;
var gameOver = false;
var guyDepth = 0;
var totalScore = 0;
var score = 0;
var kills = 0;
var level = 1;
var depth = 0;
var health = 3;
var zapperAvailable = false;
var misses = 0;
var hits = 0;
var missedFishes = 0;
var missesInARow = 0;

var kidsMode;
var easyMode;
var normalMode;

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

  Ghosty.loadAnimationFiles();
  Inky.loadAnimationFiles();
  Croccy.loadAnimationFiles();

  Bolt.loadAnimationFiles();
  Health.loadAnimationFiles();
  LivingDead.loadAnimationFiles();

  Zapper.loadAnimationFiles();

  guy = loadAnimation("./actors/guy.webp", {
    size: [177, 192],
    frames: 48,
  });

  getHighscores(api.kids.get, api.easy.get, api.normal.get);
}
function getHighscores(kidsApiUrl, easyApiUrl, normalApiUrl) {
  httpGet(kidsApiUrl, "json", false, function (response) {
    kidsdata = response;
  });
  httpGet(easyApiUrl, "json", false, function (response) {
    easydata = response;
  });
  httpGet(normalApiUrl, "json", false, function (response) {
    normaldata = response;
  });
}

function togglePause() {
  if (paused && !gameOver) {
    loop();
    paused = !paused;
  } else {
    noLoop();
    paused = !paused;
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
  gameOver = false;
  depth = 0;
  score = 0;
  level = 1;
  guyDepth = 0;
  kills = 0;
  zapperAvailable = false;
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
    depth++;
    kidsMode = radioBtn.value() == "kids";
    easyMode = radioBtn.value() == "easy";
    normalMode = radioBtn.value() == "normal";
    spawnItems();
    if (field.hostile.length == 0 && field.neutral.length == 0) {
      spawnActor();
    } else {
      if (kidsMode) {
        if (score > 100) {
          levelUp(10);
        }
        spawnKidsMode();
      } else if (easyMode) {
        if (score > 200) {
          levelUp(5);
        }
        spawnEasyMode();
      } else if (normalMode) {
        if (score > 330) {
          levelUp(2);
        }
        spawnNormalMode();
      }
    }
  }
}
function spawnItems() {
  if (random() > 0.99 && health < 3) {
    field.item.push(new Health(random(target.numbers)));
  }
  if (random() > 0.99 && health > 1) {
    field.item.push(new LivingDead(random(target.numbers)));
  }
  if (random() > 0.99) {
    field.item.push(new Bolt(random(target.numbers)));
  }
}
function spawnKidsMode() {
  spawnProgression(0.05);

  spawnBoss(200, 0.99, "lulu");
  spawnBoss(500, 0.99, "abe");
  spawnBoss(750, 0.99, "jor");
  spawnBoss(1000, 0.99, "swo");
}
function spawnEasyMode() {
  spawnProgression(0.5);

  spawnRandom(50, 0.99);

  spawnBoss(200, 0.99, "chtulu");
  spawnBoss(500, 0.99, "abezeth");
  spawnBoss(750, 0.99, "jormun");
  spawnBoss(1000, 0.99, "sworde");
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
}
function levelUp(denominator) {
  totalScore += score + depth;
  score = 0;
  level++;
  for (let i = 0; i < 3; i++) {
    const index = Math.round(target.words.length / denominator);
    const word = getNextWord(index);
    const creature = new Shellie(word);
    field.hostile.push(creature);
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
          score += field.hostile[i].text.length;
          kills++;
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
        score += field.neutral[i].score;
        if (field.neutral[i].score > 0) {
          kills++;
        } else {
          missedFishes++;
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
          score += 10;
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
  if (!paused) {
    if (keyCode == 13 && zapperAvailable === true) {
      clearFields();
      field.environment = [];
      zapperAvailable = false;
      field.environment.push(new Zapper(depth));
      focus = null;
    }
    if (paused && !gameOver) {
      loop();
      paused = !paused;
    }
    if (focus) {
      let hit = focus.erode(keyCode);
      if (hit) {
        hits++;
      }
    } else {
      focus = findFocus(keyCode);
      if (focus) {
        let hit = focus.erode(keyCode);
        console.log(hit);
        if (hit) {
          hits++;
        }
      }
    }
  }
}
function virtuaKeyPressed(keyCodeFromChar) {
  if (!paused) {
    if (keyCodeFromChar == 13 && zapperAvailable === true) {
      clearFields();
      field.environment = [];
      zapperAvailable = false;
      field.environment.push(new Zapper(depth));
      focus = null;
    }
    if (paused && !gameOver) {
      loop();
      paused = !paused;
    }
    if (focus) {
      focus.erode(keyCodeFromChar);
    } else {
      focus = findFocus(keyCodeFromChar);
      if (focus) {
        focus.erode(keyCodeFromChar);
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

        missesInARow = 0;
        return field.item[i];
      }
    }
  }
  for (var i = 0; i < field.hostile.length; i++) {
    if (field.hostile[i]) {
      if (field.hostile[i].text.startsWith(char)) {
        field.hostile[i].focused = true;

        missesInARow = 0;
        return field.hostile[i];
      }
    }
  }

  for (var i = 0; i < field.neutral.length; i++) {
    if (field.neutral[i]) {
      if (field.neutral[i].text.startsWith(char)) {
        field.neutral[i].focused = true;
        missesInARow = 0;
        return field.neutral[i];
      }
    }
  }
  misses++;
  missesInARow++;
  if (missesInARow > 10) {
    field.hostile.push(new Snail("10 000 IQ :}"));
  }
  return null;
}
function drawLine() {
  if (!focus) return;
  stroke(1);
  line(90, guyDepth, focus.position.x, focus.position.y);
  textAlign(CENTER);
  textSize(100);

  text(focus.displayText.toUpperCase(), width / 2, height - 50);
}
function drawScore() {
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(`Level: ${level} (${Math.round((score / 350) * 100)}%)`, width / 2, 30);
  text(`Depth: ${depth}m`, 100, height / 2 + 145);
  text(`Catches: ${kills}`, 100, height - 10);
  text(`Missed: ${missedFishes}`, width / 3, height - 10);
  text(
    `Accuracy: ${Math.round((hits / (misses + hits)) * 100)}%`,
    (width / 3) * 2,
    height - 10
  );
  textFont("Helvetica");
  for (let i = 0; i < health; i++) {
    text(`❤️`, width / 2 - 40 + i * 40, height - 10);
  }
  textFont(font);
}
function drawGuy() {
  standardPosition = height / 2;
  if (guyDepth < standardPosition) {
    guyDepth++;
  }
  if (!gameOver) {
    animation(guy, 90, guyDepth);
  }
}
function endGame(enemy) {
  if (enemy.name) {
    if (enemy.name === "LivingDead") {
      clearFields();
    }
  }
  if (health === 0) {
    radioBtn.elt.hidden = true;
    gameOver = true;
    noLoop();
    fill(255);
    strokeWeight(5);
    stroke(0);
    textAlign(LEFT);
    if (radioBtn.value() == "kids") {
      data = kidsdata;
    } else if (radioBtn.value() == "easy") {
      data = easydata;
    } else if (radioBtn.value() == "normal") {
      data = normaldata;
    }
    if (data) {
      let sortable = [];
      for (var entry in data) {
        sortable.push([entry, data[entry]]);
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
    text(`Score: ${totalScore + score}`, width / 2, height / 2);
    text(`Total catches: ${kills}`, width / 2, (height / 3) * 2);
  } else {
    enemy.intact = false;
    if (enemy.focused === true) {
      focus = null;
    }
    health--;
  }
}
function clearFields() {
  for (let i = field.hostile.length; i >= 0; i--) {
    score += 3;
    field.hostile.splice(i, 1);
    kills++;
  }
  for (let i = field.neutral.length; i >= 0; i--) {
    score += 3;
    kills++;
    field.neutral.splice(i, 1);
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
        responseData[inputContents] = totalScore + score;
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
  if (depth > afterDepth && random() > chance) {
    field.hostile.push(getSeaCreature(value));
  }
}
function spawnRandom(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    const indexOfLastWord = target.words.length - 1;
    const randomIndex = Math.round(random(0, indexOfLastWord));
    const word = getNextWord(randomIndex);
    const creature = getSeaCreature(word);
    field.hostile.push(creature);
  }
}
function spawnWhale(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    const indexOfBigWord = 0;
    const word = getNextWord(indexOfBigWord);
    const creature = getSeaCreature(word);
    field.hostile.push(creature);
  }
}
function spawnDoubleTrouble(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    for (let i = 0; i < 2; i++) {
      const indexOfSemiBigWord = Math.round(target.words.length / 3);
      const word = getNextWord(indexOfSemiBigWord);
      const creature = getSeaCreature(word);
      field.hostile.push(creature);
    }
  }
}
function spawnTrippleNipple(belowScore, chance) {
  if (score < belowScore && random() > chance) {
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
