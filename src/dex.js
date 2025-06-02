

export function getPokemon(value) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);

    return response;
}

export function getPokemonEntry(value) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${value}/`);
    
    return response;
}

export function getPokeList(number) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);

    return response;
}