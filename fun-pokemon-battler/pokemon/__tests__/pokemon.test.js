const {
  Pokemon,
  Fire,
  Water,
  Grass,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../pokemon");

const { Pokeball } = require("../pokeball");

describe("Pokemon", () => {
  test("new object is an instance of Pokemon class", () => {
    const Golem = new Pokemon();
    expect(Golem instanceof Pokemon).toBe(true);
  });
  test("new Pokemon has name, hitpoints, attackDamage and move properties", () => {
    const Golem = new Pokemon("Golem", 245, 100);
    expect(Golem.name).toBe("Golem");
    expect(Golem.hitpoints).toBe(245);
    expect(Golem.attackDamage).toBe(100);
    expect(Golem.move).toBe("tackle");
  });
  test("takeDamage reduces hitpoints by number input", () => {
    const Golem = new Pokemon("Golem", 245, 100);
    Golem.takeDamage(10);
    expect(Golem.hitpoints).toBe(235);
  });
  test("useMove returns attack damage", () => {
    const Golem = new Pokemon("Golem", 245, 100);
    const output = Golem.useMove();
    expect(output).toBe(100);
  });
  test("hasFainted returns true if the hitpoints is zero", () => {
    const Golem = new Pokemon("Golem", 0, 100);
    const output = Golem.hasFainted();
    expect(output).toBe(true);
  });
  test("hasFainted returns false when hitpoints is greater than 0", () => {
    const Golem = new Pokemon("Golem", 245, 100);
    const output = Golem.hasFainted();
    expect(output).toBe(false);
  });
  test("pokemon are instances of subclasses and Pokemon class", () => {
    const Magmar = new Fire();
    const Wartortle = new Water();
    const Bulbasaur = new Grass();
    const Meowth = new Normal();
    expect(Magmar instanceof Fire).toBe(true);
    expect(Magmar instanceof Pokemon).toBe(true);
    expect(Wartortle instanceof Water).toBe(true);
    expect(Wartortle instanceof Pokemon).toBe(true);
    expect(Bulbasaur instanceof Grass).toBe(true);
    expect(Bulbasaur instanceof Pokemon).toBe(true);
    expect(Meowth instanceof Normal).toBe(true);
    expect(Meowth instanceof Pokemon).toBe(true);
  });
  test("pokemon in subclasses have correct type", () => {
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Meowth = new Normal("Meowth", 80, 45, "normal");
    expect(Magmar.type).toBe("fire");
    expect(Wartortle.type).toBe("water");
    expect(Bulbasaur.type).toBe("grass");
    expect(Meowth.type).toBe("normal");
  });
  test("isEffective returns true when grass type is used as argument on Fire class", () => {
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const outputMag = Magmar.isEffectiveAgainst(Bulbasaur);
    expect(outputMag).toBe(true);
  });
  test("isEffective returns false when not grass type is used as argument on Fire class", () => {
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const outputMag = Magmar.isEffectiveAgainst(Wartortle);
    expect(outputMag).toBe(false);
  });
  test("isEffective returns true when fire type is used as argument on Water class", () => {
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const outputWart = Wartortle.isEffectiveAgainst(Magmar);
    expect(outputWart).toBe(true);
  });
  test("isEffective returns false when not fire type is used as argument on Water class", () => {
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const outputWart = Wartortle.isEffectiveAgainst(Bulbasaur);
    expect(outputWart).toBe(false);
  });
  test("isEffective returns true when water type is used as argument on Grass class", () => {
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const outputBulb = Bulbasaur.isEffectiveAgainst(Wartortle);
    expect(outputBulb).toBe(true);
  });
  test("isEffective returns false when non water type is used as argument on Grass class", () => {
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const outputBulb = Bulbasaur.isEffectiveAgainst(Magmar);
    expect(outputBulb).toBe(false);
  });
  test("isEffective always returns false for a Normal class pokemon", () => {
    const Meowth = new Normal("Meowth", 80, 45, "normal");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const outputFire = Meowth.isEffectiveAgainst(Magmar);
    const outputWater = Meowth.isEffectiveAgainst(Wartortle);
    const outputGrass = Meowth.isEffectiveAgainst(Bulbasaur);
    expect(outputFire).toBe(false);
    expect(outputGrass).toBe(false);
    expect(outputWater).toBe(false);
  });
  test("isWeakTo returns true when water type used against Fire class", () => {
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const outputMag = Magmar.isWeakTo(Wartortle);
    expect(outputMag).toBe(true);
  });
  test("isWeakTo returns false when not water type used against Fire class", () => {
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const outputMag = Magmar.isWeakTo(Bulbasaur);
    expect(outputMag).toBe(false);
  });
  test("isWeakTo returns true when fire type used against Grass class", () => {
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const outputBulb = Bulbasaur.isWeakTo(Magmar);
    expect(outputBulb).toBe(true);
  });
  test("isWeakTo returns false when not fire type used against Grass class", () => {
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const outputBulb = Bulbasaur.isWeakTo(Wartortle);
    expect(outputBulb).toBe(false);
  });
  test("isWeakTo returns true when grass type used against Water class", () => {
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const outputWart = Wartortle.isWeakTo(Bulbasaur);
    expect(outputWart).toBe(true);
  });
  test("isWeakTo returns false when not grass type used against Water class", () => {
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const outputWart = Wartortle.isWeakTo(Magmar);
    expect(outputWart).toBe(false);
  });
  test("isWeakTo always returns false for Normal class", () => {
    const Meowth = new Normal("Meowth", 80, 45, "normal");
    const Bulbasaur = new Grass("Bulbasaur", 90, 49, "grass");
    const Wartortle = new Water("Wartortle", 118, 63, "water");
    const Magmar = new Fire("Magmar", 130, 95, "fire");
    const outputFire = Meowth.isWeakTo(Magmar);
    const outputWater = Meowth.isWeakTo(Wartortle);
    const outputGrass = Meowth.isWeakTo(Bulbasaur);
    expect(outputFire).toBe(false);
    expect(outputGrass).toBe(false);
    expect(outputWater).toBe(false);
  });
  test("Species are instances of class and parent", () => {
    const charmander = new Charmander();
    const squirtle = new Squirtle();
    const bulbasaur = new Bulbasaur();
    const rattata = new Rattata();
    expect(charmander instanceof Charmander).toBe(true);
    expect(charmander instanceof Fire).toBe(true);
    expect(squirtle instanceof Squirtle).toBe(true);
    expect(squirtle instanceof Water).toBe(true);
    expect(bulbasaur instanceof Bulbasaur).toBe(true);
    expect(bulbasaur instanceof Grass).toBe(true);
    expect(rattata instanceof Rattata).toBe(true);
    expect(rattata instanceof Normal).toBe(true);
  });
  test("charmander has a move of ember", () => {
    const charmander = new Charmander();
    expect(charmander.move).toBe("ember");
  });
  test("squirtle has a move of water gun", () => {
    const squirtle = new Squirtle();
    expect(squirtle.move).toBe("water gun");
  });
  test("bulbasaur has a move of vine whip", () => {
    const bulbasaur = new Bulbasaur();
    expect(bulbasaur.move).toBe("vine whip");
  });
  test("rattata has the move tackle", () => {
    const rattata = new Rattata();
    expect(rattata.move).toBe("tackle");
  });
});
