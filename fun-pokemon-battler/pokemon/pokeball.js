class Pokeball {
  constructor() {
    this.pokemon = 0;
  }
  throw(pokemon1) {
    if (pokemon1) {
      if (this.pokemon === 0) {
        this.pokemon = pokemon1;
        // console.log(`you caught ${this.pokemon.name}`);
      } else {
        // console.log("Pokeball already full");
      }
    }
    if (this.pokemon) {
      console.log(`GO ${this.pokemon.name}!!`);
      return this.pokemon;
    } else {
      // console.log("Pokeball is empty");
    }
  }
  isEmpty() {
    if (this.pokemon === 0) {
      return true;
    } else {
      return false;
    }
  }
  contains() {
    if (this.pokemon === 0) {
      return "empty...";
    }
    return this.pokemon.name;
  }
}

module.exports = { Pokeball };
