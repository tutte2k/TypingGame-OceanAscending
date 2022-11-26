class Puffer extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Puffer.Animation, createVector(5, 40));
  }
  static loadAnimationFiles() {
    Puffer.Animation = loadAnimation(...Puffer.Sprites);
  }

  static Sprites = [
    "./assets/sprites/puffer/puffer (1).png",
    "./assets/sprites/puffer/puffer (2).png",
    "./assets/sprites/puffer/puffer (3).png",
    "./assets/sprites/puffer/puffer (4).png",
    "./assets/sprites/puffer/puffer (5).png",
    "./assets/sprites/puffer/puffer (6).png",
    "./assets/sprites/puffer/puffer (7).png",
    "./assets/sprites/puffer/puffer (8).png",
    "./assets/sprites/puffer/puffer (9).png",
    "./assets/sprites/puffer/puffer (10).png",
    "./assets/sprites/puffer/puffer (11).png",
    "./assets/sprites/puffer/puffer (12).png",
    "./assets/sprites/puffer/puffer (13).png",
    "./assets/sprites/puffer/puffer (14).png",
    "./assets/sprites/puffer/puffer (15).png",
    "./assets/sprites/puffer/puffer (16).png",
    "./assets/sprites/puffer/puffer (17).png",
    "./assets/sprites/puffer/puffer (18).png",
    "./assets/sprites/puffer/puffer (19).png",
    "./assets/sprites/puffer/puffer (20).png",
    "./assets/sprites/puffer/puffer (21).png",
    "./assets/sprites/puffer/puffer (22).png",
    "./assets/sprites/puffer/puffer (23).png",
    "./assets/sprites/puffer/puffer (24).png",
    "./assets/sprites/puffer/puffer (25).png",
    "./assets/sprites/puffer/puffer (26).png",
    "./assets/sprites/puffer/puffer (27).png",
    "./assets/sprites/puffer/puffer (28).png",
    "./assets/sprites/puffer/puffer (29).png",
    "./assets/sprites/puffer/puffer (30).png",
    "./assets/sprites/puffer/puffer (31).png",
    "./assets/sprites/puffer/puffer (32).png",
    "./assets/sprites/puffer/puffer (33).png",
    "./assets/sprites/puffer/puffer (34).png",
    "./assets/sprites/puffer/puffer (35).png",
    "./assets/sprites/puffer/puffer (36).png",
    "./assets/sprites/puffer/puffer (37).png",
    "./assets/sprites/puffer/puffer (38).png",
    "./assets/sprites/puffer/puffer (39).png",
    "./assets/sprites/puffer/puffer (40).png",
  ];
}
