class Jormungandr extends Hostile {
  static Animation = null;

  constructor(text) {
    super(
      text,
      Jormungandr.Animation,
      createVector(0, 85),
      createVector(width, height - 100)
    );
  }
  static loadAnimationFiles() {
    Jormungandr.Animation = loadAnimation(
      "./actors/hostiles/sheet_jormungandr.png",
      { size: [500, 500], frames: 50 }
    );

    // Jormungandr.Animation = loadAnimation(...Jormungandr.Sprites);
  }
  // static Sprites = [
  //   "./assets/sprites/jormungandr/jormungandr (1).png",
  //   "./assets/sprites/jormungandr/jormungandr (2).png",
  //   "./assets/sprites/jormungandr/jormungandr (3).png",
  //   "./assets/sprites/jormungandr/jormungandr (4).png",
  //   "./assets/sprites/jormungandr/jormungandr (5).png",
  //   "./assets/sprites/jormungandr/jormungandr (6).png",
  //   "./assets/sprites/jormungandr/jormungandr (7).png",
  //   "./assets/sprites/jormungandr/jormungandr (8).png",
  //   "./assets/sprites/jormungandr/jormungandr (9).png",
  //   "./assets/sprites/jormungandr/jormungandr (10).png",
  //   "./assets/sprites/jormungandr/jormungandr (11).png",
  //   "./assets/sprites/jormungandr/jormungandr (12).png",
  //   "./assets/sprites/jormungandr/jormungandr (13).png",
  //   "./assets/sprites/jormungandr/jormungandr (14).png",
  //   "./assets/sprites/jormungandr/jormungandr (15).png",
  //   "./assets/sprites/jormungandr/jormungandr (16).png",
  //   "./assets/sprites/jormungandr/jormungandr (17).png",
  //   "./assets/sprites/jormungandr/jormungandr (18).png",
  //   "./assets/sprites/jormungandr/jormungandr (19).png",
  //   "./assets/sprites/jormungandr/jormungandr (20).png",
  //   "./assets/sprites/jormungandr/jormungandr (21).png",
  //   "./assets/sprites/jormungandr/jormungandr (22).png",
  //   "./assets/sprites/jormungandr/jormungandr (23).png",
  //   "./assets/sprites/jormungandr/jormungandr (24).png",
  //   "./assets/sprites/jormungandr/jormungandr (25).png",
  //   "./assets/sprites/jormungandr/jormungandr (26).png",
  //   "./assets/sprites/jormungandr/jormungandr (27).png",
  //   "./assets/sprites/jormungandr/jormungandr (28).png",
  //   "./assets/sprites/jormungandr/jormungandr (29).png",
  //   "./assets/sprites/jormungandr/jormungandr (30).png",
  //   "./assets/sprites/jormungandr/jormungandr (31).png",
  //   "./assets/sprites/jormungandr/jormungandr (32).png",
  //   "./assets/sprites/jormungandr/jormungandr (33).png",
  //   "./assets/sprites/jormungandr/jormungandr (34).png",
  //   "./assets/sprites/jormungandr/jormungandr (35).png",
  //   "./assets/sprites/jormungandr/jormungandr (36).png",
  //   "./assets/sprites/jormungandr/jormungandr (37).png",
  //   "./assets/sprites/jormungandr/jormungandr (38).png",
  //   "./assets/sprites/jormungandr/jormungandr (39).png",
  //   "./assets/sprites/jormungandr/jormungandr (40).png",
  //   "./assets/sprites/jormungandr/jormungandr (41).png",
  //   "./assets/sprites/jormungandr/jormungandr (42).png",
  //   "./assets/sprites/jormungandr/jormungandr (43).png",
  //   "./assets/sprites/jormungandr/jormungandr (44).png",
  //   "./assets/sprites/jormungandr/jormungandr (45).png",
  //   "./assets/sprites/jormungandr/jormungandr (46).png",
  //   "./assets/sprites/jormungandr/jormungandr (47).png",
  //   "./assets/sprites/jormungandr/jormungandr (48).png",
  //   "./assets/sprites/jormungandr/jormungandr (49).png",
  //   "./assets/sprites/jormungandr/jormungandr (50).png",
  // ];
}
