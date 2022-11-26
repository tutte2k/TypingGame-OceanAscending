class Qocto extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Qocto.Animation, createVector(10, 0));
  }
  static loadAnimationFiles() {
    Qocto.Animation = loadAnimation(...Qocto.Sprites);
  }

  static Sprites = [
    "./assets/sprites/octo/octo (1).png",
    "./assets/sprites/octo/octo (2).png",
    "./assets/sprites/octo/octo (3).png",
    "./assets/sprites/octo/octo (4).png",
    "./assets/sprites/octo/octo (5).png",
    "./assets/sprites/octo/octo (6).png",
    "./assets/sprites/octo/octo (7).png",
    "./assets/sprites/octo/octo (8).png",
    "./assets/sprites/octo/octo (9).png",
    "./assets/sprites/octo/octo (10).png",
    "./assets/sprites/octo/octo (11).png",
    "./assets/sprites/octo/octo (12).png",
    "./assets/sprites/octo/octo (13).png",
    "./assets/sprites/octo/octo (14).png",
    "./assets/sprites/octo/octo (15).png",
    "./assets/sprites/octo/octo (16).png",
    "./assets/sprites/octo/octo (17).png",
    "./assets/sprites/octo/octo (18).png",
    "./assets/sprites/octo/octo (19).png",
    "./assets/sprites/octo/octo (20).png",
    "./assets/sprites/octo/octo (21).png",
    "./assets/sprites/octo/octo (22).png",
    "./assets/sprites/octo/octo (23).png",
    "./assets/sprites/octo/octo (24).png",
    "./assets/sprites/octo/octo (25).png",
    "./assets/sprites/octo/octo (26).png",
    "./assets/sprites/octo/octo (27).png",
    "./assets/sprites/octo/octo (28).png",
    "./assets/sprites/octo/octo (29).png",
    "./assets/sprites/octo/octo (30).png",
  ];
}
