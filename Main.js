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

var newData;
var data;
var kidsdata;
var easydata;
var normaldata;
let inputContents;

var field = [];
var secondfield = [];
var itemfield = [];
var environmentfield = [];

var CURRENT_DEPTH = 0;
var totalScore = 0;
var score = 0;
var kills = 0;
var level = 1;
var depth = 0;
var guyDepth = 0;
var health = 3;
var zapperAvailable = false;
var misses = 0;

function preload() {
  font = loadFont("./assets/RifficFree-Bold.ttf");
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
  BoltAnimation = loadAnimation(
    "./assets/sprites/bolt/bolt (1).png",
    "./assets/sprites/bolt/bolt (2).png",
    "./assets/sprites/bolt/bolt (3).png",
    "./assets/sprites/bolt/bolt (4).png",
    "./assets/sprites/bolt/bolt (5).png",
    "./assets/sprites/bolt/bolt (6).png",
    "./assets/sprites/bolt/bolt (7).png",
    "./assets/sprites/bolt/bolt (8).png",
    "./assets/sprites/bolt/bolt (9).png",
    "./assets/sprites/bolt/bolt (10).png",
    "./assets/sprites/bolt/bolt (11).png",
    "./assets/sprites/bolt/bolt (12).png",
    "./assets/sprites/bolt/bolt (13).png",
    "./assets/sprites/bolt/bolt (14).png",
    "./assets/sprites/bolt/bolt (15).png",
    "./assets/sprites/bolt/bolt (16).png",
    "./assets/sprites/bolt/bolt (17).png",
    "./assets/sprites/bolt/bolt (18).png",
    "./assets/sprites/bolt/bolt (19).png",
    "./assets/sprites/bolt/bolt (20).png",
    "./assets/sprites/bolt/bolt (21).png",
    "./assets/sprites/bolt/bolt (22).png",
    "./assets/sprites/bolt/bolt (23).png",
    "./assets/sprites/bolt/bolt (24).png",
    "./assets/sprites/bolt/bolt (25).png",
    "./assets/sprites/bolt/bolt (26).png",
    "./assets/sprites/bolt/bolt (27).png",
    "./assets/sprites/bolt/bolt (28).png",
    "./assets/sprites/bolt/bolt (29).png",
    "./assets/sprites/bolt/bolt (30).png",
    "./assets/sprites/bolt/bolt (31).png",
    "./assets/sprites/bolt/bolt (32).png",
    "./assets/sprites/bolt/bolt (33).png",
    "./assets/sprites/bolt/bolt (34).png",
    "./assets/sprites/bolt/bolt (35).png",
    "./assets/sprites/bolt/bolt (36).png",
    "./assets/sprites/bolt/bolt (37).png",
    "./assets/sprites/bolt/bolt (38).png",
    "./assets/sprites/bolt/bolt (39).png",
    "./assets/sprites/bolt/bolt (40).png",
    "./assets/sprites/bolt/bolt (41).png",
    "./assets/sprites/bolt/bolt (42).png",
    "./assets/sprites/bolt/bolt (43).png",
    "./assets/sprites/bolt/bolt (44).png",
    "./assets/sprites/bolt/bolt (45).png",
    "./assets/sprites/bolt/bolt (46).png",
    "./assets/sprites/bolt/bolt (47).png",
    "./assets/sprites/bolt/bolt (48).png",
    "./assets/sprites/bolt/bolt (49).png",
    "./assets/sprites/bolt/bolt (50).png",
    "./assets/sprites/bolt/bolt (51).png",
    "./assets/sprites/bolt/bolt (52).png",
    "./assets/sprites/bolt/bolt (53).png",
    "./assets/sprites/bolt/bolt (54).png",
    "./assets/sprites/bolt/bolt (55).png",
    "./assets/sprites/bolt/bolt (56).png",
    "./assets/sprites/bolt/bolt (57).png",
    "./assets/sprites/bolt/bolt (58).png",
    "./assets/sprites/bolt/bolt (59).png",
    "./assets/sprites/bolt/bolt (60).png",
    "./assets/sprites/bolt/bolt (61).png",
    "./assets/sprites/bolt/bolt (62).png",
    "./assets/sprites/bolt/bolt (63).png",
    "./assets/sprites/bolt/bolt (64).png",
    "./assets/sprites/bolt/bolt (65).png",
    "./assets/sprites/bolt/bolt (66).png",
    "./assets/sprites/bolt/bolt (67).png",
    "./assets/sprites/bolt/bolt (68).png",
    "./assets/sprites/bolt/bolt (69).png",
    "./assets/sprites/bolt/bolt (70).png",
    "./assets/sprites/bolt/bolt (71).png",
    "./assets/sprites/bolt/bolt (72).png",
    "./assets/sprites/bolt/bolt (73).png",
    "./assets/sprites/bolt/bolt (74).png",
    "./assets/sprites/bolt/bolt (75).png",
    "./assets/sprites/bolt/bolt (76).png",
    "./assets/sprites/bolt/bolt (77).png",
    "./assets/sprites/bolt/bolt (78).png",
    "./assets/sprites/bolt/bolt (79).png",
    "./assets/sprites/bolt/bolt (80).png",
    "./assets/sprites/bolt/bolt (81).png",
    "./assets/sprites/bolt/bolt (82).png",
    "./assets/sprites/bolt/bolt (83).png",
    "./assets/sprites/bolt/bolt (84).png",
    "./assets/sprites/bolt/bolt (85).png",
    "./assets/sprites/bolt/bolt (86).png",
    "./assets/sprites/bolt/bolt (87).png",
    "./assets/sprites/bolt/bolt (88).png",
    "./assets/sprites/bolt/bolt (89).png",
    "./assets/sprites/bolt/bolt (90).png",
    "./assets/sprites/bolt/bolt (91).png"
  );
  JinxyAnimation = loadAnimation(
    "./assets/sprites/jinxy/jinxy (1).png",
    "./assets/sprites/jinxy/jinxy (2).png",
    "./assets/sprites/jinxy/jinxy (3).png",
    "./assets/sprites/jinxy/jinxy (4).png",
    "./assets/sprites/jinxy/jinxy (5).png",
    "./assets/sprites/jinxy/jinxy (6).png",
    "./assets/sprites/jinxy/jinxy (7).png",
    "./assets/sprites/jinxy/jinxy (8).png",
    "./assets/sprites/jinxy/jinxy (9).png",
    "./assets/sprites/jinxy/jinxy (10).png",
    "./assets/sprites/jinxy/jinxy (11).png",
    "./assets/sprites/jinxy/jinxy (12).png",
    "./assets/sprites/jinxy/jinxy (13).png",
    "./assets/sprites/jinxy/jinxy (14).png",
    "./assets/sprites/jinxy/jinxy (16).png",
    "./assets/sprites/jinxy/jinxy (17).png",
    "./assets/sprites/jinxy/jinxy (18).png",
    "./assets/sprites/jinxy/jinxy (19).png",
    "./assets/sprites/jinxy/jinxy (20).png",
    "./assets/sprites/jinxy/jinxy (21).png",
    "./assets/sprites/jinxy/jinxy (22).png",
    "./assets/sprites/jinxy/jinxy (23).png",
    "./assets/sprites/jinxy/jinxy (24).png",
    "./assets/sprites/jinxy/jinxy (25).png",
    "./assets/sprites/jinxy/jinxy (26).png",
    "./assets/sprites/jinxy/jinxy (27).png",
    "./assets/sprites/jinxy/jinxy (28).png",
    "./assets/sprites/jinxy/jinxy (29).png",
    "./assets/sprites/jinxy/jinxy (30).png",
    "./assets/sprites/jinxy/jinxy (31).png",
    "./assets/sprites/jinxy/jinxy (32).png",
    "./assets/sprites/jinxy/jinxy (33).png",
    "./assets/sprites/jinxy/jinxy (34).png",
    "./assets/sprites/jinxy/jinxy (35).png",
    "./assets/sprites/jinxy/jinxy (36).png",
    "./assets/sprites/jinxy/jinxy (37).png",
    "./assets/sprites/jinxy/jinxy (38).png"
  );
  FishAnimation = loadAnimation(
    "./assets/sprites/fish/fish (1).png",
    "./assets/sprites/fish/fish (2).png",
    "./assets/sprites/fish/fish (3).png",
    "./assets/sprites/fish/fish (4).png",
    "./assets/sprites/fish/fish (5).png",
    "./assets/sprites/fish/fish (6).png",
    "./assets/sprites/fish/fish (7).png",
    "./assets/sprites/fish/fish (8).png",
    "./assets/sprites/fish/fish (9).png",
    "./assets/sprites/fish/fish (10).png",
    "./assets/sprites/fish/fish (11).png",
    "./assets/sprites/fish/fish (12).png",
    "./assets/sprites/fish/fish (13).png",
    "./assets/sprites/fish/fish (14).png",
    "./assets/sprites/fish/fish (15).png",
    "./assets/sprites/fish/fish (16).png",
    "./assets/sprites/fish/fish (17).png",
    "./assets/sprites/fish/fish (18).png",
    "./assets/sprites/fish/fish (19).png",
    "./assets/sprites/fish/fish (20).png",
    "./assets/sprites/fish/fish (21).png",
    "./assets/sprites/fish/fish (22).png",
    "./assets/sprites/fish/fish (23).png",
    "./assets/sprites/fish/fish (24).png",
    "./assets/sprites/fish/fish (25).png",
    "./assets/sprites/fish/fish (26).png",
    "./assets/sprites/fish/fish (27).png",
    "./assets/sprites/fish/fish (28).png",
    "./assets/sprites/fish/fish (29).png",
    "./assets/sprites/fish/fish (30).png",
    "./assets/sprites/fish/fish (31).png",
    "./assets/sprites/fish/fish (32).png",
    "./assets/sprites/fish/fish (33).png",
    "./assets/sprites/fish/fish (34).png",
    "./assets/sprites/fish/fish (35).png",
    "./assets/sprites/fish/fish (36).png",
    "./assets/sprites/fish/fish (37).png",
    "./assets/sprites/fish/fish (38).png",
    "./assets/sprites/fish/fish (39).png",
    "./assets/sprites/fish/fish (40).png",
    "./assets/sprites/fish/fish (41).png",
    "./assets/sprites/fish/fish (42).png",
    "./assets/sprites/fish/fish (43).png",
    "./assets/sprites/fish/fish (44).png",
    "./assets/sprites/fish/fish (45).png",
    "./assets/sprites/fish/fish (46).png",
    "./assets/sprites/fish/fish (47).png",
    "./assets/sprites/fish/fish (48).png",
    "./assets/sprites/fish/fish (49).png",
    "./assets/sprites/fish/fish (50).png",
    "./assets/sprites/fish/fish (51).png",
    "./assets/sprites/fish/fish (52).png",
    "./assets/sprites/fish/fish (53).png",
    "./assets/sprites/fish/fish (54).png",
    "./assets/sprites/fish/fish (55).png",
    "./assets/sprites/fish/fish (56).png",
    "./assets/sprites/fish/fish (57).png",
    "./assets/sprites/fish/fish (58).png",
    "./assets/sprites/fish/fish (59).png",
    "./assets/sprites/fish/fish (60).png",
    "./assets/sprites/fish/fish (61).png"
  );
  QoctoAnimation = loadAnimation(
    "./assets/sprites/octo/octo (1).png",
    "./assets/sprites/octo/octo (2).png",
    "./assets/sprites/octo/octo (3).png",
    "./assets/sprites/octo/octo (4).png",
    "./assets/sprites/octo/octo (5).png",
    "./assets/sprites/octo/octo (6).png",
    "./assets/sprites/octo/octo (7).png",
    "./assets/sprites/octo/octo (8).png",
    "./assets/sprites/octo/octo (9).png",
    "./assets/sprites/octo/octo (10).png",
    "./assets/sprites/octo/octo (11).png",
    "./assets/sprites/octo/octo (12).png",
    "./assets/sprites/octo/octo (13).png",
    "./assets/sprites/octo/octo (14).png",
    "./assets/sprites/octo/octo (15).png",
    "./assets/sprites/octo/octo (16).png",
    "./assets/sprites/octo/octo (17).png",
    "./assets/sprites/octo/octo (18).png",
    "./assets/sprites/octo/octo (19).png",
    "./assets/sprites/octo/octo (20).png",
    "./assets/sprites/octo/octo (21).png",
    "./assets/sprites/octo/octo (22).png",
    "./assets/sprites/octo/octo (23).png",
    "./assets/sprites/octo/octo (24).png",
    "./assets/sprites/octo/octo (25).png",
    "./assets/sprites/octo/octo (26).png",
    "./assets/sprites/octo/octo (27).png",
    "./assets/sprites/octo/octo (28).png",
    "./assets/sprites/octo/octo (29).png",
    "./assets/sprites/octo/octo (30).png"
  );
  ShottyAnimation = loadAnimation(
    "./assets/sprites/bulletsquid/bulletsquid (1).png",
    "./assets/sprites/bulletsquid/bulletsquid (2).png",
    "./assets/sprites/bulletsquid/bulletsquid (3).png",
    "./assets/sprites/bulletsquid/bulletsquid (4).png",
    "./assets/sprites/bulletsquid/bulletsquid (5).png",
    "./assets/sprites/bulletsquid/bulletsquid (6).png",
    "./assets/sprites/bulletsquid/bulletsquid (7).png",
    "./assets/sprites/bulletsquid/bulletsquid (8).png",
    "./assets/sprites/bulletsquid/bulletsquid (9).png",
    "./assets/sprites/bulletsquid/bulletsquid (10).png",
    "./assets/sprites/bulletsquid/bulletsquid (11).png",
    "./assets/sprites/bulletsquid/bulletsquid (12).png",
    "./assets/sprites/bulletsquid/bulletsquid (13).png",
    "./assets/sprites/bulletsquid/bulletsquid (14).png",
    "./assets/sprites/bulletsquid/bulletsquid (15).png",
    "./assets/sprites/bulletsquid/bulletsquid (16).png",
    "./assets/sprites/bulletsquid/bulletsquid (17).png",
    "./assets/sprites/bulletsquid/bulletsquid (18).png",
    "./assets/sprites/bulletsquid/bulletsquid (19).png",
    "./assets/sprites/bulletsquid/bulletsquid (20).png",
    "./assets/sprites/bulletsquid/bulletsquid (21).png",
    "./assets/sprites/bulletsquid/bulletsquid (22).png"
  );
  LeonaAnimation = loadAnimation(
    "./assets/sprites/leona/leona (1).png",
    "./assets/sprites/leona/leona (2).png",
    "./assets/sprites/leona/leona (3).png",
    "./assets/sprites/leona/leona (4).png",
    "./assets/sprites/leona/leona (5).png",
    "./assets/sprites/leona/leona (6).png",
    "./assets/sprites/leona/leona (7).png",
    "./assets/sprites/leona/leona (8).png",
    "./assets/sprites/leona/leona (9).png",
    "./assets/sprites/leona/leona (10).png",
    "./assets/sprites/leona/leona (11).png",
    "./assets/sprites/leona/leona (12).png",
    "./assets/sprites/leona/leona (13).png",
    "./assets/sprites/leona/leona (14).png",
    "./assets/sprites/leona/leona (15).png",
    "./assets/sprites/leona/leona (16).png",
    "./assets/sprites/leona/leona (17).png",
    "./assets/sprites/leona/leona (18).png",
    "./assets/sprites/leona/leona (19).png",
    "./assets/sprites/leona/leona (20).png",
    "./assets/sprites/leona/leona (21).png",
    "./assets/sprites/leona/leona (22).png",
    "./assets/sprites/leona/leona (23).png",
    "./assets/sprites/leona/leona (24).png",
    "./assets/sprites/leona/leona (25).png",
    "./assets/sprites/leona/leona (26).png",
    "./assets/sprites/leona/leona (27).png",
    "./assets/sprites/leona/leona (28).png",
    "./assets/sprites/leona/leona (29).png",
    "./assets/sprites/leona/leona (30).png",
    "./assets/sprites/leona/leona (31).png",
    "./assets/sprites/leona/leona (32).png",
    "./assets/sprites/leona/leona (33).png",
    "./assets/sprites/leona/leona (34).png",
    "./assets/sprites/leona/leona (35).png",
    "./assets/sprites/leona/leona (36).png",
    "./assets/sprites/leona/leona (37).png",
    "./assets/sprites/leona/leona (38).png",
    "./assets/sprites/leona/leona (39).png",
    "./assets/sprites/leona/leona (40).png",
    "./assets/sprites/leona/leona (41).png",
    "./assets/sprites/leona/leona (42).png",
    "./assets/sprites/leona/leona (43).png",
    "./assets/sprites/leona/leona (44).png",
    "./assets/sprites/leona/leona (45).png",
    "./assets/sprites/leona/leona (46).png",
    "./assets/sprites/leona/leona (47).png",
    "./assets/sprites/leona/leona (48).png",
    "./assets/sprites/leona/leona (49).png",
    "./assets/sprites/leona/leona (50).png",
    "./assets/sprites/leona/leona (51).png",
    "./assets/sprites/leona/leona (52).png",
    "./assets/sprites/leona/leona (53).png",
    "./assets/sprites/leona/leona (54).png",
    "./assets/sprites/leona/leona (55).png",
    "./assets/sprites/leona/leona (56).png",
    "./assets/sprites/leona/leona (57).png",
    "./assets/sprites/leona/leona (58).png",
    "./assets/sprites/leona/leona (59).png",
    "./assets/sprites/leona/leona (60).png",
    "./assets/sprites/leona/leona (61).png"
  );
  GhostyAnimation = loadAnimation(
    "./assets/sprites/jellyfish/jellyfish (1).png",
    "./assets/sprites/jellyfish/jellyfish (2).png",
    "./assets/sprites/jellyfish/jellyfish (3).png",
    "./assets/sprites/jellyfish/jellyfish (4).png",
    "./assets/sprites/jellyfish/jellyfish (5).png",
    "./assets/sprites/jellyfish/jellyfish (6).png",
    "./assets/sprites/jellyfish/jellyfish (7).png",
    "./assets/sprites/jellyfish/jellyfish (8).png",
    "./assets/sprites/jellyfish/jellyfish (9).png",
    "./assets/sprites/jellyfish/jellyfish (10).png",
    "./assets/sprites/jellyfish/jellyfish (11).png",
    "./assets/sprites/jellyfish/jellyfish (12).png",
    "./assets/sprites/jellyfish/jellyfish (13).png",
    "./assets/sprites/jellyfish/jellyfish (14).png",
    "./assets/sprites/jellyfish/jellyfish (15).png",
    "./assets/sprites/jellyfish/jellyfish (16).png",
    "./assets/sprites/jellyfish/jellyfish (17).png",
    "./assets/sprites/jellyfish/jellyfish (18).png",
    "./assets/sprites/jellyfish/jellyfish (19).png",
    "./assets/sprites/jellyfish/jellyfish (20).png",
    "./assets/sprites/jellyfish/jellyfish (21).png",
    "./assets/sprites/jellyfish/jellyfish (22).png",
    "./assets/sprites/jellyfish/jellyfish (23).png",
    "./assets/sprites/jellyfish/jellyfish (24).png",
    "./assets/sprites/jellyfish/jellyfish (25).png",
    "./assets/sprites/jellyfish/jellyfish (26).png",
    "./assets/sprites/jellyfish/jellyfish (27).png",
    "./assets/sprites/jellyfish/jellyfish (28).png",
    "./assets/sprites/jellyfish/jellyfish (29).png",
    "./assets/sprites/jellyfish/jellyfish (30).png",
    "./assets/sprites/jellyfish/jellyfish (31).png",
    "./assets/sprites/jellyfish/jellyfish (32).png",
    "./assets/sprites/jellyfish/jellyfish (33).png",
    "./assets/sprites/jellyfish/jellyfish (34).png",
    "./assets/sprites/jellyfish/jellyfish (35).png",
    "./assets/sprites/jellyfish/jellyfish (36).png",
    "./assets/sprites/jellyfish/jellyfish (37).png",
    "./assets/sprites/jellyfish/jellyfish (38).png",
    "./assets/sprites/jellyfish/jellyfish (39).png",
    "./assets/sprites/jellyfish/jellyfish (40).png",
    "./assets/sprites/jellyfish/jellyfish (41).png",
    "./assets/sprites/jellyfish/jellyfish (42).png",
    "./assets/sprites/jellyfish/jellyfish (43).png",
    "./assets/sprites/jellyfish/jellyfish (44).png",
    "./assets/sprites/jellyfish/jellyfish (45).png",
    "./assets/sprites/jellyfish/jellyfish (46).png",
    "./assets/sprites/jellyfish/jellyfish (47).png",
    "./assets/sprites/jellyfish/jellyfish (48).png",
    "./assets/sprites/jellyfish/jellyfish (49).png",
    "./assets/sprites/jellyfish/jellyfish (50).png",
    "./assets/sprites/jellyfish/jellyfish (51).png",
    "./assets/sprites/jellyfish/jellyfish (52).png",
    "./assets/sprites/jellyfish/jellyfish (53).png",
    "./assets/sprites/jellyfish/jellyfish (54).png",
    "./assets/sprites/jellyfish/jellyfish (55).png",
    "./assets/sprites/jellyfish/jellyfish (56).png",
    "./assets/sprites/jellyfish/jellyfish (57).png",
    "./assets/sprites/jellyfish/jellyfish (58).png",
    "./assets/sprites/jellyfish/jellyfish (59).png",
    "./assets/sprites/jellyfish/jellyfish (60).png"
  );
  WhaleAnimation = loadAnimation(
    "./assets/sprites/whale/whale (1).png",
    "./assets/sprites/whale/whale (2).png",
    "./assets/sprites/whale/whale (3).png",
    "./assets/sprites/whale/whale (4).png",
    "./assets/sprites/whale/whale (5).png",
    "./assets/sprites/whale/whale (6).png",
    "./assets/sprites/whale/whale (7).png",
    "./assets/sprites/whale/whale (8).png",
    "./assets/sprites/whale/whale (9).png",
    "./assets/sprites/whale/whale (10).png",
    "./assets/sprites/whale/whale (11).png",
    "./assets/sprites/whale/whale (12).png",
    "./assets/sprites/whale/whale (13).png",
    "./assets/sprites/whale/whale (14).png",
    "./assets/sprites/whale/whale (15).png",
    "./assets/sprites/whale/whale (16).png",
    "./assets/sprites/whale/whale (17).png",
    "./assets/sprites/whale/whale (18).png",
    "./assets/sprites/whale/whale (19).png",
    "./assets/sprites/whale/whale (20).png",
    "./assets/sprites/whale/whale (21).png",
    "./assets/sprites/whale/whale (22).png",
    "./assets/sprites/whale/whale (23).png",
    "./assets/sprites/whale/whale (24).png",
    "./assets/sprites/whale/whale (25).png",
    "./assets/sprites/whale/whale (26).png",
    "./assets/sprites/whale/whale (27).png",
    "./assets/sprites/whale/whale (28).png",
    "./assets/sprites/whale/whale (29).png",
    "./assets/sprites/whale/whale (30).png",
    "./assets/sprites/whale/whale (31).png",
    "./assets/sprites/whale/whale (32).png",
    "./assets/sprites/whale/whale (33).png",
    "./assets/sprites/whale/whale (34).png",
    "./assets/sprites/whale/whale (35).png",
    "./assets/sprites/whale/whale (36).png",
    "./assets/sprites/whale/whale (37).png",
    "./assets/sprites/whale/whale (38).png",
    "./assets/sprites/whale/whale (39).png",
    "./assets/sprites/whale/whale (40).png",
    "./assets/sprites/whale/whale (41).png",
    "./assets/sprites/whale/whale (42).png",
    "./assets/sprites/whale/whale (43).png",
    "./assets/sprites/whale/whale (44).png",
    "./assets/sprites/whale/whale (45).png",
    "./assets/sprites/whale/whale (46).png",
    "./assets/sprites/whale/whale (47).png",
    "./assets/sprites/whale/whale (48).png",
    "./assets/sprites/whale/whale (49).png",
    "./assets/sprites/whale/whale (50).png",
    "./assets/sprites/whale/whale (51).png",
    "./assets/sprites/whale/whale (52).png",
    "./assets/sprites/whale/whale (53).png",
    "./assets/sprites/whale/whale (54).png",
    "./assets/sprites/whale/whale (55).png",
    "./assets/sprites/whale/whale (56).png",
    "./assets/sprites/whale/whale (57).png",
    "./assets/sprites/whale/whale (58).png",
    "./assets/sprites/whale/whale (59).png",
    "./assets/sprites/whale/whale (60).png",
    "./assets/sprites/whale/whale (61).png",
    "./assets/sprites/whale/whale (62).png",
    "./assets/sprites/whale/whale (63).png",
    "./assets/sprites/whale/whale (64).png",
    "./assets/sprites/whale/whale (65).png",
    "./assets/sprites/whale/whale (66).png",
    "./assets/sprites/whale/whale (67).png",
    "./assets/sprites/whale/whale (68).png",
    "./assets/sprites/whale/whale (69).png",
    "./assets/sprites/whale/whale (70).png",
    "./assets/sprites/whale/whale (71).png",
    "./assets/sprites/whale/whale (72).png",
    "./assets/sprites/whale/whale (73).png",
    "./assets/sprites/whale/whale (74).png",
    "./assets/sprites/whale/whale (75).png",
    "./assets/sprites/whale/whale (76).png",
    "./assets/sprites/whale/whale (77).png",
    "./assets/sprites/whale/whale (78).png",
    "./assets/sprites/whale/whale (79).png",
    "./assets/sprites/whale/whale (80).png",
    "./assets/sprites/whale/whale (81).png",
    "./assets/sprites/whale/whale (82).png",
    "./assets/sprites/whale/whale (83).png",
    "./assets/sprites/whale/whale (84).png",
    "./assets/sprites/whale/whale (85).png",
    "./assets/sprites/whale/whale (86).png",
    "./assets/sprites/whale/whale (87).png",
    "./assets/sprites/whale/whale (88).png",
    "./assets/sprites/whale/whale (89).png",
    "./assets/sprites/whale/whale (90).png",
    "./assets/sprites/whale/whale (91).png",
    "./assets/sprites/whale/whale (92).png",
    "./assets/sprites/whale/whale (93).png",
    "./assets/sprites/whale/whale (94).png",
    "./assets/sprites/whale/whale (95).png",
    "./assets/sprites/whale/whale (96).png",
    "./assets/sprites/whale/whale (97).png",
    "./assets/sprites/whale/whale (98).png",
    "./assets/sprites/whale/whale (99).png",
    "./assets/sprites/whale/whale (100).png",
    "./assets/sprites/whale/whale (101).png",
    "./assets/sprites/whale/whale (102).png",
    "./assets/sprites/whale/whale (103).png",
    "./assets/sprites/whale/whale (104).png",
    "./assets/sprites/whale/whale (105).png",
    "./assets/sprites/whale/whale (106).png",
    "./assets/sprites/whale/whale (107).png",
    "./assets/sprites/whale/whale (108).png",
    "./assets/sprites/whale/whale (109).png",
    "./assets/sprites/whale/whale (110).png",
    "./assets/sprites/whale/whale (111).png",
    "./assets/sprites/whale/whale (112).png",
    "./assets/sprites/whale/whale (113).png",
    "./assets/sprites/whale/whale (114).png",
    "./assets/sprites/whale/whale (115).png",
    "./assets/sprites/whale/whale (116).png",
    "./assets/sprites/whale/whale (117).png",
    "./assets/sprites/whale/whale (118).png",
    "./assets/sprites/whale/whale (119).png",
    "./assets/sprites/whale/whale (120).png",
    "./assets/sprites/whale/whale (121).png",
    "./assets/sprites/whale/whale (122).png",
    "./assets/sprites/whale/whale (123).png",
    "./assets/sprites/whale/whale (124).png",
    "./assets/sprites/whale/whale (125).png",
    "./assets/sprites/whale/whale (126).png",
    "./assets/sprites/whale/whale (127).png",
    "./assets/sprites/whale/whale (128).png",
    "./assets/sprites/whale/whale (129).png",
    "./assets/sprites/whale/whale (130).png",
    "./assets/sprites/whale/whale (131).png",
    "./assets/sprites/whale/whale (132).png"
  );
  SpearoAnimation = loadAnimation(
    "./assets/sprites/spearo/spearo (1).png",
    "./assets/sprites/spearo/spearo (2).png",
    "./assets/sprites/spearo/spearo (3).png",
    "./assets/sprites/spearo/spearo (4).png",
    "./assets/sprites/spearo/spearo (5).png",
    "./assets/sprites/spearo/spearo (6).png",
    "./assets/sprites/spearo/spearo (7).png",
    "./assets/sprites/spearo/spearo (8).png",
    "./assets/sprites/spearo/spearo (9).png",
    "./assets/sprites/spearo/spearo (10).png",
    "./assets/sprites/spearo/spearo (11).png",
    "./assets/sprites/spearo/spearo (12).png",
    "./assets/sprites/spearo/spearo (13).png",
    "./assets/sprites/spearo/spearo (14).png",
    "./assets/sprites/spearo/spearo (15).png",
    "./assets/sprites/spearo/spearo (16).png",
    "./assets/sprites/spearo/spearo (17).png",
    "./assets/sprites/spearo/spearo (18).png",
    "./assets/sprites/spearo/spearo (19).png",
    "./assets/sprites/spearo/spearo (20).png",
    "./assets/sprites/spearo/spearo (21).png",
    "./assets/sprites/spearo/spearo (22).png",
    "./assets/sprites/spearo/spearo (23).png",
    "./assets/sprites/spearo/spearo (24).png",
    "./assets/sprites/spearo/spearo (25).png",
    "./assets/sprites/spearo/spearo (26).png",
    "./assets/sprites/spearo/spearo (27).png",
    "./assets/sprites/spearo/spearo (28).png",
    "./assets/sprites/spearo/spearo (29).png",
    "./assets/sprites/spearo/spearo (30).png",
    "./assets/sprites/spearo/spearo (31).png",
    "./assets/sprites/spearo/spearo (32).png",
    "./assets/sprites/spearo/spearo (33).png",
    "./assets/sprites/spearo/spearo (34).png",
    "./assets/sprites/spearo/spearo (35).png",
    "./assets/sprites/spearo/spearo (36).png",
    "./assets/sprites/spearo/spearo (37).png",
    "./assets/sprites/spearo/spearo (38).png",
    "./assets/sprites/spearo/spearo (39).png",
    "./assets/sprites/spearo/spearo (40).png",
    "./assets/sprites/spearo/spearo (41).png",
    "./assets/sprites/spearo/spearo (42).png",
    "./assets/sprites/spearo/spearo (43).png",
    "./assets/sprites/spearo/spearo (44).png",
    "./assets/sprites/spearo/spearo (45).png",
    "./assets/sprites/spearo/spearo (46).png",
    "./assets/sprites/spearo/spearo (47).png",
    "./assets/sprites/spearo/spearo (48).png",
    "./assets/sprites/spearo/spearo (49).png",
    "./assets/sprites/spearo/spearo (50).png",
    "./assets/sprites/spearo/spearo (51).png",
    "./assets/sprites/spearo/spearo (52).png",
    "./assets/sprites/spearo/spearo (53).png",
    "./assets/sprites/spearo/spearo (54).png",
    "./assets/sprites/spearo/spearo (55).png",
    "./assets/sprites/spearo/spearo (56).png",
    "./assets/sprites/spearo/spearo (57).png",
    "./assets/sprites/spearo/spearo (58).png",
    "./assets/sprites/spearo/spearo (59).png",
    "./assets/sprites/spearo/spearo (60).png"
  );
  ChtullieAnimation = loadAnimation(
    "./assets/sprites/chtullie/chtullie (1).png",
    "./assets/sprites/chtullie/chtullie (2).png",
    "./assets/sprites/chtullie/chtullie (3).png",
    "./assets/sprites/chtullie/chtullie (4).png",
    "./assets/sprites/chtullie/chtullie (5).png",
    "./assets/sprites/chtullie/chtullie (6).png",
    "./assets/sprites/chtullie/chtullie (7).png",
    "./assets/sprites/chtullie/chtullie (8).png",
    "./assets/sprites/chtullie/chtullie (9).png",
    "./assets/sprites/chtullie/chtullie (10).png",
    "./assets/sprites/chtullie/chtullie (11).png",
    "./assets/sprites/chtullie/chtullie (12).png",
    "./assets/sprites/chtullie/chtullie (13).png",
    "./assets/sprites/chtullie/chtullie (14).png",
    "./assets/sprites/chtullie/chtullie (15).png",
    "./assets/sprites/chtullie/chtullie (16).png",
    "./assets/sprites/chtullie/chtullie (17).png",
    "./assets/sprites/chtullie/chtullie (18).png",
    "./assets/sprites/chtullie/chtullie (19).png",
    "./assets/sprites/chtullie/chtullie (20).png",
    "./assets/sprites/chtullie/chtullie (21).png",
    "./assets/sprites/chtullie/chtullie (22).png",
    "./assets/sprites/chtullie/chtullie (23).png",
    "./assets/sprites/chtullie/chtullie (24).png",
    "./assets/sprites/chtullie/chtullie (25).png",
    "./assets/sprites/chtullie/chtullie (26).png",
    "./assets/sprites/chtullie/chtullie (27).png",
    "./assets/sprites/chtullie/chtullie (28).png",
    "./assets/sprites/chtullie/chtullie (29).png",
    "./assets/sprites/chtullie/chtullie (30).png",
    "./assets/sprites/chtullie/chtullie (31).png",
    "./assets/sprites/chtullie/chtullie (32).png",
    "./assets/sprites/chtullie/chtullie (33).png",
    "./assets/sprites/chtullie/chtullie (34).png",
    "./assets/sprites/chtullie/chtullie (35).png",
    "./assets/sprites/chtullie/chtullie (36).png",
    "./assets/sprites/chtullie/chtullie (37).png",
    "./assets/sprites/chtullie/chtullie (38).png",
    "./assets/sprites/chtullie/chtullie (39).png",
    "./assets/sprites/chtullie/chtullie (40).png"
  );
  PufferAnimation = loadAnimation(
    "./assets/sprites/puffer/puffer (1).png",
    "./assets/sprites/puffer/puffer (2).png",
    "./assets/sprites/puffer/puffer (3).png",
    "./assets/sprites/puffer/puffer (4).png",
    "./assets/sprites/puffer/puffer (5).png",
    "./assets/sprites/puffer/puffer (6).png",
    "./assets/sprites/puffer/puffer (7).png",
    "./assets/sprites/puffer/puffer (8).png",
    "./assets/sprites/puffer/puffer (9).png",
    "./assets/sprites/puffer/puffer (10).png",
    "./assets/sprites/puffer/puffer (11).png",
    "./assets/sprites/puffer/puffer (12).png",
    "./assets/sprites/puffer/puffer (13).png",
    "./assets/sprites/puffer/puffer (14).png",
    "./assets/sprites/puffer/puffer (15).png",
    "./assets/sprites/puffer/puffer (16).png",
    "./assets/sprites/puffer/puffer (17).png",
    "./assets/sprites/puffer/puffer (18).png",
    "./assets/sprites/puffer/puffer (19).png",
    "./assets/sprites/puffer/puffer (20).png",
    "./assets/sprites/puffer/puffer (21).png",
    "./assets/sprites/puffer/puffer (22).png",
    "./assets/sprites/puffer/puffer (23).png",
    "./assets/sprites/puffer/puffer (24).png",
    "./assets/sprites/puffer/puffer (25).png",
    "./assets/sprites/puffer/puffer (26).png",
    "./assets/sprites/puffer/puffer (27).png",
    "./assets/sprites/puffer/puffer (28).png",
    "./assets/sprites/puffer/puffer (29).png",
    "./assets/sprites/puffer/puffer (30).png",
    "./assets/sprites/puffer/puffer (31).png",
    "./assets/sprites/puffer/puffer (32).png",
    "./assets/sprites/puffer/puffer (33).png",
    "./assets/sprites/puffer/puffer (34).png",
    "./assets/sprites/puffer/puffer (35).png",
    "./assets/sprites/puffer/puffer (36).png",
    "./assets/sprites/puffer/puffer (37).png",
    "./assets/sprites/puffer/puffer (38).png",
    "./assets/sprites/puffer/puffer (39).png",
    "./assets/sprites/puffer/puffer (40).png"
  );
  InkyAnimation = loadAnimation(
    "./assets/sprites/inky/inky (1).png",
    "./assets/sprites/inky/inky (2).png",
    "./assets/sprites/inky/inky (3).png",
    "./assets/sprites/inky/inky (4).png",
    "./assets/sprites/inky/inky (5).png",
    "./assets/sprites/inky/inky (6).png",
    "./assets/sprites/inky/inky (7).png",
    "./assets/sprites/inky/inky (8).png",
    "./assets/sprites/inky/inky (9).png",
    "./assets/sprites/inky/inky (10).png",
    "./assets/sprites/inky/inky (11).png",
    "./assets/sprites/inky/inky (12).png",
    "./assets/sprites/inky/inky (13).png",
    "./assets/sprites/inky/inky (14).png",
    "./assets/sprites/inky/inky (15).png",
    "./assets/sprites/inky/inky (16).png",
    "./assets/sprites/inky/inky (17).png",
    "./assets/sprites/inky/inky (18).png",
    "./assets/sprites/inky/inky (19).png",
    "./assets/sprites/inky/inky (20).png",
    "./assets/sprites/inky/inky (21).png",
    "./assets/sprites/inky/inky (22).png",
    "./assets/sprites/inky/inky (23).png",
    "./assets/sprites/inky/inky (24).png",
    "./assets/sprites/inky/inky (25).png",
    "./assets/sprites/inky/inky (26).png",
    "./assets/sprites/inky/inky (27).png",
    "./assets/sprites/inky/inky (28).png",
    "./assets/sprites/inky/inky (29).png",
    "./assets/sprites/inky/inky (30).png",
    "./assets/sprites/inky/inky (31).png",
    "./assets/sprites/inky/inky (32).png",
    "./assets/sprites/inky/inky (33).png",
    "./assets/sprites/inky/inky (34).png",
    "./assets/sprites/inky/inky (35).png",
    "./assets/sprites/inky/inky (36).png",
    "./assets/sprites/inky/inky (37).png",
    "./assets/sprites/inky/inky (38).png",
    "./assets/sprites/inky/inky (39).png",
    "./assets/sprites/inky/inky (40).png",
    "./assets/sprites/inky/inky (41).png",
    "./assets/sprites/inky/inky (42).png",
    "./assets/sprites/inky/inky (43).png",
    "./assets/sprites/inky/inky (44).png",
    "./assets/sprites/inky/inky (45).png",
    "./assets/sprites/inky/inky (46).png",
    "./assets/sprites/inky/inky (47).png",
    "./assets/sprites/inky/inky (48).png",
    "./assets/sprites/inky/inky (49).png",
    "./assets/sprites/inky/inky (50).png",
    "./assets/sprites/inky/inky (51).png",
    "./assets/sprites/inky/inky (52).png",
    "./assets/sprites/inky/inky (53).png",
    "./assets/sprites/inky/inky (54).png",
    "./assets/sprites/inky/inky (55).png",
    "./assets/sprites/inky/inky (56).png",
    "./assets/sprites/inky/inky (57).png",
    "./assets/sprites/inky/inky (58).png",
    "./assets/sprites/inky/inky (59).png",
    "./assets/sprites/inky/inky (60).png",
    "./assets/sprites/inky/inky (61).png",
    "./assets/sprites/inky/inky (62).png",
    "./assets/sprites/inky/inky (63).png",
    "./assets/sprites/inky/inky (64).png",
    "./assets/sprites/inky/inky (65).png",
    "./assets/sprites/inky/inky (66).png",
    "./assets/sprites/inky/inky (67).png",
    "./assets/sprites/inky/inky (68).png",
    "./assets/sprites/inky/inky (69).png",
    "./assets/sprites/inky/inky (70).png",
    "./assets/sprites/inky/inky (71).png",
    "./assets/sprites/inky/inky (72).png",
    "./assets/sprites/inky/inky (73).png",
    "./assets/sprites/inky/inky (74).png",
    "./assets/sprites/inky/inky (75).png",
    "./assets/sprites/inky/inky (76).png",
    "./assets/sprites/inky/inky (77).png",
    "./assets/sprites/inky/inky (78).png",
    "./assets/sprites/inky/inky (79).png",
    "./assets/sprites/inky/inky (80).png",
    "./assets/sprites/inky/inky (81).png",
    "./assets/sprites/inky/inky (82).png",
    "./assets/sprites/inky/inky (83).png",
    "./assets/sprites/inky/inky (84).png",
    "./assets/sprites/inky/inky (85).png",
    "./assets/sprites/inky/inky (86).png",
    "./assets/sprites/inky/inky (87).png",
    "./assets/sprites/inky/inky (88).png",
    "./assets/sprites/inky/inky (89).png",
    "./assets/sprites/inky/inky (90).png",
    "./assets/sprites/inky/inky (91).png"
  );
  InkerAnimation = loadAnimation(
    "./assets/sprites/inker/inker (1).png",
    "./assets/sprites/inker/inker (2).png",
    "./assets/sprites/inker/inker (3).png",
    "./assets/sprites/inker/inker (4).png",
    "./assets/sprites/inker/inker (5).png",
    "./assets/sprites/inker/inker (6).png",
    "./assets/sprites/inker/inker (7).png",
    "./assets/sprites/inker/inker (8).png",
    "./assets/sprites/inker/inker (9).png",
    "./assets/sprites/inker/inker (10).png",
    "./assets/sprites/inker/inker (11).png",
    "./assets/sprites/inker/inker (12).png",
    "./assets/sprites/inker/inker (13).png",
    "./assets/sprites/inker/inker (14).png",
    "./assets/sprites/inker/inker (15).png",
    "./assets/sprites/inker/inker (16).png",
    "./assets/sprites/inker/inker (17).png",
    "./assets/sprites/inker/inker (18).png",
    "./assets/sprites/inker/inker (19).png",
    "./assets/sprites/inker/inker (20).png",
    "./assets/sprites/inker/inker (21).png",
    "./assets/sprites/inker/inker (22).png",
    "./assets/sprites/inker/inker (23).png",
    "./assets/sprites/inker/inker (24).png",
    "./assets/sprites/inker/inker (25).png",
    "./assets/sprites/inker/inker (26).png",
    "./assets/sprites/inker/inker (27).png",
    "./assets/sprites/inker/inker (28).png",
    "./assets/sprites/inker/inker (29).png",
    "./assets/sprites/inker/inker (30).png",
    "./assets/sprites/inker/inker (31).png",
    "./assets/sprites/inker/inker (32).png",
    "./assets/sprites/inker/inker (33).png",
    "./assets/sprites/inker/inker (34).png",
    "./assets/sprites/inker/inker (35).png",
    "./assets/sprites/inker/inker (36).png",
    "./assets/sprites/inker/inker (37).png",
    "./assets/sprites/inker/inker (38).png",
    "./assets/sprites/inker/inker (39).png",
    "./assets/sprites/inker/inker (40).png",
    "./assets/sprites/inker/inker (41).png",
    "./assets/sprites/inker/inker (42).png",
    "./assets/sprites/inker/inker (43).png",
    "./assets/sprites/inker/inker (44).png",
    "./assets/sprites/inker/inker (45).png",
    "./assets/sprites/inker/inker (46).png",
    "./assets/sprites/inker/inker (47).png",
    "./assets/sprites/inker/inker (48).png",
    "./assets/sprites/inker/inker (49).png",
    "./assets/sprites/inker/inker (50).png",
    "./assets/sprites/inker/inker (51).png",
    "./assets/sprites/inker/inker (52).png",
    "./assets/sprites/inker/inker (53).png",
    "./assets/sprites/inker/inker (54).png",
    "./assets/sprites/inker/inker (55).png",
    "./assets/sprites/inker/inker (56).png",
    "./assets/sprites/inker/inker (57).png",
    "./assets/sprites/inker/inker (58).png",
    "./assets/sprites/inker/inker (59).png",
    "./assets/sprites/inker/inker (60).png",
    "./assets/sprites/inker/inker (61).png",
    "./assets/sprites/inker/inker (62).png",
    "./assets/sprites/inker/inker (63).png",
    "./assets/sprites/inker/inker (64).png",
    "./assets/sprites/inker/inker (65).png",
    "./assets/sprites/inker/inker (66).png",
    "./assets/sprites/inker/inker (67).png",
    "./assets/sprites/inker/inker (68).png",
    "./assets/sprites/inker/inker (69).png",
    "./assets/sprites/inker/inker (70).png",
    "./assets/sprites/inker/inker (71).png",
    "./assets/sprites/inker/inker (72).png",
    "./assets/sprites/inker/inker (73).png",
    "./assets/sprites/inker/inker (74).png",
    "./assets/sprites/inker/inker (75).png",
    "./assets/sprites/inker/inker (76).png",
    "./assets/sprites/inker/inker (77).png",
    "./assets/sprites/inker/inker (78).png",
    "./assets/sprites/inker/inker (79).png",
    "./assets/sprites/inker/inker (80).png",
    "./assets/sprites/inker/inker (81).png",
    "./assets/sprites/inker/inker (82).png",
    "./assets/sprites/inker/inker (83).png",
    "./assets/sprites/inker/inker (84).png",
    "./assets/sprites/inker/inker (85).png",
    "./assets/sprites/inker/inker (86).png",
    "./assets/sprites/inker/inker (87).png",
    "./assets/sprites/inker/inker (88).png",
    "./assets/sprites/inker/inker (89).png",
    "./assets/sprites/inker/inker (90).png",
    "./assets/sprites/inker/inker (91).png"
  );
  ZapperAnimation = loadAnimation(
    "./assets/sprites/zapper/zapper (1).png",
    "./assets/sprites/zapper/zapper (2).png",
    "./assets/sprites/zapper/zapper (3).png",
    "./assets/sprites/zapper/zapper (4).png",
    "./assets/sprites/zapper/zapper (5).png",
    "./assets/sprites/zapper/zapper (6).png",
    "./assets/sprites/zapper/zapper (7).png",
    "./assets/sprites/zapper/zapper (8).png",
    "./assets/sprites/zapper/zapper (9).png",
    "./assets/sprites/zapper/zapper (10).png",
    "./assets/sprites/zapper/zapper (11).png",
    "./assets/sprites/zapper/zapper (12).png",
    "./assets/sprites/zapper/zapper (13).png",
    "./assets/sprites/zapper/zapper (14).png",
    "./assets/sprites/zapper/zapper (15).png",
    "./assets/sprites/zapper/zapper (16).png",
    "./assets/sprites/zapper/zapper (17).png",
    "./assets/sprites/zapper/zapper (18).png",
    "./assets/sprites/zapper/zapper (19).png",
    "./assets/sprites/zapper/zapper (20).png",
    "./assets/sprites/zapper/zapper (21).png",
    "./assets/sprites/zapper/zapper (22).png",
    "./assets/sprites/zapper/zapper (23).png",
    "./assets/sprites/zapper/zapper (24).png",
    "./assets/sprites/zapper/zapper (25).png",
    "./assets/sprites/zapper/zapper (26).png",
    "./assets/sprites/zapper/zapper (27).png",
    "./assets/sprites/zapper/zapper (28).png",
    "./assets/sprites/zapper/zapper (29).png",
    "./assets/sprites/zapper/zapper (30).png",
    "./assets/sprites/zapper/zapper (31).png",
    "./assets/sprites/zapper/zapper (32).png",
    "./assets/sprites/zapper/zapper (33).png",
    "./assets/sprites/zapper/zapper (34).png",
    "./assets/sprites/zapper/zapper (35).png",
    "./assets/sprites/zapper/zapper (36).png",
    "./assets/sprites/zapper/zapper (37).png",
    "./assets/sprites/zapper/zapper (38).png",
    "./assets/sprites/zapper/zapper (39).png",
    "./assets/sprites/zapper/zapper (40).png",
    "./assets/sprites/zapper/zapper (41).png",
    "./assets/sprites/zapper/zapper (42).png",
    "./assets/sprites/zapper/zapper (43).png",
    "./assets/sprites/zapper/zapper (44).png",
    "./assets/sprites/zapper/zapper (45).png",
    "./assets/sprites/zapper/zapper (46).png",
    "./assets/sprites/zapper/zapper (47).png",
    "./assets/sprites/zapper/zapper (48).png",
    "./assets/sprites/zapper/zapper (49).png",
    "./assets/sprites/zapper/zapper (50).png",
    "./assets/sprites/zapper/zapper (51).png",
    "./assets/sprites/zapper/zapper (52).png",
    "./assets/sprites/zapper/zapper (53).png",
    "./assets/sprites/zapper/zapper (54).png",
    "./assets/sprites/zapper/zapper (55).png",
    "./assets/sprites/zapper/zapper (56).png",
    "./assets/sprites/zapper/zapper (57).png",
    "./assets/sprites/zapper/zapper (58).png",
    "./assets/sprites/zapper/zapper (59).png",
    "./assets/sprites/zapper/zapper (60).png",
    "./assets/sprites/zapper/zapper (61).png",
    "./assets/sprites/zapper/zapper (62).png",
    "./assets/sprites/zapper/zapper (63).png",
    "./assets/sprites/zapper/zapper (64).png",
    "./assets/sprites/zapper/zapper (65).png",
    "./assets/sprites/zapper/zapper (66).png",
    "./assets/sprites/zapper/zapper (67).png",
    "./assets/sprites/zapper/zapper (68).png",
    "./assets/sprites/zapper/zapper (69).png",
    "./assets/sprites/zapper/zapper (70).png",
    "./assets/sprites/zapper/zapper (71).png",
    "./assets/sprites/zapper/zapper (72).png",
    "./assets/sprites/zapper/zapper (73).png",
    "./assets/sprites/zapper/zapper (74).png",
    "./assets/sprites/zapper/zapper (75).png",
    "./assets/sprites/zapper/zapper (76).png",
    "./assets/sprites/zapper/zapper (77).png",
    "./assets/sprites/zapper/zapper (78).png",
    "./assets/sprites/zapper/zapper (79).png",
    "./assets/sprites/zapper/zapper (80).png",
    "./assets/sprites/zapper/zapper (81).png",
    "./assets/sprites/zapper/zapper (82).png",
    "./assets/sprites/zapper/zapper (83).png",
    "./assets/sprites/zapper/zapper (84).png",
    "./assets/sprites/zapper/zapper (85).png",
    "./assets/sprites/zapper/zapper (86).png",
    "./assets/sprites/zapper/zapper (87).png",
    "./assets/sprites/zapper/zapper (88).png",
    "./assets/sprites/zapper/zapper (89).png",
    "./assets/sprites/zapper/zapper (90).png",
    "./assets/sprites/zapper/zapper (91).png"
  );
  HealthAnimation = loadAnimation(
    "./assets/sprites/health/health (1).png",
    "./assets/sprites/health/health (2).png",
    "./assets/sprites/health/health (3).png",
    "./assets/sprites/health/health (4).png",
    "./assets/sprites/health/health (5).png",
    "./assets/sprites/health/health (6).png",
    "./assets/sprites/health/health (7).png",
    "./assets/sprites/health/health (8).png",
    "./assets/sprites/health/health (9).png",
    "./assets/sprites/health/health (10).png",
    "./assets/sprites/health/health (11).png",
    "./assets/sprites/health/health (12).png",
    "./assets/sprites/health/health (13).png",
    "./assets/sprites/health/health (14).png",
    "./assets/sprites/health/health (15).png",
    "./assets/sprites/health/health (16).png",
    "./assets/sprites/health/health (17).png",
    "./assets/sprites/health/health (18).png",
    "./assets/sprites/health/health (19).png",
    "./assets/sprites/health/health (20).png",
    "./assets/sprites/health/health (21).png",
    "./assets/sprites/health/health (22).png",
    "./assets/sprites/health/health (23).png",
    "./assets/sprites/health/health (24).png",
    "./assets/sprites/health/health (25).png",
    "./assets/sprites/health/health (26).png",
    "./assets/sprites/health/health (27).png",
    "./assets/sprites/health/health (28).png",
    "./assets/sprites/health/health (29).png",
    "./assets/sprites/health/health (30).png",
    "./assets/sprites/health/health (31).png"
  );
  LivingDeadAnimation = loadAnimation(
    "./assets/sprites/livingdead/livingdead (1).png",
    "./assets/sprites/livingdead/livingdead (2).png",
    "./assets/sprites/livingdead/livingdead (3).png",
    "./assets/sprites/livingdead/livingdead (4).png",
    "./assets/sprites/livingdead/livingdead (5).png",
    "./assets/sprites/livingdead/livingdead (6).png",
    "./assets/sprites/livingdead/livingdead (7).png",
    "./assets/sprites/livingdead/livingdead (8).png",
    "./assets/sprites/livingdead/livingdead (9).png",
    "./assets/sprites/livingdead/livingdead (10).png",
    "./assets/sprites/livingdead/livingdead (11).png",
    "./assets/sprites/livingdead/livingdead (12).png",
    "./assets/sprites/livingdead/livingdead (13).png",
    "./assets/sprites/livingdead/livingdead (14).png",
    "./assets/sprites/livingdead/livingdead (15).png",
    "./assets/sprites/livingdead/livingdead (16).png",
    "./assets/sprites/livingdead/livingdead (17).png",
    "./assets/sprites/livingdead/livingdead (18).png",
    "./assets/sprites/livingdead/livingdead (19).png",
    "./assets/sprites/livingdead/livingdead (20).png",
    "./assets/sprites/livingdead/livingdead (21).png",
    "./assets/sprites/livingdead/livingdead (22).png",
    "./assets/sprites/livingdead/livingdead (23).png",
    "./assets/sprites/livingdead/livingdead (24).png",
    "./assets/sprites/livingdead/livingdead (25).png",
    "./assets/sprites/livingdead/livingdead (26).png",
    "./assets/sprites/livingdead/livingdead (27).png",
    "./assets/sprites/livingdead/livingdead (28).png",
    "./assets/sprites/livingdead/livingdead (29).png",
    "./assets/sprites/livingdead/livingdead (30).png",
    "./assets/sprites/livingdead/livingdead (31).png",
    "./assets/sprites/livingdead/livingdead (32).png",
    "./assets/sprites/livingdead/livingdead (33).png",
    "./assets/sprites/livingdead/livingdead (34).png",
    "./assets/sprites/livingdead/livingdead (35).png",
    "./assets/sprites/livingdead/livingdead (36).png",
    "./assets/sprites/livingdead/livingdead (37).png",
    "./assets/sprites/livingdead/livingdead (38).png",
    "./assets/sprites/livingdead/livingdead (39).png",
    "./assets/sprites/livingdead/livingdead (40).png",
    "./assets/sprites/livingdead/livingdead (41).png",
    "./assets/sprites/livingdead/livingdead (42).png",
    "./assets/sprites/livingdead/livingdead (43).png",
    "./assets/sprites/livingdead/livingdead (44).png",
    "./assets/sprites/livingdead/livingdead (45).png",
    "./assets/sprites/livingdead/livingdead (46).png",
    "./assets/sprites/livingdead/livingdead (47).png",
    "./assets/sprites/livingdead/livingdead (48).png",
    "./assets/sprites/livingdead/livingdead (49).png",
    "./assets/sprites/livingdead/livingdead (50).png",
    "./assets/sprites/livingdead/livingdead (51).png"
  );
  SnailAnimation = loadAnimation(
    "./assets/sprites/snail/snail (1).png",
    "./assets/sprites/snail/snail (2).png",
    "./assets/sprites/snail/snail (3).png",
    "./assets/sprites/snail/snail (4).png",
    "./assets/sprites/snail/snail (5).png",
    "./assets/sprites/snail/snail (6).png",
    "./assets/sprites/snail/snail (7).png",
    "./assets/sprites/snail/snail (8).png",
    "./assets/sprites/snail/snail (9).png",
    "./assets/sprites/snail/snail (10).png",
    "./assets/sprites/snail/snail (11).png",
    "./assets/sprites/snail/snail (12).png",
    "./assets/sprites/snail/snail (13).png",
    "./assets/sprites/snail/snail (14).png",
    "./assets/sprites/snail/snail (15).png",
    "./assets/sprites/snail/snail (16).png",
    "./assets/sprites/snail/snail (17).png",
    "./assets/sprites/snail/snail (18).png",
    "./assets/sprites/snail/snail (19).png",
    "./assets/sprites/snail/snail (20).png",
    "./assets/sprites/snail/snail (21).png",
    "./assets/sprites/snail/snail (22).png",
    "./assets/sprites/snail/snail (23).png",
    "./assets/sprites/snail/snail (24).png",
    "./assets/sprites/snail/snail (25).png",
    "./assets/sprites/snail/snail (26).png",
    "./assets/sprites/snail/snail (27).png",
    "./assets/sprites/snail/snail (28).png",
    "./assets/sprites/snail/snail (29).png",
    "./assets/sprites/snail/snail (30).png",
    "./assets/sprites/snail/snail (31).png",
    "./assets/sprites/snail/snail (32).png",
    "./assets/sprites/snail/snail (33).png",
    "./assets/sprites/snail/snail (34).png",
    "./assets/sprites/snail/snail (35).png",
    "./assets/sprites/snail/snail (36).png",
    "./assets/sprites/snail/snail (37).png",
    "./assets/sprites/snail/snail (38).png",
    "./assets/sprites/snail/snail (39).png",
    "./assets/sprites/snail/snail (40).png",
    "./assets/sprites/snail/snail (41).png",
    "./assets/sprites/snail/snail (42).png",
    "./assets/sprites/snail/snail (43).png",
    "./assets/sprites/snail/snail (44).png",
    "./assets/sprites/snail/snail (45).png",
    "./assets/sprites/snail/snail (46).png"
  );
  ShellieAnimation = loadAnimation(
    "./assets/sprites/shellie/shellie (1).png",
    "./assets/sprites/shellie/shellie (2).png",
    "./assets/sprites/shellie/shellie (3).png",
    "./assets/sprites/shellie/shellie (4).png",
    "./assets/sprites/shellie/shellie (5).png",
    "./assets/sprites/shellie/shellie (6).png",
    "./assets/sprites/shellie/shellie (7).png",
    "./assets/sprites/shellie/shellie (8).png",
    "./assets/sprites/shellie/shellie (9).png",
    "./assets/sprites/shellie/shellie (10).png",
    "./assets/sprites/shellie/shellie (11).png",
    "./assets/sprites/shellie/shellie (12).png",
    "./assets/sprites/shellie/shellie (13).png",
    "./assets/sprites/shellie/shellie (14).png",
    "./assets/sprites/shellie/shellie (15).png",
    "./assets/sprites/shellie/shellie (16).png",
    "./assets/sprites/shellie/shellie (17).png",
    "./assets/sprites/shellie/shellie (18).png",
    "./assets/sprites/shellie/shellie (19).png",
    "./assets/sprites/shellie/shellie (20).png",
    "./assets/sprites/shellie/shellie (21).png",
    "./assets/sprites/shellie/shellie (22).png",
    "./assets/sprites/shellie/shellie (23).png",
    "./assets/sprites/shellie/shellie (24).png",
    "./assets/sprites/shellie/shellie (25).png",
    "./assets/sprites/shellie/shellie (26).png",
    "./assets/sprites/shellie/shellie (27).png",
    "./assets/sprites/shellie/shellie (28).png",
    "./assets/sprites/shellie/shellie (29).png",
    "./assets/sprites/shellie/shellie (30).png",
    "./assets/sprites/shellie/shellie (31).png",
    "./assets/sprites/shellie/shellie (32).png",
    "./assets/sprites/shellie/shellie (33).png",
    "./assets/sprites/shellie/shellie (34).png",
    "./assets/sprites/shellie/shellie (35).png",
    "./assets/sprites/shellie/shellie (36).png",
    "./assets/sprites/shellie/shellie (37).png",
    "./assets/sprites/shellie/shellie (38).png",
    "./assets/sprites/shellie/shellie (39).png",
    "./assets/sprites/shellie/shellie (40).png",
    "./assets/sprites/shellie/shellie (41).png",
    "./assets/sprites/shellie/shellie (42).png",
    "./assets/sprites/shellie/shellie (43).png",
    "./assets/sprites/shellie/shellie (44).png",
    "./assets/sprites/shellie/shellie (45).png",
    "./assets/sprites/shellie/shellie (46).png",
    "./assets/sprites/shellie/shellie (47).png",
    "./assets/sprites/shellie/shellie (48).png",
    "./assets/sprites/shellie/shellie (49).png",
    "./assets/sprites/shellie/shellie (50).png",
    "./assets/sprites/shellie/shellie (51).png",
    "./assets/sprites/shellie/shellie (52).png",
    "./assets/sprites/shellie/shellie (53).png",
    "./assets/sprites/shellie/shellie (54).png",
    "./assets/sprites/shellie/shellie (55).png",
    "./assets/sprites/shellie/shellie (56).png",
    "./assets/sprites/shellie/shellie (57).png",
    "./assets/sprites/shellie/shellie (58).png",
    "./assets/sprites/shellie/shellie (59).png",
    "./assets/sprites/shellie/shellie (60).png"
  );
  TeethyAnimation = loadAnimation(
    "./assets/sprites/teethy/teethy (1).png",
    "./assets/sprites/teethy/teethy (2).png",
    "./assets/sprites/teethy/teethy (3).png",
    "./assets/sprites/teethy/teethy (4).png",
    "./assets/sprites/teethy/teethy (5).png",
    "./assets/sprites/teethy/teethy (6).png",
    "./assets/sprites/teethy/teethy (7).png",
    "./assets/sprites/teethy/teethy (8).png",
    "./assets/sprites/teethy/teethy (9).png",
    "./assets/sprites/teethy/teethy (10).png",
    "./assets/sprites/teethy/teethy (11).png",
    "./assets/sprites/teethy/teethy (12).png",
    "./assets/sprites/teethy/teethy (13).png",
    "./assets/sprites/teethy/teethy (14).png",
    "./assets/sprites/teethy/teethy (15).png",
    "./assets/sprites/teethy/teethy (16).png",
    "./assets/sprites/teethy/teethy (17).png",
    "./assets/sprites/teethy/teethy (18).png",
    "./assets/sprites/teethy/teethy (19).png",
    "./assets/sprites/teethy/teethy (20).png",
    "./assets/sprites/teethy/teethy (21).png",
    "./assets/sprites/teethy/teethy (22).png",
    "./assets/sprites/teethy/teethy (23).png",
    "./assets/sprites/teethy/teethy (24).png",
    "./assets/sprites/teethy/teethy (25).png",
    "./assets/sprites/teethy/teethy (26).png",
    "./assets/sprites/teethy/teethy (27).png",
    "./assets/sprites/teethy/teethy (28).png",
    "./assets/sprites/teethy/teethy (29).png",
    "./assets/sprites/teethy/teethy (30).png",
    "./assets/sprites/teethy/teethy (31).png",
    "./assets/sprites/teethy/teethy (32).png",
    "./assets/sprites/teethy/teethy (33).png",
    "./assets/sprites/teethy/teethy (34).png",
    "./assets/sprites/teethy/teethy (35).png",
    "./assets/sprites/teethy/teethy (36).png",
    "./assets/sprites/teethy/teethy (37).png",
    "./assets/sprites/teethy/teethy (38).png",
    "./assets/sprites/teethy/teethy (39).png",
    "./assets/sprites/teethy/teethy (40).png",
    "./assets/sprites/teethy/teethy (41).png",
    "./assets/sprites/teethy/teethy (42).png",
    "./assets/sprites/teethy/teethy (43).png",
    "./assets/sprites/teethy/teethy (44).png",
    "./assets/sprites/teethy/teethy (45).png",
    "./assets/sprites/teethy/teethy (46).png",
    "./assets/sprites/teethy/teethy (47).png",
    "./assets/sprites/teethy/teethy (48).png",
    "./assets/sprites/teethy/teethy (49).png",
    "./assets/sprites/teethy/teethy (50).png",
    "./assets/sprites/teethy/teethy (51).png",
    "./assets/sprites/teethy/teethy (52).png",
    "./assets/sprites/teethy/teethy (53).png",
    "./assets/sprites/teethy/teethy (54).png",
    "./assets/sprites/teethy/teethy (55).png",
    "./assets/sprites/teethy/teethy (56).png",
    "./assets/sprites/teethy/teethy (57).png",
    "./assets/sprites/teethy/teethy (58).png",
    "./assets/sprites/teethy/teethy (59).png",
    "./assets/sprites/teethy/teethy (60).png",
    "./assets/sprites/teethy/teethy (61).png"
  );
  CroccyAnimation = loadAnimation(
    "./assets/sprites/croccy/croccy (1).png",
    "./assets/sprites/croccy/croccy (2).png",
    "./assets/sprites/croccy/croccy (3).png",
    "./assets/sprites/croccy/croccy (4).png",
    "./assets/sprites/croccy/croccy (5).png",
    "./assets/sprites/croccy/croccy (6).png",
    "./assets/sprites/croccy/croccy (7).png",
    "./assets/sprites/croccy/croccy (8).png",
    "./assets/sprites/croccy/croccy (9).png",
    "./assets/sprites/croccy/croccy (10).png",
    "./assets/sprites/croccy/croccy (11).png",
    "./assets/sprites/croccy/croccy (12).png",
    "./assets/sprites/croccy/croccy (13).png",
    "./assets/sprites/croccy/croccy (14).png",
    "./assets/sprites/croccy/croccy (15).png",
    "./assets/sprites/croccy/croccy (16).png",
    "./assets/sprites/croccy/croccy (17).png",
    "./assets/sprites/croccy/croccy (18).png",
    "./assets/sprites/croccy/croccy (19).png",
    "./assets/sprites/croccy/croccy (20).png",
    "./assets/sprites/croccy/croccy (21).png",
    "./assets/sprites/croccy/croccy (22).png",
    "./assets/sprites/croccy/croccy (23).png",
    "./assets/sprites/croccy/croccy (24).png",
    "./assets/sprites/croccy/croccy (25).png",
    "./assets/sprites/croccy/croccy (26).png",
    "./assets/sprites/croccy/croccy (27).png",
    "./assets/sprites/croccy/croccy (28).png",
    "./assets/sprites/croccy/croccy (29).png",
    "./assets/sprites/croccy/croccy (30).png",
    "./assets/sprites/croccy/croccy (31).png",
    "./assets/sprites/croccy/croccy (32).png",
    "./assets/sprites/croccy/croccy (33).png",
    "./assets/sprites/croccy/croccy (34).png",
    "./assets/sprites/croccy/croccy (35).png",
    "./assets/sprites/croccy/croccy (36).png",
    "./assets/sprites/croccy/croccy (37).png",
    "./assets/sprites/croccy/croccy (38).png",
    "./assets/sprites/croccy/croccy (39).png",
    "./assets/sprites/croccy/croccy (40).png",
    "./assets/sprites/croccy/croccy (41).png",
    "./assets/sprites/croccy/croccy (42).png",
    "./assets/sprites/croccy/croccy (43).png",
    "./assets/sprites/croccy/croccy (44).png",
    "./assets/sprites/croccy/croccy (45).png",
    "./assets/sprites/croccy/croccy (46).png",
    "./assets/sprites/croccy/croccy (47).png",
    "./assets/sprites/croccy/croccy (48).png",
    "./assets/sprites/croccy/croccy (49).png",
    "./assets/sprites/croccy/croccy (50).png",
    "./assets/sprites/croccy/croccy (51).png",
    "./assets/sprites/croccy/croccy (52).png",
    "./assets/sprites/croccy/croccy (53).png",
    "./assets/sprites/croccy/croccy (54).png",
    "./assets/sprites/croccy/croccy (55).png",
    "./assets/sprites/croccy/croccy (56).png",
    "./assets/sprites/croccy/croccy (57).png",
    "./assets/sprites/croccy/croccy (58).png",
    "./assets/sprites/croccy/croccy (59).png",
    "./assets/sprites/croccy/croccy (60).png",
    "./assets/sprites/croccy/croccy (61).png",
    "./assets/sprites/croccy/croccy (62).png",
    "./assets/sprites/croccy/croccy (63).png",
    "./assets/sprites/croccy/croccy (64).png",
    "./assets/sprites/croccy/croccy (65).png",
    "./assets/sprites/croccy/croccy (66).png",
    "./assets/sprites/croccy/croccy (67).png",
    "./assets/sprites/croccy/croccy (68).png",
    "./assets/sprites/croccy/croccy (69).png",
    "./assets/sprites/croccy/croccy (70).png",
    "./assets/sprites/croccy/croccy (71).png",
    "./assets/sprites/croccy/croccy (72).png",
    "./assets/sprites/croccy/croccy (73).png",
    "./assets/sprites/croccy/croccy (74).png",
    "./assets/sprites/croccy/croccy (75).png",
    "./assets/sprites/croccy/croccy (76).png",
    "./assets/sprites/croccy/croccy (77).png",
    "./assets/sprites/croccy/croccy (78).png",
    "./assets/sprites/croccy/croccy (79).png",
    "./assets/sprites/croccy/croccy (80).png",
    "./assets/sprites/croccy/croccy (81).png",
    "./assets/sprites/croccy/croccy (82).png",
    "./assets/sprites/croccy/croccy (83).png",
    "./assets/sprites/croccy/croccy (84).png",
    "./assets/sprites/croccy/croccy (85).png",
    "./assets/sprites/croccy/croccy (86).png",
    "./assets/sprites/croccy/croccy (87).png",
    "./assets/sprites/croccy/croccy (88).png",
    "./assets/sprites/croccy/croccy (89).png",
    "./assets/sprites/croccy/croccy (90).png",
    "./assets/sprites/croccy/croccy (91).png",
    "./assets/sprites/croccy/croccy (92).png",
    "./assets/sprites/croccy/croccy (93).png",
    "./assets/sprites/croccy/croccy (94).png",
    "./assets/sprites/croccy/croccy (95).png",
    "./assets/sprites/croccy/croccy (96).png",
    "./assets/sprites/croccy/croccy (97).png",
    "./assets/sprites/croccy/croccy (98).png",
    "./assets/sprites/croccy/croccy (99).png",
    "./assets/sprites/croccy/croccy (100).png",
    "./assets/sprites/croccy/croccy (101).png",
    "./assets/sprites/croccy/croccy (102).png",
    "./assets/sprites/croccy/croccy (103).png",
    "./assets/sprites/croccy/croccy (104).png",
    "./assets/sprites/croccy/croccy (105).png",
    "./assets/sprites/croccy/croccy (106).png",
    "./assets/sprites/croccy/croccy (107).png",
    "./assets/sprites/croccy/croccy (108).png",
    "./assets/sprites/croccy/croccy (109).png",
    "./assets/sprites/croccy/croccy (110).png",
    "./assets/sprites/croccy/croccy (111).png",
    "./assets/sprites/croccy/croccy (112).png",
    "./assets/sprites/croccy/croccy (113).png",
    "./assets/sprites/croccy/croccy (114).png",
    "./assets/sprites/croccy/croccy (115).png",
    "./assets/sprites/croccy/croccy (116).png",
    "./assets/sprites/croccy/croccy (117).png",
    "./assets/sprites/croccy/croccy (118).png",
    "./assets/sprites/croccy/croccy (119).png",
    "./assets/sprites/croccy/croccy (120).png",
    "./assets/sprites/croccy/croccy (121).png"
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
  if (value.includes("lulu")) {
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
    enemies = [
      new Jinxy(value),
      new Fish(value),
      new Teethy(value),
      new Croccy(value),
    ];
    return random(enemies);
  }
  if (value.length == 4) {
    enemies = [new Fish(value), new Teethy(value), new Croccy(value)];
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
      spawnProgression(0.1);
      spawnGhostyBurst(0.99);
      spawnChtullie(300, 0.99, "lulu");
    } else if (easyMode) {
      spawnProgression(0.5);
      spawnSpearo(0.99);
      spawnGhostyBurst(0.99);
      spawnRandom(50, 0.99);
      spawnChtullie(300, 0.99, "chtulu");
    } else if (normalMode) {
      spawnProgression(1);
      spawnSpearo(0.99);
      spawnBurst(0.99);
      spawnGhostyBurst(0.99);
      //belowscore
      spawnDoubleTrouble(50, 0.99);
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
      field.push(new Shellie(WORDS.pop(), height / 3));
      field.push(new Shellie(WORDS.pop(), height / 2));
      field.push(new Shellie(WORDS.pop(), (height / 3) * 2));
    }
  } else if (easyMode) {
    if (score > 200) {
      totalScore += score + depth;
      score = 0;
      level++;
      field.push(new Shellie(WORDS.splice(WORDS.length / 3, 1)[0], height / 3));
      field.push(new Shellie(WORDS.splice(WORDS.length / 3, 1)[0], height / 2));
      field.push(
        new Shellie(WORDS.splice(WORDS.length / 3, 1)[0], (height / 3) * 2)
      );
    }
  } else {
    if (score > 330) {
      totalScore += score + depth;
      score = 0;
      level++;
      field.push(new Shellie(WORDS.splice(WORDS.length / 2, 1)[0], height / 3));
      field.push(new Shellie(WORDS.splice(WORDS.length / 2, 1)[0], height / 2));
      field.push(
        new Shellie(WORDS.splice(WORDS.length / 2, 1)[0], (height / 3) * 2)
      );
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
      focus = findFocus(keyCode, field, secondfield);
      if (focus) {
        focus.erode(keyCode);
      }
    }
  }
}
function findFocus(code, field, secondfield) {
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
      const top10 = sortable.slice(0, 9);
      text(`${radio.value()}Highscores`, 70, 30);
      for (let i = 0; i < top10.length; i++) {
        text(`#${i + 1} ${top10[i][0]} : ${top10[i][1]}`, 70, 70 + i * 40);
      }
    }
    textAlign(CENTER);
    textSize(80);
    usernameInput = createInput("Name", "text");
    usernameInput.position((width / 4) * 2 - 200, (height / 4) * 2 + 300);
    usernameInput.input(onInput);
    postBtn = createButton("Submit Score");
    postBtn.position((width / 4) * 2 + 100, (height / 4) * 2 + 300);
    postBtn.mouseClicked(postRequest);

    playAgain = createButton("Play Again");
    playAgain.position(width / 2, 200);
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
      console.log("response", response);
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
// spawns
function spawnSpearo(chance) {
  if (random() > chance) {
    creature = new Spearo(random(CHARS));
    field.push(creature);
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
