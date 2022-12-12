class Spawn {
  static Items() {
    for (let i = 0; i < player.items.levels.health; i++) {
      if (random() > 0.99) {
        if (random() < (player.items.levels.health / 10) * 2) {
          field.item.push(new Health(random(target.numbers)));
        }
      }
    }
    for (let i = 0; i < player.items.levels.zapper; i++) {
      if (random() > 0.99) {
        if (random() < (player.items.levels.zapper / 10) * 2) {
          field.item.push(new Bolt(random(target.numbers)));
        }
      }
    }
    for (let i = 0; i < player.items.levels.timewarp; i++) {
      if (random() > 0.99) {
        if (random() < (player.items.levels.timewarp / 10) * 2) {
          field.item.push(new Hourglass(random(target.numbers)));
        }
      }
    }
    for (let i = 0; i < player.items.levels.shield; i++) {
      if (random() > 0.99) {
        if (random() < (player.items.levels.shield / 10) * 2) {
          field.item.push(new Shield(random(target.numbers)));
        }
      }
    }
    if (random() > 0.99) {
      if (random() < player.level / 10) {
        field.item.push(new Sapphire());
      }
    }
    if (random() > 0.99 && player.health > 0) {
      field.item.push(new LivingDead(random(target.numbers)));
    }
  }
  static Progression() {
    if (random() < game.mode.spawn.progressionValue) {
      const indexOfLastWord = target.words.length - 1;
      const word = getNextWord(indexOfLastWord);
      const creature = Actor.Get(word);
      if (creature.name) {
        field.neutral.push(creature);
      } else {
        field.hostile.push(creature);
      }
    }
    game.mode.spawn.events.forEach((spawnEvent) => spawnEvent());
    game.mode.spawn.boss();
  }
  static Single() {
    const indexOfLastWord = target.words.length - 1;
    const word = getNextWord(indexOfLastWord);
    const creature = Actor.Get(word);
    if (creature.name) {
      field.neutral.push(creature);
    } else {
      field.hostile.push(creature);
    }
  }
  static Boss() {
    game.mode.bosses.forEach((boss) => {
      if (player.depth > boss.spawnDepth && random() > 0.99) {
        let creature = Actor.Get(boss.value);
        field.hostile.push(creature);
        field.environment.push(new Shake(player.depth));
      }
    });
  }
  static Random() {
    if (player.experience < 100 && random() > 0.99) {
      const indexOfLastWord = target.words.length - 1;
      const randomIndex = Math.round(random(0, indexOfLastWord));
      const word = getNextWord(randomIndex);
      const creature = Actor.Get(word);
      field.hostile.push(creature);
    }
  }
  static Brute() {
    if (player.experience < 150 && random() > 0.99) {
      const indexOfBigWord = 0;
      const word = getNextWord(indexOfBigWord);
      const creature = Actor.Get(word);
      field.hostile.push(creature);
    }
  }
  static Double() {
    if (player.experience < 25 && random() > 0.99) {
      for (let i = 0; i < 2; i++) {
        const indexOfSemiBigWord = Math.round(target.words.length / 3);
        const word = getNextWord(indexOfSemiBigWord);
        const creature = Actor.Get(word);
        field.hostile.push(creature);
      }
    }
  }
  static Triple() {
    if (player.experience < 50 && random() > 0.99) {
      for (let i = 0; i < 3; i++) {
        const indexOfMediumWord = Math.round(target.words.length / 5);
        const word = getNextWord(indexOfMediumWord);
        const creature = Actor.Get(word);
        field.hostile.push(creature);
      }
    }
  }
}
