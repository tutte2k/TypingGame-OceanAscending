class Health extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Health.Animation, createVector(0, 6));
  }

  static loadAnimationFiles() {
    Health.Animation = loadAnimation(...Health.Sprites);
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      if (health < 3) {
        health++;
      }
    }
  }

  static Sprites = [
    "./assets/sprites/health/health (1).png",
    "./assets/sprites/health/health (2).png",
    "./assets/sprites/health/health (3).png",
    "./assets/sprites/health/health (4).png",
    "./assets/sprites/health/health (5).png",
    "./assets/sprites/health/health (6).png",
    "./assets/sprites/health/health (7).png",
    "./assets/sprites/health/health (8).png",
    "./assets/sprites/health/health (9).png",
    "./assets/sprites/health/health (10).png",
    "./assets/sprites/health/health (11).png",
    "./assets/sprites/health/health (12).png",
    "./assets/sprites/health/health (13).png",
    "./assets/sprites/health/health (14).png",
    "./assets/sprites/health/health (15).png",
    "./assets/sprites/health/health (16).png",
    "./assets/sprites/health/health (17).png",
    "./assets/sprites/health/health (18).png",
    "./assets/sprites/health/health (19).png",
    "./assets/sprites/health/health (20).png",
    "./assets/sprites/health/health (21).png",
    "./assets/sprites/health/health (22).png",
    "./assets/sprites/health/health (23).png",
    "./assets/sprites/health/health (24).png",
    "./assets/sprites/health/health (25).png",
    "./assets/sprites/health/health (26).png",
    "./assets/sprites/health/health (27).png",
    "./assets/sprites/health/health (28).png",
    "./assets/sprites/health/health (29).png",
    "./assets/sprites/health/health (30).png",
    "./assets/sprites/health/health (31).png",
  ];
}
