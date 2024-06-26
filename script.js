let will_pokemon = {
    pikachu: {
        species: 'mouse',
        height: 0.4,
        weight: 6,
        power: 'lightning'
    }
}

let jace_pokemon = {
    tepig: {
        species: 'pig',
        height: 0.6,
        weight: 12,
        power: 'fire'
    }
}

let power = jace_pokemon?.pikachu?.power

console.log(power)