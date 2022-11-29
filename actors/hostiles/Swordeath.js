class Swordeath extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Swordeath.Animation,
      createVector(25, 75),
      createVector(width, height - 100),
      (score) => 7
    );
  }
  static loadAnimationFiles() {
    Swordeath.Animation = loadAnimation(...Swordeath.Sprites);
  }
  static Sprites = [
    "./assets/sprites/swordeath/swordeath (1).png",
    "./assets/sprites/swordeath/swordeath (2).png",
    "./assets/sprites/swordeath/swordeath (3).png",
    "./assets/sprites/swordeath/swordeath (4).png",
    "./assets/sprites/swordeath/swordeath (5).png",
    "./assets/sprites/swordeath/swordeath (6).png",
    "./assets/sprites/swordeath/swordeath (7).png",
    "./assets/sprites/swordeath/swordeath (8).png",
    "./assets/sprites/swordeath/swordeath (9).png",
    "./assets/sprites/swordeath/swordeath (10).png",
    "./assets/sprites/swordeath/swordeath (11).png",
    "./assets/sprites/swordeath/swordeath (13).png",
    "./assets/sprites/swordeath/swordeath (14).png",
    "./assets/sprites/swordeath/swordeath (15).png",
    "./assets/sprites/swordeath/swordeath (16).png",
    "./assets/sprites/swordeath/swordeath (17).png",
    "./assets/sprites/swordeath/swordeath (18).png",
    "./assets/sprites/swordeath/swordeath (19).png",
    "./assets/sprites/swordeath/swordeath (20).png",
    "./assets/sprites/swordeath/swordeath (21).png",
    "./assets/sprites/swordeath/swordeath (22).png",
    "./assets/sprites/swordeath/swordeath (23).png",
    "./assets/sprites/swordeath/swordeath (24).png",
    "./assets/sprites/swordeath/swordeath (25).png",
    "./assets/sprites/swordeath/swordeath (26).png",
    "./assets/sprites/swordeath/swordeath (27).png",
    "./assets/sprites/swordeath/swordeath (28).png",
    "./assets/sprites/swordeath/swordeath (29).png",
    "./assets/sprites/swordeath/swordeath (30).png",
    "./assets/sprites/swordeath/swordeath (31).png",
    "./assets/sprites/swordeath/swordeath (32).png",
    "./assets/sprites/swordeath/swordeath (33).png",
    "./assets/sprites/swordeath/swordeath (34).png",
    "./assets/sprites/swordeath/swordeath (35).png",
    "./assets/sprites/swordeath/swordeath (36).png",
    "./assets/sprites/swordeath/swordeath (37).png",
    "./assets/sprites/swordeath/swordeath (38).png",
    "./assets/sprites/swordeath/swordeath (39).png",
    "./assets/sprites/swordeath/swordeath (40).png",
    "./assets/sprites/swordeath/swordeath (41).png",
    "./assets/sprites/swordeath/swordeath (42).png",
    "./assets/sprites/swordeath/swordeath (43).png",
    "./assets/sprites/swordeath/swordeath (44).png",
    "./assets/sprites/swordeath/swordeath (45).png",
    "./assets/sprites/swordeath/swordeath (46).png",
    "./assets/sprites/swordeath/swordeath (47).png",
    "./assets/sprites/swordeath/swordeath (48).png",
    "./assets/sprites/swordeath/swordeath (49).png",
    "./assets/sprites/swordeath/swordeath (50).png",
  ];
}
