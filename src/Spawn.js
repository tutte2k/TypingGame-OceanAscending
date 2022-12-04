class Spawn {
  static Items() {
    if (random() > 0.99 && player.health < 3) {
      field.item.push(new Health(random(target.numbers)));
    }
    if (random() > 0.99 && player.health > 1) {
      field.item.push(new LivingDead(random(target.numbers)));
    }
    if (random() > 0.99) {
      field.item.push(new Bolt(random(target.numbers)));
    }
    if (random() > 0.99) {
      if (random() > 0.5) {
        field.item.push(new Sapphire());
      }
    }
  }
  static Progression() {
    if (random() < game.mode.spawn.progressionValue) {
      const indexOfLastWord = target.words.length - 1;
      const word = getNextWord(indexOfLastWord);
      const creature = getSeaCreature(word);
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
    const creature = getSeaCreature(word);
    if (creature.name) {
      field.neutral.push(creature);
    } else {
      field.hostile.push(creature);
    }
  }
  static Boss() {
    game.mode.bosses.forEach((boss) => {
      if (player.depth > boss.spawnDepth && random() > 0.99) {
        let creature = getSeaCreature(boss.value);
        field.hostile.push(creature);
      }
    });
  }
  static Random() {
    if (player.experience < 100 && random() > 0.99) {
      const indexOfLastWord = target.words.length - 1;
      const randomIndex = Math.round(random(0, indexOfLastWord));
      const word = getNextWord(randomIndex);
      const creature = getSeaCreature(word);
      field.hostile.push(creature);
    }
  }
  static Brute() {
    if (player.experience < 150 && random() > 0.99) {
      const indexOfBigWord = 0;
      const word = getNextWord(indexOfBigWord);
      const creature = getSeaCreature(word);
      field.hostile.push(creature);
    }
  }
  static Double() {
    if (player.experience < 25 && random() > 0.99) {
      for (let i = 0; i < 2; i++) {
        const indexOfSemiBigWord = Math.round(target.words.length / 3);
        const word = getNextWord(indexOfSemiBigWord);
        const creature = getSeaCreature(word);
        field.hostile.push(creature);
      }
    }
  }
  static Triple() {
    if (player.experience < 50 && random() > 0.99) {
      for (let i = 0; i < 3; i++) {
        const indexOfMediumWord = Math.round(target.words.length / 5);
        const word = getNextWord(indexOfMediumWord);
        const creature = getSeaCreature(word);
        field.hostile.push(creature);
      }
    }
  }
}
