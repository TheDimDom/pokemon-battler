const { Pokeball } = require("../pokemon/pokeball");

class Trainer {
  constructor(balls, name) {
    this.belt = [];
    this.balls = balls;
    this.name = name;
  }
  catch(pokemonToAdd) {
    if (this.belt.length === 6) {
      console.log("Belt full!");
    } else if (this.belt.length < 6 && this.balls) {
      const greatBall = new Pokeball();
      greatBall.throw(pokemonToAdd);
      this.belt.push(greatBall);
      this.balls--;
    } else {
      console.log("You have no balls!");
    }
  }
  getPokemon(pokemonName) {
    const filteredPoke = this.belt.filter((item) => {
      if (item.contains() === pokemonName) {
        return true;
      }
    });
    return filteredPoke[0].throw();
  }
}

module.exports = { Trainer };
