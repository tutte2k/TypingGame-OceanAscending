class LivingDead extends Item {
  static Animation = null;

  constructor(text) {
    super(text, LivingDead.Animation, createVector(0, -10));
    this.name = "LivingDead";
  }

  static loadAnimationFiles() {
    LivingDead.Animation = loadAnimation(...LivingDead.Sprites);
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      endGame(this);
    }
  }

  static Sprites = [
    "./assets/sprites/livingdead/livingdead (1).png",
    "./assets/sprites/livingdead/livingdead (2).png",
    "./assets/sprites/livingdead/livingdead (3).png",
    "./assets/sprites/livingdead/livingdead (4).png",
    "./assets/sprites/livingdead/livingdead (5).png",
    "./assets/sprites/livingdead/livingdead (6).png",
    "./assets/sprites/livingdead/livingdead (7).png",
    "./assets/sprites/livingdead/livingdead (8).png",
    "./assets/sprites/livingdead/livingdead (9).png",
    "./assets/sprites/livingdead/livingdead (10).png",
    "./assets/sprites/livingdead/livingdead (11).png",
    "./assets/sprites/livingdead/livingdead (12).png",
    "./assets/sprites/livingdead/livingdead (13).png",
    "./assets/sprites/livingdead/livingdead (14).png",
    "./assets/sprites/livingdead/livingdead (15).png",
    "./assets/sprites/livingdead/livingdead (16).png",
    "./assets/sprites/livingdead/livingdead (17).png",
    "./assets/sprites/livingdead/livingdead (18).png",
    "./assets/sprites/livingdead/livingdead (19).png",
    "./assets/sprites/livingdead/livingdead (20).png",
    "./assets/sprites/livingdead/livingdead (21).png",
    "./assets/sprites/livingdead/livingdead (22).png",
    "./assets/sprites/livingdead/livingdead (23).png",
    "./assets/sprites/livingdead/livingdead (24).png",
    "./assets/sprites/livingdead/livingdead (25).png",
    "./assets/sprites/livingdead/livingdead (26).png",
    "./assets/sprites/livingdead/livingdead (27).png",
    "./assets/sprites/livingdead/livingdead (28).png",
    "./assets/sprites/livingdead/livingdead (29).png",
    "./assets/sprites/livingdead/livingdead (30).png",
    "./assets/sprites/livingdead/livingdead (31).png",
    "./assets/sprites/livingdead/livingdead (32).png",
    "./assets/sprites/livingdead/livingdead (33).png",
    "./assets/sprites/livingdead/livingdead (34).png",
    "./assets/sprites/livingdead/livingdead (35).png",
    "./assets/sprites/livingdead/livingdead (36).png",
    "./assets/sprites/livingdead/livingdead (37).png",
    "./assets/sprites/livingdead/livingdead (38).png",
    "./assets/sprites/livingdead/livingdead (39).png",
    "./assets/sprites/livingdead/livingdead (40).png",
    "./assets/sprites/livingdead/livingdead (41).png",
    "./assets/sprites/livingdead/livingdead (42).png",
    "./assets/sprites/livingdead/livingdead (43).png",
    "./assets/sprites/livingdead/livingdead (44).png",
    "./assets/sprites/livingdead/livingdead (45).png",
    "./assets/sprites/livingdead/livingdead (46).png",
    "./assets/sprites/livingdead/livingdead (47).png",
    "./assets/sprites/livingdead/livingdead (48).png",
    "./assets/sprites/livingdead/livingdead (49).png",
    "./assets/sprites/livingdead/livingdead (50).png",
    "./assets/sprites/livingdead/livingdead (51).png",
  ];
}
