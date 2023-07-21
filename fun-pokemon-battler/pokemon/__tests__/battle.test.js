const { Battle } = require("../battle");
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

describe("Battle", () => {
  describe("properties", () => {
    test("battle is an instance of Battle", () => {
      const testBattle = new Battle();
      expect(testBattle instanceof Battle).toBe(true);
    });
    test("properties include two trainers and two pokemon", () => {
      const testTrainer1 = new Trainer(3);
      const testTrainer2 = new Trainer();
      const testPoke1 = new Charmander("Jeff", 100, 100);
      const testPoke2 = new Rattata("Elon", 30, 30);
      const testBattle = new Battle(
        testTrainer1,
        testTrainer2,
        testPoke1.name,
        testPoke2.name
      );
      expect(testBattle.trainer1).toBe(testTrainer1);
      expect(testBattle.trainer2).toBe(testTrainer2);
      expect(testBattle.trainer1pokemonname).toBe("Jeff");
      expect(testBattle.trainer2pokemonname).toBe("Elon");
    });
    describe("fight", () => {
      test("attackdamage is removed from hitpoints for non-weak or super-effective damage", () => {
        const testTrainer1 = new Trainer(3);
        const testTrainer2 = new Trainer(2);
        const testPoke1 = new Rattata("Jeff", 100, 50);
        const testPoke2 = new Rattata("Elon", 130, 30);
        testTrainer1.catch(testPoke1);
        testTrainer2.catch(testPoke2);
        const testBattle = new Battle(
          testTrainer1,
          testTrainer2,
          "Jeff",
          "Elon"
        );
        testBattle.fight();
        expect(testPoke2.hitpoints).toBe(80);
      });
      test("extra attackdamage is removed from hitpoints if attack is super effective", () => {
        const testTrainer1 = new Trainer(3);
        const testTrainer2 = new Trainer(2);
        const testPoke1 = new Charmander("Jeff", 100, 40);
        const testPoke2 = new Bulbasaur("Elon", 130, 30);
        testTrainer1.catch(testPoke1);
        testTrainer2.catch(testPoke2);
        const testBattle = new Battle(
          testTrainer1,
          testTrainer2,
          "Jeff",
          "Elon"
        );
        testBattle.fight();
        expect(testPoke2.hitpoints).toBe(80);
      });
      test("less attackdamage is removed from hitpoints if attack is not very effective", () => {
        const testTrainer1 = new Trainer(3);
        const testTrainer2 = new Trainer(2);
        const testPoke1 = new Bulbasaur("Elon", 100, 40);
        const testPoke2 = new Charmander("Jeff", 130, 30);
        testTrainer1.catch(testPoke1);
        testTrainer2.catch(testPoke2);
        const testBattle = new Battle(
          testTrainer1,
          testTrainer2,
          "Elon",
          "Jeff"
        );
        testBattle.fight();
        expect(testPoke2.hitpoints).toBe(100);
      });
      test("win message is given when pokemon has fainted", () => {
        const testTrainer1 = new Trainer(3);
        const testTrainer2 = new Trainer(2);
        const testPoke1 = new Bulbasaur("Elon", 100, 180);
        const testPoke2 = new Charmander("Jeff", 130, 30);
        testTrainer1.catch(testPoke1);
        testTrainer2.catch(testPoke2);
        const testBattle = new Battle(
          testTrainer1,
          testTrainer2,
          "Elon",
          "Jeff"
        );
        const logSpy = jest.spyOn(console, "log");
        testBattle.fight();
        expect(logSpy).toHaveBeenCalledWith("Jeff has fainted!");
        expect(logSpy).toHaveBeenCalledWith("Elon has won the battle!");
      });
      test('fight() fails if either pokemon has fainted', ()=> {
        const testTrainer1 = new Trainer(3);
        const testTrainer2 = new Trainer(2);
        const testPoke1 = new Bulbasaur("Elon", 100, 180);
        const testPoke2 = new Charmander("Jeff", 130, 30);
        testTrainer1.catch(testPoke1);
        testTrainer2.catch(testPoke2);
        const testBattle = new Battle(
          testTrainer1,
          testTrainer2,
          "Elon",
          "Jeff"
        );
        testBattle.fight();
        const logSpy = jest.spyOn(console, "log");
        testBattle.fight();
        expect(logSpy).toHaveBeenCalledWith("This Pokemon has fainted! Choose another Pokemon!");
      })
      test('pokemon attack alternate', ()=> {
        const testTrainer1 = new Trainer(3);
        const testTrainer2 = new Trainer(2);
        const testPoke1 = new Rattata("Jeff", 100, 50);
        const testPoke2 = new Rattata("Elon", 130, 30);
        testTrainer1.catch(testPoke1);
        testTrainer2.catch(testPoke2);
        const testBattle = new Battle(
          testTrainer1,
          testTrainer2,
          "Jeff",
          "Elon"
        );
        testBattle.fight();
        testBattle.fight()
        expect(testPoke1.hitpoints).toBe(70)
      })
    });
  });
});
