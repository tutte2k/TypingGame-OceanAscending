class Jinxy extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Jinxy.Animation, createVector(-35, -10));
  }
  static loadAnimationFiles() {
    Jinxy.Animation = loadAnimation(...Jinxy.Sprites);
  }

  static Sprites = [
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
    "./assets/sprites/jinxy/jinxy (38).png",
  ];
}
