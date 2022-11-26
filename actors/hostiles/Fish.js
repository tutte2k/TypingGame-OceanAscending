class Fish extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Fish.Animation,
      createVector(-25, 20),
      Hostile.randomPosition()
    );
  }
  static loadAnimationFiles() {
    Fish.Animation = loadAnimation(...Fish.Sprites);
  }

  static Sprites = [
    "./assets/sprites/fish/fish (1).png",
    "./assets/sprites/fish/fish (2).png",
    "./assets/sprites/fish/fish (3).png",
    "./assets/sprites/fish/fish (4).png",
    "./assets/sprites/fish/fish (5).png",
    "./assets/sprites/fish/fish (6).png",
    "./assets/sprites/fish/fish (7).png",
    "./assets/sprites/fish/fish (8).png",
    "./assets/sprites/fish/fish (9).png",
    "./assets/sprites/fish/fish (10).png",
    "./assets/sprites/fish/fish (11).png",
    "./assets/sprites/fish/fish (12).png",
    "./assets/sprites/fish/fish (13).png",
    "./assets/sprites/fish/fish (14).png",
    "./assets/sprites/fish/fish (15).png",
    "./assets/sprites/fish/fish (16).png",
    "./assets/sprites/fish/fish (17).png",
    "./assets/sprites/fish/fish (18).png",
    "./assets/sprites/fish/fish (19).png",
    "./assets/sprites/fish/fish (20).png",
    "./assets/sprites/fish/fish (21).png",
    "./assets/sprites/fish/fish (22).png",
    "./assets/sprites/fish/fish (23).png",
    "./assets/sprites/fish/fish (24).png",
    "./assets/sprites/fish/fish (25).png",
    "./assets/sprites/fish/fish (26).png",
    "./assets/sprites/fish/fish (27).png",
    "./assets/sprites/fish/fish (28).png",
    "./assets/sprites/fish/fish (29).png",
    "./assets/sprites/fish/fish (30).png",
    "./assets/sprites/fish/fish (31).png",
    "./assets/sprites/fish/fish (32).png",
    "./assets/sprites/fish/fish (33).png",
    "./assets/sprites/fish/fish (34).png",
    "./assets/sprites/fish/fish (35).png",
    "./assets/sprites/fish/fish (36).png",
    "./assets/sprites/fish/fish (37).png",
    "./assets/sprites/fish/fish (38).png",
    "./assets/sprites/fish/fish (39).png",
    "./assets/sprites/fish/fish (40).png",
    "./assets/sprites/fish/fish (41).png",
    "./assets/sprites/fish/fish (42).png",
    "./assets/sprites/fish/fish (43).png",
    "./assets/sprites/fish/fish (44).png",
    "./assets/sprites/fish/fish (45).png",
    "./assets/sprites/fish/fish (46).png",
    "./assets/sprites/fish/fish (47).png",
    "./assets/sprites/fish/fish (48).png",
    "./assets/sprites/fish/fish (49).png",
    "./assets/sprites/fish/fish (50).png",
    "./assets/sprites/fish/fish (51).png",
    "./assets/sprites/fish/fish (52).png",
    "./assets/sprites/fish/fish (53).png",
    "./assets/sprites/fish/fish (54).png",
    "./assets/sprites/fish/fish (55).png",
    "./assets/sprites/fish/fish (56).png",
    "./assets/sprites/fish/fish (57).png",
    "./assets/sprites/fish/fish (58).png",
    "./assets/sprites/fish/fish (59).png",
    "./assets/sprites/fish/fish (60).png",
    "./assets/sprites/fish/fish (61).png",
  ];
}
