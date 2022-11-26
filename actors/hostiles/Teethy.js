class Teethy extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Teethy.Animation, createVector(35, 0));
  }
  static loadAnimationFiles() {
    Teethy.Animation = loadAnimation(...Teethy.Sprites);
  }

  static Sprites = [
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
    "./assets/sprites/teethy/teethy (61).png",
  ];
}
