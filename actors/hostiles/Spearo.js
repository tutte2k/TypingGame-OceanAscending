class Spearo extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Spearo.Animation,
      createVector(-50, -50),
      createVector(width / 2 - 400, height),
      (score) => 1,
      (score) => 1
    );
  }
  static loadAnimationFiles() {
    Spearo.Animation = loadAnimation(...Spearo.Sprites);
  }
  static Sprites = [
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
    "./assets/sprites/spearo/spearo (60).png",
  ];
}