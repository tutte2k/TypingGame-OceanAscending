const CHARSTRING = "a b c d e f g h i j k l m n o p q r s t u v x y z";
const NUMBERSTRING = "1 2 3 4 5 6 7 8 9 0";
const CHARS = CHARSTRING.split(" ");
const WORDS = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
const NUMBERS = NUMBERSTRING.split(" ");

var focus;
var field = [];

var score = 0;
var guyDepth = 0;

var game = document.getElementById("ocean");

var types = ["redSquid", "fish", "octo"];

function preload() {
  guy = loadAnimation(
    "assets/sprites/guy/guy (1).png",
    "assets/sprites/guy/guy (2).png",
    "assets/sprites/guy/guy (3).png",
    "assets/sprites/guy/guy (4).png",
    "assets/sprites/guy/guy (5).png",
    "assets/sprites/guy/guy (6).png",
    "assets/sprites/guy/guy (7).png",
    "assets/sprites/guy/guy (8).png",
    "assets/sprites/guy/guy (9).png",
    "assets/sprites/guy/guy (10).png",
    "assets/sprites/guy/guy (11).png",
    "assets/sprites/guy/guy (12).png",
    "assets/sprites/guy/guy (13).png",
    "assets/sprites/guy/guy (14).png",
    "assets/sprites/guy/guy (15).png",
    "assets/sprites/guy/guy (16).png",
    "assets/sprites/guy/guy (17).png",
    "assets/sprites/guy/guy (18).png",
    "assets/sprites/guy/guy (19).png",
    "assets/sprites/guy/guy (20).png",
    "assets/sprites/guy/guy (21).png",
    "assets/sprites/guy/guy (22).png",
    "assets/sprites/guy/guy (23).png",
    "assets/sprites/guy/guy (24).png",
    "assets/sprites/guy/guy (25).png",
    "assets/sprites/guy/guy (26).png",
    "assets/sprites/guy/guy (27).png",
    "assets/sprites/guy/guy (28).png",
    "assets/sprites/guy/guy (29).png",
    "assets/sprites/guy/guy (30).png",
    "assets/sprites/guy/guy (31).png",
    "assets/sprites/guy/guy (32).png",
    "assets/sprites/guy/guy (33).png",
    "assets/sprites/guy/guy (34).png",
    "assets/sprites/guy/guy (35).png",
    "assets/sprites/guy/guy (36).png",
    "assets/sprites/guy/guy (37).png",
    "assets/sprites/guy/guy (38).png",
    "assets/sprites/guy/guy (39).png",
    "assets/sprites/guy/guy (40).png",
    "assets/sprites/guy/guy (41).png"
  );
  JinxyAnimation = loadAnimation(
    "assets/sprites/reddsquid/reddsquid (1).gif",
    "assets/sprites/reddsquid/reddsquid (2).gif",
    "assets/sprites/reddsquid/reddsquid (3).gif",
    "assets/sprites/reddsquid/reddsquid (4).gif",
    "assets/sprites/reddsquid/reddsquid (5).gif",
    "assets/sprites/reddsquid/reddsquid (6).gif",
    "assets/sprites/reddsquid/reddsquid (7).gif",
    "assets/sprites/reddsquid/reddsquid (8).gif",
    "assets/sprites/reddsquid/reddsquid (9).gif",
    "assets/sprites/reddsquid/reddsquid (10).gif",
    "assets/sprites/reddsquid/reddsquid (11).gif",
    "assets/sprites/reddsquid/reddsquid (12).gif",
    "assets/sprites/reddsquid/reddsquid (13).gif",
    "assets/sprites/reddsquid/reddsquid (14).gif",
    "assets/sprites/reddsquid/reddsquid (16).gif",
    "assets/sprites/reddsquid/reddsquid (17).gif",
    "assets/sprites/reddsquid/reddsquid (18).gif",
    "assets/sprites/reddsquid/reddsquid (19).gif",
    "assets/sprites/reddsquid/reddsquid (20).gif",
    "assets/sprites/reddsquid/reddsquid (21).gif",
    "assets/sprites/reddsquid/reddsquid (22).gif",
    "assets/sprites/reddsquid/reddsquid (23).gif",
    "assets/sprites/reddsquid/reddsquid (24).gif",
    "assets/sprites/reddsquid/reddsquid (25).gif",
    "assets/sprites/reddsquid/reddsquid (26).gif",
    "assets/sprites/reddsquid/reddsquid (27).gif",
    "assets/sprites/reddsquid/reddsquid (28).gif",
    "assets/sprites/reddsquid/reddsquid (29).gif",
    "assets/sprites/reddsquid/reddsquid (30).gif",
    "assets/sprites/reddsquid/reddsquid (31).gif",
    "assets/sprites/reddsquid/reddsquid (32).gif",
    "assets/sprites/reddsquid/reddsquid (33).gif",
    "assets/sprites/reddsquid/reddsquid (34).gif",
    "assets/sprites/reddsquid/reddsquid (35).gif",
    "assets/sprites/reddsquid/reddsquid (36).gif",
    "assets/sprites/reddsquid/reddsquid (37).gif",
    "assets/sprites/reddsquid/reddsquid (38).gif"
  );
  FishAnimation = loadAnimation(
    "assets/sprites/fish/fish (1).png",
    "assets/sprites/fish/fish (2).png",
    "assets/sprites/fish/fish (3).png",
    "assets/sprites/fish/fish (4).png",
    "assets/sprites/fish/fish (5).png",
    "assets/sprites/fish/fish (6).png",
    "assets/sprites/fish/fish (7).png",
    "assets/sprites/fish/fish (8).png",
    "assets/sprites/fish/fish (9).png",
    "assets/sprites/fish/fish (10).png",
    "assets/sprites/fish/fish (11).png",
    "assets/sprites/fish/fish (12).png",
    "assets/sprites/fish/fish (13).png",
    "assets/sprites/fish/fish (14).png",
    "assets/sprites/fish/fish (15).png",
    "assets/sprites/fish/fish (16).png",
    "assets/sprites/fish/fish (17).png",
    "assets/sprites/fish/fish (18).png",
    "assets/sprites/fish/fish (19).png",
    "assets/sprites/fish/fish (20).png",
    "assets/sprites/fish/fish (21).png",
    "assets/sprites/fish/fish (22).png",
    "assets/sprites/fish/fish (23).png",
    "assets/sprites/fish/fish (24).png",
    "assets/sprites/fish/fish (25).png",
    "assets/sprites/fish/fish (26).png",
    "assets/sprites/fish/fish (27).png",
    "assets/sprites/fish/fish (28).png",
    "assets/sprites/fish/fish (29).png",
    "assets/sprites/fish/fish (30).png",
    "assets/sprites/fish/fish (31).png",
    "assets/sprites/fish/fish (32).png",
    "assets/sprites/fish/fish (33).png",
    "assets/sprites/fish/fish (34).png",
    "assets/sprites/fish/fish (35).png",
    "assets/sprites/fish/fish (36).png",
    "assets/sprites/fish/fish (37).png",
    "assets/sprites/fish/fish (38).png",
    "assets/sprites/fish/fish (39).png",
    "assets/sprites/fish/fish (40).png",
    "assets/sprites/fish/fish (41).png",
    "assets/sprites/fish/fish (42).png",
    "assets/sprites/fish/fish (43).png",
    "assets/sprites/fish/fish (44).png",
    "assets/sprites/fish/fish (45).png",
    "assets/sprites/fish/fish (46).png",
    "assets/sprites/fish/fish (47).png",
    "assets/sprites/fish/fish (48).png",
    "assets/sprites/fish/fish (49).png",
    "assets/sprites/fish/fish (50).png",
    "assets/sprites/fish/fish (51).png",
    "assets/sprites/fish/fish (52).png",
    "assets/sprites/fish/fish (53).png",
    "assets/sprites/fish/fish (54).png",
    "assets/sprites/fish/fish (55).png",
    "assets/sprites/fish/fish (56).png",
    "assets/sprites/fish/fish (57).png",
    "assets/sprites/fish/fish (58).png",
    "assets/sprites/fish/fish (59).png",
    "assets/sprites/fish/fish (60).png",
    "assets/sprites/fish/fish (61).png"
  );
  QoctoAnimation = loadAnimation(
    "assets/sprites/octo/octo (1).gif",
    "assets/sprites/octo/octo (2).gif",
    "assets/sprites/octo/octo (3).gif",
    "assets/sprites/octo/octo (4).gif",
    "assets/sprites/octo/octo (5).gif",
    "assets/sprites/octo/octo (6).gif",
    "assets/sprites/octo/octo (7).gif",
    "assets/sprites/octo/octo (8).gif",
    "assets/sprites/octo/octo (9).gif",
    "assets/sprites/octo/octo (10).gif",
    "assets/sprites/octo/octo (11).gif",
    "assets/sprites/octo/octo (12).gif",
    "assets/sprites/octo/octo (13).gif",
    "assets/sprites/octo/octo (14).gif",
    "assets/sprites/octo/octo (15).gif",
    "assets/sprites/octo/octo (16).gif",
    "assets/sprites/octo/octo (17).gif",
    "assets/sprites/octo/octo (18).gif",
    "assets/sprites/octo/octo (19).gif",
    "assets/sprites/octo/octo (20).gif",
    "assets/sprites/octo/octo (21).gif",
    "assets/sprites/octo/octo (22).gif",
    "assets/sprites/octo/octo (23).gif",
    "assets/sprites/octo/octo (24).gif",
    "assets/sprites/octo/octo (25).gif",
    "assets/sprites/octo/octo (26).gif",
    "assets/sprites/octo/octo (27).gif",
    "assets/sprites/octo/octo (28).gif",
    "assets/sprites/octo/octo (29).gif",
    "assets/sprites/octo/octo (30).gif"
  );
  ShottyAnimation = loadAnimation(
    "assets/sprites/bulletsquid/bulletsquid (1).gif",
    "assets/sprites/bulletsquid/bulletsquid (2).gif",
    "assets/sprites/bulletsquid/bulletsquid (3).gif",
    "assets/sprites/bulletsquid/bulletsquid (4).gif",
    "assets/sprites/bulletsquid/bulletsquid (5).gif",
    "assets/sprites/bulletsquid/bulletsquid (6).gif",
    "assets/sprites/bulletsquid/bulletsquid (7).gif",
    "assets/sprites/bulletsquid/bulletsquid (8).gif",
    "assets/sprites/bulletsquid/bulletsquid (9).gif",
    "assets/sprites/bulletsquid/bulletsquid (10).gif",
    "assets/sprites/bulletsquid/bulletsquid (11).gif",
    "assets/sprites/bulletsquid/bulletsquid (12).gif",
    "assets/sprites/bulletsquid/bulletsquid (13).gif",
    "assets/sprites/bulletsquid/bulletsquid (14).gif",
    "assets/sprites/bulletsquid/bulletsquid (15).gif",
    "assets/sprites/bulletsquid/bulletsquid (16).gif",
    "assets/sprites/bulletsquid/bulletsquid (17).gif",
    "assets/sprites/bulletsquid/bulletsquid (18).gif",
    "assets/sprites/bulletsquid/bulletsquid (19).gif",
    "assets/sprites/bulletsquid/bulletsquid (20).gif",
    "assets/sprites/bulletsquid/bulletsquid (21).gif",
    "assets/sprites/bulletsquid/bulletsquid (22).gif"
  );
  LeonaAnimation = loadAnimation(
    "assets/sprites/lion/lion (1).gif",
    "assets/sprites/lion/lion (2).gif",
    "assets/sprites/lion/lion (3).gif",
    "assets/sprites/lion/lion (4).gif",
    "assets/sprites/lion/lion (5).gif",
    "assets/sprites/lion/lion (6).gif",
    "assets/sprites/lion/lion (7).gif",
    "assets/sprites/lion/lion (8).gif",
    "assets/sprites/lion/lion (9).gif",
    "assets/sprites/lion/lion (10).gif",
    "assets/sprites/lion/lion (11).gif",
    "assets/sprites/lion/lion (12).gif",
    "assets/sprites/lion/lion (13).gif",
    "assets/sprites/lion/lion (14).gif",
    "assets/sprites/lion/lion (15).gif",
    "assets/sprites/lion/lion (16).gif",
    "assets/sprites/lion/lion (17).gif",
    "assets/sprites/lion/lion (18).gif",
    "assets/sprites/lion/lion (19).gif",
    "assets/sprites/lion/lion (20).gif",
    "assets/sprites/lion/lion (21).gif",
    "assets/sprites/lion/lion (22).gif",
    "assets/sprites/lion/lion (23).gif",
    "assets/sprites/lion/lion (24).gif",
    "assets/sprites/lion/lion (25).gif",
    "assets/sprites/lion/lion (26).gif",
    "assets/sprites/lion/lion (27).gif",
    "assets/sprites/lion/lion (28).gif",
    "assets/sprites/lion/lion (29).gif",
    "assets/sprites/lion/lion (30).gif",
    "assets/sprites/lion/lion (31).gif",
    "assets/sprites/lion/lion (32).gif",
    "assets/sprites/lion/lion (33).gif",
    "assets/sprites/lion/lion (34).gif",
    "assets/sprites/lion/lion (35).gif",
    "assets/sprites/lion/lion (36).gif",
    "assets/sprites/lion/lion (37).gif",
    "assets/sprites/lion/lion (38).gif",
    "assets/sprites/lion/lion (39).gif",
    "assets/sprites/lion/lion (40).gif",
    "assets/sprites/lion/lion (41).gif",
    "assets/sprites/lion/lion (42).gif",
    "assets/sprites/lion/lion (43).gif",
    "assets/sprites/lion/lion (44).gif",
    "assets/sprites/lion/lion (45).gif",
    "assets/sprites/lion/lion (46).gif",
    "assets/sprites/lion/lion (47).gif",
    "assets/sprites/lion/lion (48).gif",
    "assets/sprites/lion/lion (49).gif",
    "assets/sprites/lion/lion (50).gif",
    "assets/sprites/lion/lion (51).gif",
    "assets/sprites/lion/lion (52).gif",
    "assets/sprites/lion/lion (53).gif",
    "assets/sprites/lion/lion (54).gif",
    "assets/sprites/lion/lion (55).gif",
    "assets/sprites/lion/lion (56).gif",
    "assets/sprites/lion/lion (57).gif",
    "assets/sprites/lion/lion (58).gif",
    "assets/sprites/lion/lion (59).gif",
    "assets/sprites/lion/lion (60).gif",
    "assets/sprites/lion/lion (61).gif"
  );
  GhostyAnimation = loadAnimation(
    "assets/sprites/jellyfish/jellyfish (1).gif",
    "assets/sprites/jellyfish/jellyfish (2).gif",
    "assets/sprites/jellyfish/jellyfish (3).gif",
    "assets/sprites/jellyfish/jellyfish (4).gif",
    "assets/sprites/jellyfish/jellyfish (5).gif",
    "assets/sprites/jellyfish/jellyfish (6).gif",
    "assets/sprites/jellyfish/jellyfish (7).gif",
    "assets/sprites/jellyfish/jellyfish (8).gif",
    "assets/sprites/jellyfish/jellyfish (9).gif",
    "assets/sprites/jellyfish/jellyfish (10).gif",
    "assets/sprites/jellyfish/jellyfish (11).gif",
    "assets/sprites/jellyfish/jellyfish (12).gif",
    "assets/sprites/jellyfish/jellyfish (13).gif",
    "assets/sprites/jellyfish/jellyfish (14).gif",
    "assets/sprites/jellyfish/jellyfish (15).gif",
    "assets/sprites/jellyfish/jellyfish (16).gif",
    "assets/sprites/jellyfish/jellyfish (17).gif",
    "assets/sprites/jellyfish/jellyfish (18).gif",
    "assets/sprites/jellyfish/jellyfish (19).gif",
    "assets/sprites/jellyfish/jellyfish (20).gif",
    "assets/sprites/jellyfish/jellyfish (21).gif",
    "assets/sprites/jellyfish/jellyfish (22).gif",
    "assets/sprites/jellyfish/jellyfish (23).gif",
    "assets/sprites/jellyfish/jellyfish (24).gif",
    "assets/sprites/jellyfish/jellyfish (25).gif",
    "assets/sprites/jellyfish/jellyfish (26).gif",
    "assets/sprites/jellyfish/jellyfish (27).gif",
    "assets/sprites/jellyfish/jellyfish (28).gif",
    "assets/sprites/jellyfish/jellyfish (29).gif",
    "assets/sprites/jellyfish/jellyfish (30).gif",
    "assets/sprites/jellyfish/jellyfish (31).gif",
    "assets/sprites/jellyfish/jellyfish (32).gif",
    "assets/sprites/jellyfish/jellyfish (33).gif",
    "assets/sprites/jellyfish/jellyfish (34).gif",
    "assets/sprites/jellyfish/jellyfish (35).gif",
    "assets/sprites/jellyfish/jellyfish (36).gif",
    "assets/sprites/jellyfish/jellyfish (37).gif",
    "assets/sprites/jellyfish/jellyfish (38).gif",
    "assets/sprites/jellyfish/jellyfish (39).gif",
    "assets/sprites/jellyfish/jellyfish (40).gif",
    "assets/sprites/jellyfish/jellyfish (41).gif",
    "assets/sprites/jellyfish/jellyfish (42).gif",
    "assets/sprites/jellyfish/jellyfish (43).gif",
    "assets/sprites/jellyfish/jellyfish (44).gif",
    "assets/sprites/jellyfish/jellyfish (45).gif",
    "assets/sprites/jellyfish/jellyfish (46).gif",
    "assets/sprites/jellyfish/jellyfish (47).gif",
    "assets/sprites/jellyfish/jellyfish (48).gif",
    "assets/sprites/jellyfish/jellyfish (49).gif",
    "assets/sprites/jellyfish/jellyfish (50).gif",
    "assets/sprites/jellyfish/jellyfish (51).gif",
    "assets/sprites/jellyfish/jellyfish (52).gif",
    "assets/sprites/jellyfish/jellyfish (53).gif",
    "assets/sprites/jellyfish/jellyfish (54).gif",
    "assets/sprites/jellyfish/jellyfish (55).gif",
    "assets/sprites/jellyfish/jellyfish (56).gif",
    "assets/sprites/jellyfish/jellyfish (57).gif",
    "assets/sprites/jellyfish/jellyfish (58).gif",
    "assets/sprites/jellyfish/jellyfish (59).gif",
    "assets/sprites/jellyfish/jellyfish (60).gif"
  );
  WhaleAnimation = loadAnimation(
    "assets/sprites/whale/whale (1).gif",
    "assets/sprites/whale/whale (2).gif",
    "assets/sprites/whale/whale (3).gif",
    "assets/sprites/whale/whale (4).gif",
    "assets/sprites/whale/whale (5).gif",
    "assets/sprites/whale/whale (6).gif",
    "assets/sprites/whale/whale (7).gif",
    "assets/sprites/whale/whale (8).gif",
    "assets/sprites/whale/whale (9).gif",
    "assets/sprites/whale/whale (10).gif",
    "assets/sprites/whale/whale (11).gif",
    "assets/sprites/whale/whale (12).gif",
    "assets/sprites/whale/whale (13).gif",
    "assets/sprites/whale/whale (14).gif",
    "assets/sprites/whale/whale (15).gif",
    "assets/sprites/whale/whale (16).gif",
    "assets/sprites/whale/whale (17).gif",
    "assets/sprites/whale/whale (18).gif",
    "assets/sprites/whale/whale (19).gif",
    "assets/sprites/whale/whale (20).gif",
    "assets/sprites/whale/whale (21).gif",
    "assets/sprites/whale/whale (22).gif",
    "assets/sprites/whale/whale (23).gif",
    "assets/sprites/whale/whale (24).gif",
    "assets/sprites/whale/whale (25).gif",
    "assets/sprites/whale/whale (26).gif",
    "assets/sprites/whale/whale (27).gif",
    "assets/sprites/whale/whale (28).gif",
    "assets/sprites/whale/whale (29).gif",
    "assets/sprites/whale/whale (30).gif",
    "assets/sprites/whale/whale (31).gif",
    "assets/sprites/whale/whale (32).gif",
    "assets/sprites/whale/whale (33).gif",
    "assets/sprites/whale/whale (34).gif",
    "assets/sprites/whale/whale (35).gif",
    "assets/sprites/whale/whale (36).gif",
    "assets/sprites/whale/whale (37).gif",
    "assets/sprites/whale/whale (38).gif",
    "assets/sprites/whale/whale (39).gif",
    "assets/sprites/whale/whale (40).gif",
    "assets/sprites/whale/whale (41).gif",
    "assets/sprites/whale/whale (42).gif",
    "assets/sprites/whale/whale (43).gif",
    "assets/sprites/whale/whale (44).gif",
    "assets/sprites/whale/whale (45).gif",
    "assets/sprites/whale/whale (46).gif",
    "assets/sprites/whale/whale (47).gif",
    "assets/sprites/whale/whale (48).gif",
    "assets/sprites/whale/whale (49).gif",
    "assets/sprites/whale/whale (50).gif",
    "assets/sprites/whale/whale (51).gif",
    "assets/sprites/whale/whale (52).gif",
    "assets/sprites/whale/whale (53).gif",
    "assets/sprites/whale/whale (54).gif",
    "assets/sprites/whale/whale (55).gif",
    "assets/sprites/whale/whale (56).gif",
    "assets/sprites/whale/whale (57).gif",
    "assets/sprites/whale/whale (58).gif",
    "assets/sprites/whale/whale (59).gif",
    "assets/sprites/whale/whale (60).gif",
    "assets/sprites/whale/whale (61).gif",
    "assets/sprites/whale/whale (62).gif",
    "assets/sprites/whale/whale (63).gif",
    "assets/sprites/whale/whale (64).gif",
    "assets/sprites/whale/whale (65).gif",
    "assets/sprites/whale/whale (66).gif",
    "assets/sprites/whale/whale (67).gif",
    "assets/sprites/whale/whale (68).gif",
    "assets/sprites/whale/whale (69).gif",
    "assets/sprites/whale/whale (70).gif",
    "assets/sprites/whale/whale (71).gif",
    "assets/sprites/whale/whale (72).gif",
    "assets/sprites/whale/whale (73).gif",
    "assets/sprites/whale/whale (74).gif",
    "assets/sprites/whale/whale (75).gif",
    "assets/sprites/whale/whale (76).gif",
    "assets/sprites/whale/whale (77).gif",
    "assets/sprites/whale/whale (78).gif",
    "assets/sprites/whale/whale (79).gif",
    "assets/sprites/whale/whale (80).gif",
    "assets/sprites/whale/whale (81).gif",
    "assets/sprites/whale/whale (82).gif",
    "assets/sprites/whale/whale (83).gif",
    "assets/sprites/whale/whale (84).gif",
    "assets/sprites/whale/whale (85).gif",
    "assets/sprites/whale/whale (86).gif",
    "assets/sprites/whale/whale (87).gif",
    "assets/sprites/whale/whale (88).gif",
    "assets/sprites/whale/whale (89).gif",
    "assets/sprites/whale/whale (90).gif",
    "assets/sprites/whale/whale (91).gif",
    "assets/sprites/whale/whale (92).gif",
    "assets/sprites/whale/whale (93).gif",
    "assets/sprites/whale/whale (94).gif",
    "assets/sprites/whale/whale (95).gif",
    "assets/sprites/whale/whale (96).gif",
    "assets/sprites/whale/whale (97).gif",
    "assets/sprites/whale/whale (98).gif",
    "assets/sprites/whale/whale (99).gif",
    "assets/sprites/whale/whale (100).gif",
    "assets/sprites/whale/whale (101).gif",
    "assets/sprites/whale/whale (102).gif",
    "assets/sprites/whale/whale (103).gif",
    "assets/sprites/whale/whale (104).gif",
    "assets/sprites/whale/whale (105).gif",
    "assets/sprites/whale/whale (106).gif",
    "assets/sprites/whale/whale (107).gif",
    "assets/sprites/whale/whale (108).gif",
    "assets/sprites/whale/whale (109).gif",
    "assets/sprites/whale/whale (110).gif",
    "assets/sprites/whale/whale (111).gif",
    "assets/sprites/whale/whale (112).gif",
    "assets/sprites/whale/whale (113).gif",
    "assets/sprites/whale/whale (114).gif",
    "assets/sprites/whale/whale (115).gif",
    "assets/sprites/whale/whale (116).gif",
    "assets/sprites/whale/whale (117).gif",
    "assets/sprites/whale/whale (118).gif",
    "assets/sprites/whale/whale (119).gif",
    "assets/sprites/whale/whale (120).gif",
    "assets/sprites/whale/whale (121).gif",
    "assets/sprites/whale/whale (122).gif",
    "assets/sprites/whale/whale (123).gif",
    "assets/sprites/whale/whale (124).gif",
    "assets/sprites/whale/whale (125).gif",
    "assets/sprites/whale/whale (126).gif",
    "assets/sprites/whale/whale (127).gif",
    "assets/sprites/whale/whale (128).gif",
    "assets/sprites/whale/whale (129).gif",
    "assets/sprites/whale/whale (130).gif",
    "assets/sprites/whale/whale (131).gif",
    "assets/sprites/whale/whale (132).gif"
  );
}

function getSeaCreature(value) {
  if (value.length == 1) {
    enemies = [new Shotty(value), new Ghosty(value)];
    return random(enemies);
  }
  if (value.length == 2) {
    return new Jinxy(value);
  }
  if (value.length == 3) {
    return new Jinxy(value);
  }
  if (value.length == 4) {
    return new Fish(value);
  }
  if (value.length == 5) {
    return new Qocto(value);
  }
  if (value.length > 5) {
    return new Whale(value);
  }
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("ocean");
  focus = null;
  textFont("Helvetica");
}

function draw() {
  clear();
  drawLine();
  drawScore();
  handleField();
  drawGuy();
}

function handleField() {
  for (var i = field.length - 1; i >= 0; i--) {
    if (field[i] === undefined) {
      continue;
    }
    field[i].update();
    if (field[i].intact) {
      field[i].draw();
    } else {
      score += field[i].text.length;
      field.splice(i, 1);
      focus = null;
    }
  }
  if (frameCount % 60 === 0) {
    if (random() > 0.99) {
      score += 10;
      for (let i = 0; i < 5; i++) {
        field.push(getSeaCreature(random(CHARS)));
      }
    }
    if (score < 100 && random() > 0.5) {
      // field.push(getSeaCreature(WORDS.pop()));
    }
    if (random() > 0.99) {
      for (let i = 0; i < 3; i++) {
        let number = random(NUMBERS) + random(NUMBERS) + random(NUMBERS);
        field.push(new Ghosty(number));
      }
    }
    if (random() > map(score, 0, 1000, 0.8, 0.01)) {
      field.push(getSeaCreature(WORDS.pop()));
    }
  }
}

function keyPressed() {
  if (focus) {
    focus.erode(keyCode);
  } else {
    focus = findFocus(keyCode, field);
    if (focus) {
      focus.erode(keyCode);
    }
  }
}

function drawLine() {
  if (!focus) return;
  stroke(0);
  line(90, guyDepth, focus.position.x, focus.position.y);
  textAlign(CENTER);
  textSize(100);
  text(focus.completedText, width / 2, height - 50);
}

function drawScore() {
  textAlign(RIGHT);
  textSize(30);
  fill(255);
  text(score, 102, height / 2 + 145);
}

function drawGuy() {
  standardPosition = height / 2;
  if (guyDepth < standardPosition) {
    guyDepth++;
  }
  animation(guy, 90, guyDepth);
}

function endGame() {
  noLoop();
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(80);
  text("Game Over!", width / 2, height / 2);
}

function findFocus(code, field) {
  var char = String.fromCharCode(code).toLowerCase();
  for (var i = 0; i < field.length; i++) {
    if (field[i].text.startsWith(char)) {
      field[i].focused = true;
      return field[i];
    }
  }
  return null;
}
