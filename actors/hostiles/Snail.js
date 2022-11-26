class Snail extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Snail.Animation,
      createVector(12, 7),
      createVector(width, height - 160),
      (score) => text.length
    );
  }
  static loadAnimationFiles() {
    Snail.Animation = loadAnimation(...Snail.Sprites);
  }

  static Sprites = [
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
    "./assets/sprites/snail/snail (46).png",
  ];
}
