class Shotty extends Hostile {
  static Animation = null;

  constructor(text) {
    super(text, Shotty.Animation, createVector(-30, 0));
  }
  static loadAnimationFiles() {
    Shotty.Animation = loadAnimation(
      "../../assets/sprites/bulletsquid/sheet_shotty.png",
      { size: [100, 100], frames: 22 }
    );
    // Shotty.Animation = loadAnimation(...Shotty.Sprites);
  }

  // static Sprites = [
  //   "./assets/sprites/bulletsquid/bulletsquid (1).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (2).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (3).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (4).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (5).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (6).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (7).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (8).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (9).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (10).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (11).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (12).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (13).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (14).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (15).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (16).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (17).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (18).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (19).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (20).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (21).png",
  //   "./assets/sprites/bulletsquid/bulletsquid (22).png",
  // ];
}
