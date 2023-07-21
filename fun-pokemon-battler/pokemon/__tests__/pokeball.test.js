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

describe("Pokeball", () => {
  test("Pokeball has a pokemon property", () => {
    const testBall = new Pokeball();
    expect(testBall.pokemon).toBe(0);
  });
  describe("isEmpty", () => {
    test("returns true if there is no pokemon in the ball", () => {
      const testBall = new Pokeball();
      const output = testBall.isEmpty();
      expect(output).toBe(true);
    });
    test("returns false if there is a pokemon in it", () => {
      const testBall = new Pokeball();
      const testPokemon = new Bulbasaur("James");
      testBall.throw(testPokemon);
      const output = testBall.isEmpty();
      expect(output).toBe(false);
    });
  });
  describe("throw", () => {
    test("captures a pokemon if pokeball is empty", () => {
      const testBall = new Pokeball();
      const testPokemon = new Bulbasaur("Larry");
      testBall.throw(testPokemon);
      expect(testBall.pokemon.name).toBe("Larry");
    });
    test("does not capture a pokemon if pokeball is not empty", () => {
      const testBall = new Pokeball();
      const testPokemon = new Bulbasaur("Larry");
      testBall.throw(testPokemon);
      const testPokemon2 = new Charmander("Billy");
      testBall.throw(testPokemon2);
      expect(testBall.pokemon.name).toBe("Larry");
    });
    test("returns stored pokemon when invoked with no argument and there is a stored pokemon", () => {
      const testBall = new Pokeball();
      const testPokemon = new Rattata("Lewis");
      testBall.throw(testPokemon);
      const output = testBall.throw();
      expect(output).toBe(testPokemon);
    });
  });
  describe("contains", () => {
    test("returns pokemon name if pokeball is full", () => {
      const testBall = new Pokeball();
      const testPokemon = new Bulbasaur("Steph");
      testBall.throw(testPokemon);
      const output = testBall.contains();
      expect(output).toBe("Steph");
    });
    test('returns "empty ..." if pokeball is empty', () => {
      const testBall = new Pokeball();
      const output = testBall.contains();
      expect(output).toBe("empty...");
    });
  });
});
