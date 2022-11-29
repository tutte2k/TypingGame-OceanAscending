class Bolt extends Item {
  static Animation = null;

  constructor(text) {
    super(text, Bolt.Animation, createVector(-10, 40));
  }
  static loadAnimationFiles() {
    Bolt.Animation = loadAnimation("../../assets/sprites/bolt/sheet_bolt.png", {
      size: [100, 100],
      frames: 91,
    });

    // Bolt.Animation = loadAnimation(...Bolt.Sprites);
  }

  erode(keyCode) {
    let matched = super.erode(keyCode);
    if (matched) {
      environmentfield.push(new BoltIcon());
      zapperAvailable = true;
    }
  }

  // static Sprites = [
  //   "./assets/sprites/bolt/bolt (1).png",
  //   "./assets/sprites/bolt/bolt (2).png",
  //   "./assets/sprites/bolt/bolt (3).png",
  //   "./assets/sprites/bolt/bolt (4).png",
  //   "./assets/sprites/bolt/bolt (5).png",
  //   "./assets/sprites/bolt/bolt (6).png",
  //   "./assets/sprites/bolt/bolt (7).png",
  //   "./assets/sprites/bolt/bolt (8).png",
  //   "./assets/sprites/bolt/bolt (9).png",
  //   "./assets/sprites/bolt/bolt (10).png",
  //   "./assets/sprites/bolt/bolt (11).png",
  //   "./assets/sprites/bolt/bolt (12).png",
  //   "./assets/sprites/bolt/bolt (13).png",
  //   "./assets/sprites/bolt/bolt (14).png",
  //   "./assets/sprites/bolt/bolt (15).png",
  //   "./assets/sprites/bolt/bolt (16).png",
  //   "./assets/sprites/bolt/bolt (17).png",
  //   "./assets/sprites/bolt/bolt (18).png",
  //   "./assets/sprites/bolt/bolt (19).png",
  //   "./assets/sprites/bolt/bolt (20).png",
  //   "./assets/sprites/bolt/bolt (21).png",
  //   "./assets/sprites/bolt/bolt (22).png",
  //   "./assets/sprites/bolt/bolt (23).png",
  //   "./assets/sprites/bolt/bolt (24).png",
  //   "./assets/sprites/bolt/bolt (25).png",
  //   "./assets/sprites/bolt/bolt (26).png",
  //   "./assets/sprites/bolt/bolt (27).png",
  //   "./assets/sprites/bolt/bolt (28).png",
  //   "./assets/sprites/bolt/bolt (29).png",
  //   "./assets/sprites/bolt/bolt (30).png",
  //   "./assets/sprites/bolt/bolt (31).png",
  //   "./assets/sprites/bolt/bolt (32).png",
  //   "./assets/sprites/bolt/bolt (33).png",
  //   "./assets/sprites/bolt/bolt (34).png",
  //   "./assets/sprites/bolt/bolt (35).png",
  //   "./assets/sprites/bolt/bolt (36).png",
  //   "./assets/sprites/bolt/bolt (37).png",
  //   "./assets/sprites/bolt/bolt (38).png",
  //   "./assets/sprites/bolt/bolt (39).png",
  //   "./assets/sprites/bolt/bolt (40).png",
  //   "./assets/sprites/bolt/bolt (41).png",
  //   "./assets/sprites/bolt/bolt (42).png",
  //   "./assets/sprites/bolt/bolt (43).png",
  //   "./assets/sprites/bolt/bolt (44).png",
  //   "./assets/sprites/bolt/bolt (45).png",
  //   "./assets/sprites/bolt/bolt (46).png",
  //   "./assets/sprites/bolt/bolt (47).png",
  //   "./assets/sprites/bolt/bolt (48).png",
  //   "./assets/sprites/bolt/bolt (49).png",
  //   "./assets/sprites/bolt/bolt (50).png",
  //   "./assets/sprites/bolt/bolt (51).png",
  //   "./assets/sprites/bolt/bolt (52).png",
  //   "./assets/sprites/bolt/bolt (53).png",
  //   "./assets/sprites/bolt/bolt (54).png",
  //   "./assets/sprites/bolt/bolt (55).png",
  //   "./assets/sprites/bolt/bolt (56).png",
  //   "./assets/sprites/bolt/bolt (57).png",
  //   "./assets/sprites/bolt/bolt (58).png",
  //   "./assets/sprites/bolt/bolt (59).png",
  //   "./assets/sprites/bolt/bolt (60).png",
  //   "./assets/sprites/bolt/bolt (61).png",
  //   "./assets/sprites/bolt/bolt (62).png",
  //   "./assets/sprites/bolt/bolt (63).png",
  //   "./assets/sprites/bolt/bolt (64).png",
  //   "./assets/sprites/bolt/bolt (65).png",
  //   "./assets/sprites/bolt/bolt (66).png",
  //   "./assets/sprites/bolt/bolt (67).png",
  //   "./assets/sprites/bolt/bolt (68).png",
  //   "./assets/sprites/bolt/bolt (69).png",
  //   "./assets/sprites/bolt/bolt (70).png",
  //   "./assets/sprites/bolt/bolt (71).png",
  //   "./assets/sprites/bolt/bolt (72).png",
  //   "./assets/sprites/bolt/bolt (73).png",
  //   "./assets/sprites/bolt/bolt (74).png",
  //   "./assets/sprites/bolt/bolt (75).png",
  //   "./assets/sprites/bolt/bolt (76).png",
  //   "./assets/sprites/bolt/bolt (77).png",
  //   "./assets/sprites/bolt/bolt (78).png",
  //   "./assets/sprites/bolt/bolt (79).png",
  //   "./assets/sprites/bolt/bolt (80).png",
  //   "./assets/sprites/bolt/bolt (81).png",
  //   "./assets/sprites/bolt/bolt (82).png",
  //   "./assets/sprites/bolt/bolt (83).png",
  //   "./assets/sprites/bolt/bolt (84).png",
  //   "./assets/sprites/bolt/bolt (85).png",
  //   "./assets/sprites/bolt/bolt (86).png",
  //   "./assets/sprites/bolt/bolt (87).png",
  //   "./assets/sprites/bolt/bolt (88).png",
  //   "./assets/sprites/bolt/bolt (89).png",
  //   "./assets/sprites/bolt/bolt (90).png",
  //   "./assets/sprites/bolt/bolt (91).png",
  // ];
}
