class Chtullie extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Chtullie.Animation,
      createVector(12, 7),
      createVector(width, height / 2)
    );
  }
  static loadAnimationFiles() {
    Chtullie.Animation = loadAnimation(...Chtullie.Sprites);
  }
  static Sprites = [
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
    "./assets/sprites/chtullie/chtullie (40).png",
  ];
}
