class Battle {
    constructor(trainer1,trainer2,trainer1pokemonname,trainer2pokemonname) {
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.trainer1pokemonname = trainer1pokemonname
        this.trainer2pokemonname = trainer2pokemonname
        this.turn = 0
    }
    fight(pokemon1,pokemon2) {
        if (this.turn === 0) {
            pokemon1 = this.trainer1.getPokemon(this.trainer1pokemonname)
            pokemon2 = this.trainer2.getPokemon(this.trainer2pokemonname)
            this.turn++
        } else {
            pokemon1 = this.trainer2.getPokemon(this.trainer2pokemonname)
            pokemon2 = this.trainer1.getPokemon(this.trainer1pokemonname)
            this.turn--
        }
        if(pokemon1.hitpoints > 0 && pokemon2.hitpoints > 0) {
        let hit = pokemon1.useMove()
            if(pokemon1.isEffectiveAgainst(pokemon2)) {
            hit *= 1.25
            console.log('It was super effective!')
        } else if (pokemon1.isWeakTo(pokemon2)) {
            hit *= 0.75
            console.log('It was not very effective!')
        }
        pokemon2.takeDamage(hit)
        console.log(pokemon2.hitpoints)
        if (pokemon2.hasFainted()) {
            console.log(`${pokemon2.name} has fainted!`)
            console.log(`${pokemon1.name} has won the battle!`)
        }
    } else {
        console.log('This Pokemon has fainted! Choose another Pokemon!')
    }
    }
}

module.exports = { Battle };
