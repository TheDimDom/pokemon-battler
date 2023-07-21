class Pokemon {
  constructor(name, hitpoints, attackDamage) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackDamage = attackDamage;
    this.move = "tackle";
  }
  takeDamage(number) {
    this.hitpoints -= number;
    if (this.hitpoints < 0) {
      this.hitpoints = 0;
    }
  }
  useMove() {
    console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitpoints === 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Fire extends Pokemon {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.type = "fire";
  }
  isEffectiveAgainst(pokemon2) {
    if (pokemon2.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(pokemon2) {
    if (pokemon2.type === "water") {
      return true;
    } else {
      return false;
    }
  }
}
class Water extends Pokemon {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.type = "water";
  }
  isEffectiveAgainst(pokemon2) {
    if (pokemon2.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(pokemon2) {
    if (pokemon2.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
}
class Grass extends Pokemon {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.type = "grass";
  }
  isEffectiveAgainst(pokemon2) {
    if (pokemon2.type === "water") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(pokemon2) {
    if (pokemon2.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
}
class Normal extends Pokemon {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.type = "normal";
  }
  isEffectiveAgainst(pokemon2) {
    return false;
  }
  isWeakTo(pokemon2) {
    return false;
  }
}

class Charmander extends Fire {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.move = "ember";
  }
}

class Squirtle extends Water {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.move = "water gun";
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitpoints, attackDamage) {
    super(name, hitpoints, attackDamage);
    this.move = "vine whip";
  }
}

class Rattata extends Normal {}

module.exports = {
  Pokemon,
  Fire,
  Water,
  Grass,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
};
