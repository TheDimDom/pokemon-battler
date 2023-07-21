const { Trainer } = require("../trainer");
const { Pokeball } = require("../pokeball");
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

describe("Trainer", () => {
  test("trainer is instance of Trainer class", () => {
    const testTrainer = new Trainer();
    expect(testTrainer instanceof Trainer).toBe(true);
  });
  test("Trainer should have belt, balls and name property", () => {
    const testTrainer = new Trainer(1, "John");
    expect(testTrainer.belt).toEqual([]);
    expect(testTrainer.balls).toBe(1);
    expect(testTrainer.name).toBe("John");
  });
  describe("catch", () => {
    test("catches a pokemon if there is an empty pokeball", () => {
      const testTrainer = new Trainer(1);
      const testPokemon = new Pokemon("Jeff", 100, 100);
      testTrainer.catch(testPokemon);
      expect(testTrainer.belt.length).toBe(1);
    });
    test("pokebelt stores no more than 6", () => {
      const testTrainer = new Trainer(7);
      const testPokemon1 = new Pokemon("Jeff", 100, 100);
      const testPokemon2 = new Pokemon("Jeffrey", 100, 100);
      const testPokemon3 = new Pokemon("Geoff", 100, 100);
      const testPokemon4 = new Pokemon("Bezos", 100, 100);
      const testPokemon5 = new Pokemon("Baezos", 100, 100);
      const testPokemon6 = new Pokemon("Bayzos", 100, 100);
      const testPokemon7 = new Pokemon("Amazon", 100, 100);
      testTrainer.catch(testPokemon1);
      testTrainer.catch(testPokemon2);
      testTrainer.catch(testPokemon3);
      testTrainer.catch(testPokemon4);
      testTrainer.catch(testPokemon5);
      testTrainer.catch(testPokemon6);
      testTrainer.catch(testPokemon7);
      expect(testTrainer.belt.length).toBe(6);
    });
    test("catch fails if we have no balls", () => {
      const testTrainer = new Trainer();
      const testPokemon1 = new Pokemon("Jeff Bezos", 100, 100);
      testTrainer.catch(testPokemon1);
      expect(testTrainer.belt.length).toBe(0);
    });
    test("catch fails if we do not have enough balls", () => {
      const testTrainer = new Trainer(1);
      const testPokemon1 = new Pokemon("Jeff Bezos", 100, 100);
      const testPokemon2 = new Pokemon("Elon Musk", 100, 100);
      testTrainer.catch(testPokemon1);
      testTrainer.catch(testPokemon2);
      expect(testTrainer.belt.length).toBe(1);
    });
  });
  describe("getPokemon", () => {
    test("returns some pokemon when single Pokemon is in the belt", () => {
      const testTrainer = new Trainer(1);
      const testPokemon = new Pokemon("Jeff", 100, 100);
      testTrainer.catch(testPokemon);
      const name = testPokemon.name;
      const output = testTrainer.getPokemon(name);
      expect(output).toBe(testPokemon);
    });
    test("returns specific pokemon when multiple pokemon are in the belt", () => {
      const testTrainer = new Trainer(4);
      const testPokemon1 = new Pokemon("Jeff", 100, 100);
      const testPokemon2 = new Charmander("Jeffrey", 100, 100);
      const testPokemon3 = new Pokemon("Geoff", 100, 100);
      testTrainer.catch(testPokemon1);
      testTrainer.catch(testPokemon2);
      testTrainer.catch(testPokemon3);
      const name = testPokemon2.name;
      const output = testTrainer.getPokemon(name);
      expect(output).toBe(testPokemon2);
    });
  });
});
