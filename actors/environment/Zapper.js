class Zapper {
  static Animation = null;

  constructor(zapDepth) {
    this.position = createVector(width / 2, height / 2);
    this.intact = true;
    this.zapDepth = zapDepth;
  }
  draw() {
    animation(Zapper.Animation, this.position.x, this.position.y);
  }
  update() {
    if (depth > this.zapDepth + 1) {
      this.intact = false;
    }
  }
  erode(keyCode) {}

  static loadAnimationFiles() {
    Zapper.Animation = loadAnimation(...Zapper.Sprites);
  }

  static Sprites = [
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
    "./assets/sprites/zapper/zapper (91).png",
  ];
}
