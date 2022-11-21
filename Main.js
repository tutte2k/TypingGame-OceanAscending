const CHARSTRING = "a b c d e f g h i j k l m n o p q r s t u v x y z";
const NUMBERSTRING = "1 2 3 4 5 6 7 8 9 0";
const CHARS = CHARSTRING.split(" ");
const WORDS = WORDSTRING.split(" ").sort((a, b) => b.length - a.length);
const NUMBERS = NUMBERSTRING.split(" ");

var paused = false;
var gameOver = false;

var focus;

var field = [];
var secondfield = [];

var totalScore = 0;
var score = 0;
var kills = 0;
var level = 1;
var depth = 0;
var guyDepth = 0;

function preload() {
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
  JinxyAnimation = loadAnimation(
    "./assets/sprites/reddsquid/reddsquid (1).gif",
    "./assets/sprites/reddsquid/reddsquid (2).gif",
    "./assets/sprites/reddsquid/reddsquid (3).gif",
    "./assets/sprites/reddsquid/reddsquid (4).gif",
    "./assets/sprites/reddsquid/reddsquid (5).gif",
    "./assets/sprites/reddsquid/reddsquid (6).gif",
    "./assets/sprites/reddsquid/reddsquid (7).gif",
    "./assets/sprites/reddsquid/reddsquid (8).gif",
    "./assets/sprites/reddsquid/reddsquid (9).gif",
    "./assets/sprites/reddsquid/reddsquid (10).gif",
    "./assets/sprites/reddsquid/reddsquid (11).gif",
    "./assets/sprites/reddsquid/reddsquid (12).gif",
    "./assets/sprites/reddsquid/reddsquid (13).gif",
    "./assets/sprites/reddsquid/reddsquid (14).gif",
    "./assets/sprites/reddsquid/reddsquid (16).gif",
    "./assets/sprites/reddsquid/reddsquid (17).gif",
    "./assets/sprites/reddsquid/reddsquid (18).gif",
    "./assets/sprites/reddsquid/reddsquid (19).gif",
    "./assets/sprites/reddsquid/reddsquid (20).gif",
    "./assets/sprites/reddsquid/reddsquid (21).gif",
    "./assets/sprites/reddsquid/reddsquid (22).gif",
    "./assets/sprites/reddsquid/reddsquid (23).gif",
    "./assets/sprites/reddsquid/reddsquid (24).gif",
    "./assets/sprites/reddsquid/reddsquid (25).gif",
    "./assets/sprites/reddsquid/reddsquid (26).gif",
    "./assets/sprites/reddsquid/reddsquid (27).gif",
    "./assets/sprites/reddsquid/reddsquid (28).gif",
    "./assets/sprites/reddsquid/reddsquid (29).gif",
    "./assets/sprites/reddsquid/reddsquid (30).gif",
    "./assets/sprites/reddsquid/reddsquid (31).gif",
    "./assets/sprites/reddsquid/reddsquid (32).gif",
    "./assets/sprites/reddsquid/reddsquid (33).gif",
    "./assets/sprites/reddsquid/reddsquid (34).gif",
    "./assets/sprites/reddsquid/reddsquid (35).gif",
    "./assets/sprites/reddsquid/reddsquid (36).gif",
    "./assets/sprites/reddsquid/reddsquid (37).gif",
    "./assets/sprites/reddsquid/reddsquid (38).gif"
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
    "./assets/sprites/octo/octo (1).gif",
    "./assets/sprites/octo/octo (2).gif",
    "./assets/sprites/octo/octo (3).gif",
    "./assets/sprites/octo/octo (4).gif",
    "./assets/sprites/octo/octo (5).gif",
    "./assets/sprites/octo/octo (6).gif",
    "./assets/sprites/octo/octo (7).gif",
    "./assets/sprites/octo/octo (8).gif",
    "./assets/sprites/octo/octo (9).gif",
    "./assets/sprites/octo/octo (10).gif",
    "./assets/sprites/octo/octo (11).gif",
    "./assets/sprites/octo/octo (12).gif",
    "./assets/sprites/octo/octo (13).gif",
    "./assets/sprites/octo/octo (14).gif",
    "./assets/sprites/octo/octo (15).gif",
    "./assets/sprites/octo/octo (16).gif",
    "./assets/sprites/octo/octo (17).gif",
    "./assets/sprites/octo/octo (18).gif",
    "./assets/sprites/octo/octo (19).gif",
    "./assets/sprites/octo/octo (20).gif",
    "./assets/sprites/octo/octo (21).gif",
    "./assets/sprites/octo/octo (22).gif",
    "./assets/sprites/octo/octo (23).gif",
    "./assets/sprites/octo/octo (24).gif",
    "./assets/sprites/octo/octo (25).gif",
    "./assets/sprites/octo/octo (26).gif",
    "./assets/sprites/octo/octo (27).gif",
    "./assets/sprites/octo/octo (28).gif",
    "./assets/sprites/octo/octo (29).gif",
    "./assets/sprites/octo/octo (30).gif"
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
    "./assets/sprites/lion/lion (1).gif",
    "./assets/sprites/lion/lion (2).gif",
    "./assets/sprites/lion/lion (3).gif",
    "./assets/sprites/lion/lion (4).gif",
    "./assets/sprites/lion/lion (5).gif",
    "./assets/sprites/lion/lion (6).gif",
    "./assets/sprites/lion/lion (7).gif",
    "./assets/sprites/lion/lion (8).gif",
    "./assets/sprites/lion/lion (9).gif",
    "./assets/sprites/lion/lion (10).gif",
    "./assets/sprites/lion/lion (11).gif",
    "./assets/sprites/lion/lion (12).gif",
    "./assets/sprites/lion/lion (13).gif",
    "./assets/sprites/lion/lion (14).gif",
    "./assets/sprites/lion/lion (15).gif",
    "./assets/sprites/lion/lion (16).gif",
    "./assets/sprites/lion/lion (17).gif",
    "./assets/sprites/lion/lion (18).gif",
    "./assets/sprites/lion/lion (19).gif",
    "./assets/sprites/lion/lion (20).gif",
    "./assets/sprites/lion/lion (21).gif",
    "./assets/sprites/lion/lion (22).gif",
    "./assets/sprites/lion/lion (23).gif",
    "./assets/sprites/lion/lion (24).gif",
    "./assets/sprites/lion/lion (25).gif",
    "./assets/sprites/lion/lion (26).gif",
    "./assets/sprites/lion/lion (27).gif",
    "./assets/sprites/lion/lion (28).gif",
    "./assets/sprites/lion/lion (29).gif",
    "./assets/sprites/lion/lion (30).gif",
    "./assets/sprites/lion/lion (31).gif",
    "./assets/sprites/lion/lion (32).gif",
    "./assets/sprites/lion/lion (33).gif",
    "./assets/sprites/lion/lion (34).gif",
    "./assets/sprites/lion/lion (35).gif",
    "./assets/sprites/lion/lion (36).gif",
    "./assets/sprites/lion/lion (37).gif",
    "./assets/sprites/lion/lion (38).gif",
    "./assets/sprites/lion/lion (39).gif",
    "./assets/sprites/lion/lion (40).gif",
    "./assets/sprites/lion/lion (41).gif",
    "./assets/sprites/lion/lion (42).gif",
    "./assets/sprites/lion/lion (43).gif",
    "./assets/sprites/lion/lion (44).gif",
    "./assets/sprites/lion/lion (45).gif",
    "./assets/sprites/lion/lion (46).gif",
    "./assets/sprites/lion/lion (47).gif",
    "./assets/sprites/lion/lion (48).gif",
    "./assets/sprites/lion/lion (49).gif",
    "./assets/sprites/lion/lion (50).gif",
    "./assets/sprites/lion/lion (51).gif",
    "./assets/sprites/lion/lion (52).gif",
    "./assets/sprites/lion/lion (53).gif",
    "./assets/sprites/lion/lion (54).gif",
    "./assets/sprites/lion/lion (55).gif",
    "./assets/sprites/lion/lion (56).gif",
    "./assets/sprites/lion/lion (57).gif",
    "./assets/sprites/lion/lion (58).gif",
    "./assets/sprites/lion/lion (59).gif",
    "./assets/sprites/lion/lion (60).gif",
    "./assets/sprites/lion/lion (61).gif"
  );
  GhostyAnimation = loadAnimation(
    "./assets/sprites/jellyfish/jellyfish (1).gif",
    "./assets/sprites/jellyfish/jellyfish (2).gif",
    "./assets/sprites/jellyfish/jellyfish (3).gif",
    "./assets/sprites/jellyfish/jellyfish (4).gif",
    "./assets/sprites/jellyfish/jellyfish (5).gif",
    "./assets/sprites/jellyfish/jellyfish (6).gif",
    "./assets/sprites/jellyfish/jellyfish (7).gif",
    "./assets/sprites/jellyfish/jellyfish (8).gif",
    "./assets/sprites/jellyfish/jellyfish (9).gif",
    "./assets/sprites/jellyfish/jellyfish (10).gif",
    "./assets/sprites/jellyfish/jellyfish (11).gif",
    "./assets/sprites/jellyfish/jellyfish (12).gif",
    "./assets/sprites/jellyfish/jellyfish (13).gif",
    "./assets/sprites/jellyfish/jellyfish (14).gif",
    "./assets/sprites/jellyfish/jellyfish (15).gif",
    "./assets/sprites/jellyfish/jellyfish (16).gif",
    "./assets/sprites/jellyfish/jellyfish (17).gif",
    "./assets/sprites/jellyfish/jellyfish (18).gif",
    "./assets/sprites/jellyfish/jellyfish (19).gif",
    "./assets/sprites/jellyfish/jellyfish (20).gif",
    "./assets/sprites/jellyfish/jellyfish (21).gif",
    "./assets/sprites/jellyfish/jellyfish (22).gif",
    "./assets/sprites/jellyfish/jellyfish (23).gif",
    "./assets/sprites/jellyfish/jellyfish (24).gif",
    "./assets/sprites/jellyfish/jellyfish (25).gif",
    "./assets/sprites/jellyfish/jellyfish (26).gif",
    "./assets/sprites/jellyfish/jellyfish (27).gif",
    "./assets/sprites/jellyfish/jellyfish (28).gif",
    "./assets/sprites/jellyfish/jellyfish (29).gif",
    "./assets/sprites/jellyfish/jellyfish (30).gif",
    "./assets/sprites/jellyfish/jellyfish (31).gif",
    "./assets/sprites/jellyfish/jellyfish (32).gif",
    "./assets/sprites/jellyfish/jellyfish (33).gif",
    "./assets/sprites/jellyfish/jellyfish (34).gif",
    "./assets/sprites/jellyfish/jellyfish (35).gif",
    "./assets/sprites/jellyfish/jellyfish (36).gif",
    "./assets/sprites/jellyfish/jellyfish (37).gif",
    "./assets/sprites/jellyfish/jellyfish (38).gif",
    "./assets/sprites/jellyfish/jellyfish (39).gif",
    "./assets/sprites/jellyfish/jellyfish (40).gif",
    "./assets/sprites/jellyfish/jellyfish (41).gif",
    "./assets/sprites/jellyfish/jellyfish (42).gif",
    "./assets/sprites/jellyfish/jellyfish (43).gif",
    "./assets/sprites/jellyfish/jellyfish (44).gif",
    "./assets/sprites/jellyfish/jellyfish (45).gif",
    "./assets/sprites/jellyfish/jellyfish (46).gif",
    "./assets/sprites/jellyfish/jellyfish (47).gif",
    "./assets/sprites/jellyfish/jellyfish (48).gif",
    "./assets/sprites/jellyfish/jellyfish (49).gif",
    "./assets/sprites/jellyfish/jellyfish (50).gif",
    "./assets/sprites/jellyfish/jellyfish (51).gif",
    "./assets/sprites/jellyfish/jellyfish (52).gif",
    "./assets/sprites/jellyfish/jellyfish (53).gif",
    "./assets/sprites/jellyfish/jellyfish (54).gif",
    "./assets/sprites/jellyfish/jellyfish (55).gif",
    "./assets/sprites/jellyfish/jellyfish (56).gif",
    "./assets/sprites/jellyfish/jellyfish (57).gif",
    "./assets/sprites/jellyfish/jellyfish (58).gif",
    "./assets/sprites/jellyfish/jellyfish (59).gif",
    "./assets/sprites/jellyfish/jellyfish (60).gif"
  );
  WhaleAnimation = loadAnimation(
    "./assets/sprites/whale/whale (1).gif",
    "./assets/sprites/whale/whale (2).gif",
    "./assets/sprites/whale/whale (3).gif",
    "./assets/sprites/whale/whale (4).gif",
    "./assets/sprites/whale/whale (5).gif",
    "./assets/sprites/whale/whale (6).gif",
    "./assets/sprites/whale/whale (7).gif",
    "./assets/sprites/whale/whale (8).gif",
    "./assets/sprites/whale/whale (9).gif",
    "./assets/sprites/whale/whale (10).gif",
    "./assets/sprites/whale/whale (11).gif",
    "./assets/sprites/whale/whale (12).gif",
    "./assets/sprites/whale/whale (13).gif",
    "./assets/sprites/whale/whale (14).gif",
    "./assets/sprites/whale/whale (15).gif",
    "./assets/sprites/whale/whale (16).gif",
    "./assets/sprites/whale/whale (17).gif",
    "./assets/sprites/whale/whale (18).gif",
    "./assets/sprites/whale/whale (19).gif",
    "./assets/sprites/whale/whale (20).gif",
    "./assets/sprites/whale/whale (21).gif",
    "./assets/sprites/whale/whale (22).gif",
    "./assets/sprites/whale/whale (23).gif",
    "./assets/sprites/whale/whale (24).gif",
    "./assets/sprites/whale/whale (25).gif",
    "./assets/sprites/whale/whale (26).gif",
    "./assets/sprites/whale/whale (27).gif",
    "./assets/sprites/whale/whale (28).gif",
    "./assets/sprites/whale/whale (29).gif",
    "./assets/sprites/whale/whale (30).gif",
    "./assets/sprites/whale/whale (31).gif",
    "./assets/sprites/whale/whale (32).gif",
    "./assets/sprites/whale/whale (33).gif",
    "./assets/sprites/whale/whale (34).gif",
    "./assets/sprites/whale/whale (35).gif",
    "./assets/sprites/whale/whale (36).gif",
    "./assets/sprites/whale/whale (37).gif",
    "./assets/sprites/whale/whale (38).gif",
    "./assets/sprites/whale/whale (39).gif",
    "./assets/sprites/whale/whale (40).gif",
    "./assets/sprites/whale/whale (41).gif",
    "./assets/sprites/whale/whale (42).gif",
    "./assets/sprites/whale/whale (43).gif",
    "./assets/sprites/whale/whale (44).gif",
    "./assets/sprites/whale/whale (45).gif",
    "./assets/sprites/whale/whale (46).gif",
    "./assets/sprites/whale/whale (47).gif",
    "./assets/sprites/whale/whale (48).gif",
    "./assets/sprites/whale/whale (49).gif",
    "./assets/sprites/whale/whale (50).gif",
    "./assets/sprites/whale/whale (51).gif",
    "./assets/sprites/whale/whale (52).gif",
    "./assets/sprites/whale/whale (53).gif",
    "./assets/sprites/whale/whale (54).gif",
    "./assets/sprites/whale/whale (55).gif",
    "./assets/sprites/whale/whale (56).gif",
    "./assets/sprites/whale/whale (57).gif",
    "./assets/sprites/whale/whale (58).gif",
    "./assets/sprites/whale/whale (59).gif",
    "./assets/sprites/whale/whale (60).gif",
    "./assets/sprites/whale/whale (61).gif",
    "./assets/sprites/whale/whale (62).gif",
    "./assets/sprites/whale/whale (63).gif",
    "./assets/sprites/whale/whale (64).gif",
    "./assets/sprites/whale/whale (65).gif",
    "./assets/sprites/whale/whale (66).gif",
    "./assets/sprites/whale/whale (67).gif",
    "./assets/sprites/whale/whale (68).gif",
    "./assets/sprites/whale/whale (69).gif",
    "./assets/sprites/whale/whale (70).gif",
    "./assets/sprites/whale/whale (71).gif",
    "./assets/sprites/whale/whale (72).gif",
    "./assets/sprites/whale/whale (73).gif",
    "./assets/sprites/whale/whale (74).gif",
    "./assets/sprites/whale/whale (75).gif",
    "./assets/sprites/whale/whale (76).gif",
    "./assets/sprites/whale/whale (77).gif",
    "./assets/sprites/whale/whale (78).gif",
    "./assets/sprites/whale/whale (79).gif",
    "./assets/sprites/whale/whale (80).gif",
    "./assets/sprites/whale/whale (81).gif",
    "./assets/sprites/whale/whale (82).gif",
    "./assets/sprites/whale/whale (83).gif",
    "./assets/sprites/whale/whale (84).gif",
    "./assets/sprites/whale/whale (85).gif",
    "./assets/sprites/whale/whale (86).gif",
    "./assets/sprites/whale/whale (87).gif",
    "./assets/sprites/whale/whale (88).gif",
    "./assets/sprites/whale/whale (89).gif",
    "./assets/sprites/whale/whale (90).gif",
    "./assets/sprites/whale/whale (91).gif",
    "./assets/sprites/whale/whale (92).gif",
    "./assets/sprites/whale/whale (93).gif",
    "./assets/sprites/whale/whale (94).gif",
    "./assets/sprites/whale/whale (95).gif",
    "./assets/sprites/whale/whale (96).gif",
    "./assets/sprites/whale/whale (97).gif",
    "./assets/sprites/whale/whale (98).gif",
    "./assets/sprites/whale/whale (99).gif",
    "./assets/sprites/whale/whale (100).gif",
    "./assets/sprites/whale/whale (101).gif",
    "./assets/sprites/whale/whale (102).gif",
    "./assets/sprites/whale/whale (103).gif",
    "./assets/sprites/whale/whale (104).gif",
    "./assets/sprites/whale/whale (105).gif",
    "./assets/sprites/whale/whale (106).gif",
    "./assets/sprites/whale/whale (107).gif",
    "./assets/sprites/whale/whale (108).gif",
    "./assets/sprites/whale/whale (109).gif",
    "./assets/sprites/whale/whale (110).gif",
    "./assets/sprites/whale/whale (111).gif",
    "./assets/sprites/whale/whale (112).gif",
    "./assets/sprites/whale/whale (113).gif",
    "./assets/sprites/whale/whale (114).gif",
    "./assets/sprites/whale/whale (115).gif",
    "./assets/sprites/whale/whale (116).gif",
    "./assets/sprites/whale/whale (117).gif",
    "./assets/sprites/whale/whale (118).gif",
    "./assets/sprites/whale/whale (119).gif",
    "./assets/sprites/whale/whale (120).gif",
    "./assets/sprites/whale/whale (121).gif",
    "./assets/sprites/whale/whale (122).gif",
    "./assets/sprites/whale/whale (123).gif",
    "./assets/sprites/whale/whale (124).gif",
    "./assets/sprites/whale/whale (125).gif",
    "./assets/sprites/whale/whale (126).gif",
    "./assets/sprites/whale/whale (127).gif",
    "./assets/sprites/whale/whale (128).gif",
    "./assets/sprites/whale/whale (129).gif",
    "./assets/sprites/whale/whale (130).gif",
    "./assets/sprites/whale/whale (131).gif",
    "./assets/sprites/whale/whale (132).gif"
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
    "./assets/sprites/chtullie/chtullie (1).gif",
    "./assets/sprites/chtullie/chtullie (2).gif",
    "./assets/sprites/chtullie/chtullie (3).gif",
    "./assets/sprites/chtullie/chtullie (4).gif",
    "./assets/sprites/chtullie/chtullie (5).gif",
    "./assets/sprites/chtullie/chtullie (6).gif",
    "./assets/sprites/chtullie/chtullie (7).gif",
    "./assets/sprites/chtullie/chtullie (8).gif",
    "./assets/sprites/chtullie/chtullie (9).gif",
    "./assets/sprites/chtullie/chtullie (10).gif",
    "./assets/sprites/chtullie/chtullie (11).gif",
    "./assets/sprites/chtullie/chtullie (12).gif",
    "./assets/sprites/chtullie/chtullie (13).gif",
    "./assets/sprites/chtullie/chtullie (14).gif",
    "./assets/sprites/chtullie/chtullie (15).gif",
    "./assets/sprites/chtullie/chtullie (16).gif",
    "./assets/sprites/chtullie/chtullie (17).gif",
    "./assets/sprites/chtullie/chtullie (18).gif",
    "./assets/sprites/chtullie/chtullie (19).gif",
    "./assets/sprites/chtullie/chtullie (20).gif",
    "./assets/sprites/chtullie/chtullie (21).gif",
    "./assets/sprites/chtullie/chtullie (22).gif",
    "./assets/sprites/chtullie/chtullie (23).gif",
    "./assets/sprites/chtullie/chtullie (24).gif",
    "./assets/sprites/chtullie/chtullie (25).gif",
    "./assets/sprites/chtullie/chtullie (26).gif",
    "./assets/sprites/chtullie/chtullie (27).gif",
    "./assets/sprites/chtullie/chtullie (28).gif",
    "./assets/sprites/chtullie/chtullie (29).gif",
    "./assets/sprites/chtullie/chtullie (30).gif",
    "./assets/sprites/chtullie/chtullie (31).gif",
    "./assets/sprites/chtullie/chtullie (32).gif",
    "./assets/sprites/chtullie/chtullie (33).gif",
    "./assets/sprites/chtullie/chtullie (34).gif",
    "./assets/sprites/chtullie/chtullie (35).gif",
    "./assets/sprites/chtullie/chtullie (36).gif",
    "./assets/sprites/chtullie/chtullie (37).gif",
    "./assets/sprites/chtullie/chtullie (38).gif",
    "./assets/sprites/chtullie/chtullie (39).gif",
    "./assets/sprites/chtullie/chtullie (40).gif"
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
}
function mousePressed() {
  if (paused && !gameOver) {
    loop();
    paused = !paused;
  } else {
    noLoop();
    paused = !paused;
  }
}
function getSeaCreature(value) {
  if (value == "chtululu") {
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
    enemies = [new Jinxy(value), new Fish(value)];
    return random(enemies);
  }
  if (value.length == 4) {
    return new Fish(value);
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
  canvas.parent("ocean");
  focus = null;
  textFont("Helvetica");
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
function handleField() {
  updateField();
  updateSecondField();
  if (frameCount % 60 === 0) {
    depth++;
    spawnProgression();
    spawnSpearo(0.99);
    spawnBurst(0.99);
    spawnGhostyBurst(0.99);
    //belowscore
    spawnWhale(100, 0.99);
    spawnDoubleTrouble(100, 0.99);
    spawnRandom(50, 0.99);
    //depth
    spawnChtullie(200, 0.99);

    if (score > 350) {
      totalScore += score + depth;
      score = 0;
      level++;
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
        score += field[i].text.length;
        kills++;
        field.splice(i, 1);
        focus = null;
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
function keyPressed() {
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
function findFocus(code, field, secondfield) {
  var char = String.fromCharCode(code).toLowerCase();

  for (var i = 0; i < field.length; i++) {
    if (field[i]) {
      if (field[i].text.startsWith(char)) {
        field[i].focused = true;
        return field[i];
      }
    }
  }

  for (var i = 0; i < secondfield.length; i++) {
    if (secondfield[i]) {
      if (secondfield[i].text.startsWith(char)) {
        secondfield[i].focused = true;
        return secondfield[i];
      }
    }
  }
  return null;
}
function drawLine() {
  if (!focus) return;
  stroke(1);
  line(90, guyDepth, focus.position.x, focus.position.y);
  textAlign(CENTER);
  textSize(100);
  text(focus.completedText, width / 2, height - 50);
}
function drawScore() {
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(`Click to pause`, 100, 30);
  text(`Level ${level} (${Math.round((score / 350) * 100)}%)`, width / 2, 30);
  text(`Depth ${depth}m`, 100, height / 2 + 145);
  text(`Catches ${kills}`, 100, height - 10);
}
function drawGuy() {
  standardPosition = height / 2;
  if (guyDepth < standardPosition) {
    guyDepth++;
  }
  animation(guy, 90, guyDepth);
}
function endGame() {
  gameOver = true;
  noLoop();
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(80);
  text("Game Over!", width / 2, height / 3);
  text(`Score ${totalScore + score}`, width / 2, height / 2);
  text(`Total catches ${kills}`, width / 2, (height / 3) * 2);
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
function spawnChtullie(chtullieDepth, chance) {
  if (depth > chtullieDepth && random() > chance) {
    field.push(getSeaCreature("chtululu"));
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

function spawnProgression() {
  let creature = getSeaCreature(WORDS.pop());
  if (creature.name) {
    secondfield.push(creature);
  } else {
    field.push(creature);
  }
}
