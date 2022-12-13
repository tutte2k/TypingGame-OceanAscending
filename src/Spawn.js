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
      const word = Spawn.getNextWord(indexOfLastWord);
      const creature = Spawn.getActor(word);
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
    const word = Spawn.getNextWord(indexOfLastWord);
    const creature = Spawn.getActor(word);
    if (creature.name) {
      field.neutral.push(creature);
    } else {
      field.hostile.push(creature);
    }
  }
  static Boss() {
    game.mode.bosses.forEach((boss) => {
      if (player.depth > boss.spawnDepth && random() > 0.99) {
        let creature = Spawn.getActor(boss.value);
        field.hostile.push(creature);
      }
    });
  }
  static Random() {
    if (player.experience < 100 && random() > 0.99) {
      const indexOfLastWord = target.words.length - 1;
      const randomIndex = Math.round(random(0, indexOfLastWord));
      const word = Spawn.getNextWord(randomIndex);
      const creature = Spawn.getActor(word);
      field.hostile.push(creature);
    }
  }
  static Brute() {
    if (player.experience < 150 && random() > 0.99) {
      const indexOfBigWord = 0;
      const word = Spawn.getNextWord(indexOfBigWord);
      const creature = Spawn.getActor(word);
      field.hostile.push(creature);
    }
  }
  static Double() {
    if (player.experience < 25 && random() > 0.99) {
      for (let i = 0; i < 2; i++) {
        const indexOfSemiBigWord = Math.round(target.words.length / 3);
        const word = Spawn.getNextWord(indexOfSemiBigWord);
        const creature = Spawn.getActor(word);
        field.hostile.push(creature);
      }
    }
  }
  static Triple() {
    if (player.experience < 50 && random() > 0.99) {
      for (let i = 0; i < 3; i++) {
        const indexOfMediumWord = Math.round(target.words.length / 5);
        const word = Spawn.getNextWord(indexOfMediumWord);
        const creature = Spawn.getActor(word);
        field.hostile.push(creature);
      }
    }
  }

  static getNextWord(startIndex) {
    let notAvailableChars = [];
    for (let i = 0; i < field.hostile.length; i++) {
      if (field.hostile[i]) {
        if (!notAvailableChars.includes(field.hostile[i].text.charAt(0))) {
          notAvailableChars.push(field.hostile[i].text.charAt(0));
        }
      }
    }
    for (let i = 0; i < field.neutral.length; i++) {
      if (field.neutral[i]) {
        if (!notAvailableChars.includes(field.neutral[i].text.charAt(0))) {
          notAvailableChars.push(field.neutral[i].text.charAt(0));
        }
      }
    }
    for (let i = startIndex; i >= 0; i--) {
      const wordSuggestion = target.words[i];
      if (wordSuggestion) {
        const firstLetterInWord = wordSuggestion.charAt(0);
        if (!notAvailableChars.includes(firstLetterInWord)) {
          return target.words.splice(i, 1)[0];
        } else {
          continue;
        }
      }
    }
    return target.words.pop();
  }
  static getAvailableValue(value) {
    let notAvailableChars = [];
    let chars = target.chars;

    for (let i = 0; i < field.hostile.length; i++) {
      if (field.hostile[i]) {
        if (!notAvailableChars.includes(field.hostile[i].text.charAt(0))) {
          notAvailableChars.push(field.hostile[i].text.charAt(0));
        }
      }
    }
    for (let i = 0; i < field.neutral.length; i++) {
      if (field.neutral[i]) {
        if (!notAvailableChars.includes(field.neutral[i].text.charAt(0))) {
          notAvailableChars.push(field.neutral[i].text.charAt(0));
        }
      }
    }
    if (!notAvailableChars.includes(value.charAt(0))) {
      return value;
    }
    for (let i = 0; i < notAvailableChars.length; i++) {
      chars.filter((x) => x != notAvailableChars[i]);
    }
    if (chars[0]) {
      return random(chars) + value;
    } else {
      return value;
    }
  }

  static getActor(value) {
    if (value) {
      if (value == "lulu" || value == "chtulu" || value == "chtululu") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Chtullie(checkedValue);
      }
      if (value == "chk" || value == "chkrac" || value == "chkracken") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Kraken(checkedValue);
      }
      if (value == "swo" || value == "sworde" || value == "swordeath") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Swordeath(checkedValue);
      }
      if (value == "jor" || value == "jormun" || value == "jormungandr") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Jormungandr(checkedValue);
      }
      if (value == "abe" || value == "abezeth" || value == "abezethibou") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Abezethibou(checkedValue);
      }
      if (value == "hui" || value == "huitzi" || value == "huitzilopochtli") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Huitzilopochtli(checkedValue);
      }
      if (value == "bez" || value == "bezelle" || value == "bezellebobba") {
        let checkedValue = Spawn.getAvailableValue(value);
        return new Bezzellebobba(checkedValue);
      }
      if (value.length == 1) {
        let enemies = [
          new Shotty(value),
          new Ghosty(value),
          new Puffer(value),
          new Inker(value),
          new Croccy(value),
          new Spearo(value),
        ];
        return random(enemies);
      }
      if (value.length == 2) {
        let enemies = [
          new Jinxy(value),
          new Puffer(value),
          new Inker(value),
          new Inky(value),
          new Croccy(value),
          new Ghosty(value),
        ];
        return random(enemies);
      }
      if (value.length == 3) {
        let enemies = [
          new Inky(value),
          new Jinxy(value),
          new Fish(value),
          new Teethy(value),
          new Ghosty(value),
        ];
        return random(enemies);
      }
      if (value.length == 4) {
        let enemies = [new Fish(value), new Teethy(value), new Inky(value)];
        return random(enemies);
      }
      if (value.length == 5 || value.length == 6) {
        let enemies = [new Leona(value), new Qocto(value)];
        return random(enemies);
      }
      if (value.length > 6) {
        return new Whale(value);
      }
    }
  }
}
