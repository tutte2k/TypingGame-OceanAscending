class Croccy extends Neutral {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Croccy.Animation,
      createVector(0, 0),
      createVector(width / 9, height + 100),
      (score) => -3,
      (score) => 4
    );
  }
  static loadAnimationFiles() {
    Croccy.Animation = loadAnimation(...Croccy.Sprites);
  }

  static Sprites = [
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
    "./assets/sprites/croccy/croccy (121).png",
  ];
}