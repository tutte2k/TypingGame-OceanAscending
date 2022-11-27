const CHARSTRING = "a b c d e f g h i j k l m n o p q r s t u v x y z";
const NUMBERSTRING = "1 2 3 4 5 6 7 8 9 0";
const CHARS = CHARSTRING.split(" ");
const WORDS = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
const NUMBERS = NUMBERSTRING.split(" ");

var paused = false;
var gameOver = false;

var focus;
var radio;
var postBtn;
var playAgain;

var data;
var kidsdata;
var easydata;
var normaldata;
let inputContents;

var field = [];
var secondfield = [];
var itemfield = [];
var environmentfield = [];
var guyDepth = 0;

var CURRENT_DEPTH = 0;
var totalScore = 0;
var score = 0;
var kills = 0;
var level = 1;
var depth = 0;

var health = 3;
var zapperAvailable = false;

var misses = 0;

function preload() {
  font = loadFont("./assets/RifficFree-Bold.ttf");

  Whale.loadAnimationFiles();
  Teethy.loadAnimationFiles();
  Qocto.loadAnimationFiles();
  Shotty.loadAnimationFiles();
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

  guy = loadAnimation(
    "./assets/sprites/guy/guy (1).png",
    "./assets/sprites/guy/guy (2).png",
    "./assets/sprites/guy/guy (3).png",
    "./assets/sprites/guy/guy (4).png",
    "./assets/sprites/guy/guy (5).png",
    "./assets/sprites/guy/guy (6).png",
    "./assets/sprites/guy/guy (7).png",
    "./assets/sprites/guy/guy (8).png",
    "./assets/sprites/guy/guy (9).png",
    "./assets/sprites/guy/guy (10).png",
    "./assets/sprites/guy/guy (11).png",
    "./assets/sprites/guy/guy (12).png",
    "./assets/sprites/guy/guy (13).png",
    "./assets/sprites/guy/guy (14).png",
    "./assets/sprites/guy/guy (15).png",
    "./assets/sprites/guy/guy (16).png",
    "./assets/sprites/guy/guy (17).png",
    "./assets/sprites/guy/guy (18).png",
    "./assets/sprites/guy/guy (19).png",
    "./assets/sprites/guy/guy (20).png",
    "./assets/sprites/guy/guy (21).png",
    "./assets/sprites/guy/guy (22).png",
    "./assets/sprites/guy/guy (23).png",
    "./assets/sprites/guy/guy (24).png",
    "./assets/sprites/guy/guy (25).png",
    "./assets/sprites/guy/guy (26).png",
    "./assets/sprites/guy/guy (27).png",
    "./assets/sprites/guy/guy (28).png",
    "./assets/sprites/guy/guy (29).png",
    "./assets/sprites/guy/guy (30).png",
    "./assets/sprites/guy/guy (31).png",
    "./assets/sprites/guy/guy (32).png",
    "./assets/sprites/guy/guy (33).png",
    "./assets/sprites/guy/guy (34).png",
    "./assets/sprites/guy/guy (35).png",
    "./assets/sprites/guy/guy (36).png",
    "./assets/sprites/guy/guy (37).png",
    "./assets/sprites/guy/guy (38).png",
    "./assets/sprites/guy/guy (39).png",
    "./assets/sprites/guy/guy (40).png",
    "./assets/sprites/guy/guy (41).png"
  );

  const kidsApiUrl =
    "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527";
  httpGet(kidsApiUrl, "json", false, function (response) {
    kidsdata = response;
  });
  const easyApiUrl =
    "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca";
  httpGet(easyApiUrl, "json", false, function (response) {
    easydata = response;
  });
  const normalApiUrl =
    "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec";
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
function getSeaCreature(value) {
  if (value == "lulu" || value == "chtulu" || value == "chtululu") {
    x;
    return new Chtullie(value);
  }
  if (value.length == 1) {
    enemies = [
      new Shotty(value),
      new Ghosty(value),
      new Puffer(value),
      new Inker(value),
      new Inky(value),
    ];
    return random(enemies);
  }
  if (value.length == 2) {
    enemies = [
      new Jinxy(value),
      new Puffer(value),
      new Inker(value),
      new Inky(value),
    ];
    return random(enemies);
  }
  if (value.length == 3) {
    enemies = [new Jinxy(value), new Fish(value), new Teethy(value)];
    return random(enemies);
  }
  if (value.length == 4) {
    enemies = [new Fish(value), new Teethy(value)];
    return random(enemies);
  }
  if (value.length == 5) {
    return new Qocto(value);
  }
  if (value.length < 7) {
    return new Leona(value);
  }
  if (value.length > 7) {
    return new Whale(value);
  }
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  button = createButton("Pause");
  button.position(80, height / 2 + 165);
  button.mousePressed(togglePause);
  canvas.parent("ocean");
  radio = createRadio();
  radio.option("kids");
  radio.option("easy");
  var normalOptions = radio.option("normal");
  normalOptions.checked = true;
  radio.style("width", "10px");
  radio.position(10, 10);
  radio.mouseClicked(resetGame);
  focus = null;
  textFont(font);
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
  depth = 0;
  score = 0;
  level = 1;
  health = 3;
  guyDepth = 0;
  kills = 0;
  zapperAvailable = false;
  field = [];
  secondfield = [];
  itemfield = [];
  environmentfield = [];
  focus = null;
  radio.elt.hidden = false;
  loop();
}
function handleField() {
  updateItemField();
  updateField();
  updateSecondField();
  updateEnvironmentField();

  if (frameCount % 60 === 0) {
    depth++;
    CURRENT_DEPTH++;
    var kidsMode = radio.value() == "kids";
    var easyMode = radio.value() == "easy";
    var normalMode = radio.value() == "normal";

    if (random() > 0.99 && health < 3) {
      itemfield.push(new Health(random(NUMBERS)));
    }
    if (random() > 0.99 && health > 1) {
      itemfield.push(new LivingDead(random(NUMBERS)));
    }
    if (random() > 0.99) {
      itemfield.push(new Bolt(random(NUMBERS)));
    }
    if (kidsMode) {
      if (field.length == 0 && secondfield.length == 0) {
        spawnOne();
      } else {
        spawnProgression(0.15);
      }
      spawnCroccy(0.9);
      spawnChtullie(100, 0.99, "lulu");
    } else if (easyMode) {
      if (field.length == 0 && secondfield.length == 0) {
        spawnOne();
      } else {
        spawnProgression(0.5);
      }

      spawnSpearo(0.99);
      spawnCroccy(0.95);
      spawnGhostyBurst(0.99);
      spawnRandom(50, 0.99);
      spawnChtullie(200, 0.99, "chtulu");
    } else if (normalMode) {
      if (field.length == 0 && secondfield.length == 0) {
        spawnOne();
      } else {
        spawnProgression(1);
      }

      spawnSpearo(0.99);
      spawnCroccy(0.95);
      spawnBurst(0.99);
      spawnGhostyBurst(0.99);
      //belowscore
      spawnDoubleTrouble(50, 0.99);
      spawnTrippleNipple(10, 0.99);
      spawnWhale(100, 0.99);
      spawnRandom(150, 0.99);
      //depth
      spawnChtullie(300, 0.99, "chtululu");
    }
  }
  if (kidsMode) {
    if (score > 100) {
      totalScore += score + depth;
      score = 0;
      level++;
      for (let i = 0; i < 3; i++) {
        field.push(new Shellie(WORDS.pop()));
      }
    }
  } else if (easyMode) {
    if (score > 200) {
      totalScore += score + depth;
      score = 0;
      level++;
      for (let i = 0; i < 3; i++) {
        field.push(new Shellie(WORDS.splice(WORDS.length / 3, 1)[0]));
      }
    }
  } else {
    if (score > 330) {
      totalScore += score + depth;
      score = 0;
      level++;
      for (let i = 0; i < 3; i++) {
        field.push(new Shellie(WORDS.splice(WORDS.length / 2, 1)[0]));
      }
    }
  }
}
function updateField() {
  for (var i = field.length - 1; i >= 0; i--) {
    if (field[i]) {
      field[i].update();
      if (field[i].intact) {
        field[i].draw();
      } else {
        if (field[i].text) {
          score += field[i].text.length;
          kills++;
          field.splice(i, 1);
          focus = null;
        }
      }
    }
  }
}
function updateSecondField() {
  for (var i = secondfield.length - 1; i >= 0; i--) {
    if (secondfield[i]) {
      secondfield[i].update();
      if (secondfield[i].intact) {
        secondfield[i].draw();
      } else if (!secondfield.intact) {
        score += secondfield[i].score;
        if (secondfield[i].score > 0) {
          kills++;
        }
        if (secondfield[i].focused) {
          focus = null;
        }
        secondfield.splice(i, 1);
      }
    }
  }
}
function updateItemField() {
  for (var i = itemfield.length - 1; i >= 0; i--) {
    if (itemfield[i]) {
      itemfield[i].update();
      if (itemfield[i].intact) {
        itemfield[i].draw();
      } else if (!itemfield.intact) {
        if (itemfield[i].focused) {
          focus = null;
        }
        itemfield.splice(i, 1);
      }
    }
  }
}
function updateEnvironmentField() {
  for (var i = environmentfield.length - 1; i >= 0; i--) {
    if (environmentfield[i]) {
      environmentfield[i].update();
      if (environmentfield[i].intact) {
        environmentfield[i].draw();
      } else if (!environmentfield.intact) {
        if (environmentfield[i].focused) {
          focus = null;
        }
        environmentfield.splice(i, 1);
      }
    }
  }
}
function keyPressed() {
  if (!paused) {
    if (keyCode == 13 && zapperAvailable === true) {
      for (let i = field.length; i > -1; i--) {
        score += 3;
        field.splice(i, 1);
        kills++;
      }
      for (let i = secondfield.length; i > -1; i--) {
        score += 3;
        kills++;
        secondfield.splice(i, 1);
      }
      environmentfield = [];
      zapperAvailable = false;
      environmentfield.push(new Zapper(CURRENT_DEPTH));
      focus = null;
    }
    if (paused && !gameOver) {
      loop();
      paused = !paused;
    }
    if (focus) {
      focus.erode(keyCode);
    } else {
      focus = findFocus(keyCode);
      if (focus) {
        focus.erode(keyCode);
      }
    }
  }
}
function findFocus(code) {
  var char = String.fromCharCode(code).toLowerCase();
  for (var i = 0; i < itemfield.length; i++) {
    if (itemfield[i]) {
      if (itemfield[i].text.startsWith(char)) {
        itemfield[i].focused = true;
        misses = 0;
        return itemfield[i];
      }
    }
  }
  for (var i = 0; i < field.length; i++) {
    if (field[i]) {
      if (field[i].text.startsWith(char)) {
        field[i].focused = true;
        misses = 0;
        return field[i];
      }
    }
  }

  for (var i = 0; i < secondfield.length; i++) {
    if (secondfield[i]) {
      if (secondfield[i].text.startsWith(char)) {
        secondfield[i].focused = true;
        misses = 0;
        return secondfield[i];
      }
    }
  }
  misses++;
  if (misses > 10) {
    field.push(new Snail("10 000 IQ :}"));
  }
  return null;
}
function drawLine() {
  if (!focus) return;
  stroke(1);
  line(90, guyDepth, focus.position.x, focus.position.y);
  textAlign(CENTER);
  textSize(100);
  text(focus.completedText.toUpperCase(), width / 2, height - 50);
}
function drawScore() {
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(`Level ${level} (${Math.round((score / 350) * 100)}%)`, width / 2, 30);
  text(`Depth ${depth}m`, 100, height / 2 + 145);
  text(`Catches ${kills}`, 100, height - 10);
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

  animation(guy, 90, guyDepth);
}
function endGame(enemy) {
  if (enemy.name) {
    if (enemy.name === "LivingDead") {
      for (let i = field.length; i > -1; i--) {
        score += 3;
        field.splice(i, 1);
        kills++;
      }
      for (let i = secondfield.length; i > -1; i--) {
        score += 3;
        kills++;
        secondfield.splice(i, 1);
      }
    }
  }
  if (health === 0) {
    radio.elt.hidden = true;
    gameOver = true;
    noLoop();
    fill(255);
    noStroke();
    textAlign(LEFT);
    if (radio.value() == "kids") {
      data = kidsdata;
    } else if (radio.value() == "easy") {
      data = easydata;
    } else if (radio.value() == "normal") {
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
      text(`${radio.value()}Highscores`, 30, 30);
      for (let i = 0; i < top10.length; i++) {
        text(`#${i + 1} ${top10[i][0]} : ${top10[i][1]}`, 30, 70 + i * 40);
      }
    }
    textAlign(CENTER);
    textSize(80);
    usernameInput = createInput("Name", "text");
    usernameInput.position(30, height / 2);
    usernameInput.input(onInput);
    postBtn = createButton("Submit Score");
    postBtn.position(30, height / 2 + 30);
    postBtn.mouseClicked(postRequest);

    playAgain = createButton("Play Again");
    playAgain.position(30, height / 2 + 60);
    playAgain.mouseClicked(goPlayAgain);

    text("Game Over!", width / 2, height / 3);
    text(`Score ${totalScore + score}`, width / 2, height / 2);
    text(`Total catches ${kills}`, width / 2, (height / 3) * 2);
  } else {
    enemy.intact = false;
    if (enemy.focused === true) {
      focus = null;
    }
    health--;
  }
}
function goPlayAgain() {
  playAgain.remove();
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
    if (radio.value() == "kids") {
      get_api_url =
        "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527";
      post_api_url =
        "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/7872d5c0-aac9-4ace-9624-96215c65d527?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac";
    } else if (radio.value() == "easy") {
      get_api_url =
        "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca";
      post_api_url =
        "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/2bf39cf4-8b8c-40da-b4b6-328ce40363ca?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac";
    } else if (radio.value() == "normal") {
      get_api_url =
        "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec";
      post_api_url =
        "https://api.jsonstorage.net/v1/json/ab0d2017-8d1b-452e-95d3-eacc1ecbc3ad/0d51decd-56ba-45d1-ace6-eec4ddb43bec?apiKey=74595edf-2138-43c5-aee8-0b94a8c76fac";
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
// spawns
function spawnSpearo(chance) {
  if (random() > chance) {
    creature = new Spearo(random(CHARS));
    field.push(creature);
  }
}
function spawnCroccy(chance) {
  if (random() > chance) {
    creature = new Croccy(WORDS.pop());
    secondfield.push(creature);
  }
}
function spawnBurst(chance) {
  if (random() > chance) {
    for (let i = 0; i < 5; i++) {
      let creature = getSeaCreature(random(CHARS));
      if (creature.name) {
        secondfield.push(creature);
      } else {
        field.push(creature);
      }
    }
  }
}
function spawnGhostyBurst(chance) {
  if (random() > chance) {
    for (let i = 0; i < 3; i++) {
      let number = random(NUMBERS) + random(NUMBERS) + random(NUMBERS);
      let creature = new Ghosty(number);
      secondfield.push(creature);
    }
  }
}
function spawnChtullie(chtullieDepth, chance, value) {
  if (depth > chtullieDepth && random() > chance) {
    field.push(getSeaCreature(value));
  }
}
function spawnRandom(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    let creature = getSeaCreature(
      WORDS.splice(random(0, WORDS.length - 100), 1)[0]
    );
    field.push(creature);
  }
}
function spawnCreature(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    let creature = getSeaCreature(WORDS.pop());
    if (creature.name) {
      secondfield.push(creature);
    } else {
      field.push(creature);
    }
  }
}
function spawnWhale(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    let creature = getSeaCreature(WORDS.splice(0, 1)[0]);
    field.push(creature);
  }
}
function spawnDoubleTrouble(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    for (let i = 0; i < 2; i++) {
      let creature = getSeaCreature(WORDS.splice(WORDS.length / 2, 1)[0]);
      field.push(creature);
    }
  }
}
function spawnTrippleNipple(belowScore, chance) {
  if (score < belowScore && random() > chance) {
    for (let i = 0; i < 2; i++) {
      let creature = getSeaCreature(WORDS.splice(WORDS.length / 3, 1)[0]);
      field.push(creature);
    }
  }
}
function spawnProgression(chance) {
  if (random() < chance) {
    let creature = getSeaCreature(WORDS.pop());
    if (creature.name) {
      secondfield.push(creature);
    } else {
      field.push(creature);
    }
  }
}
function spawnOne() {
  let creature = getSeaCreature(WORDS.pop());
  if (creature.name) {
    secondfield.push(creature);
  } else {
    field.push(creature);
  }
}
