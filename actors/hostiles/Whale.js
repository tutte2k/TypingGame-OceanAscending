class Whale extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Whale.Animation, createVector(0, 0));
  }
  static loadAnimationFiles() {
    Whale.Animation = loadAnimation(...Whale.Sprites);
  }
  static Sprites = [
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
    "./assets/sprites/whale/whale (132).png",
  ];
}