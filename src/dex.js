

export function getPokemon(value) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);

    return response;
}

export function getPokemonEntry(value) {
    if (!value.endsWith("n-z") && !value.endsWith("o-o") && !value.startsWith("tapu") && !value.endsWith("null") && value.lastIndexOf("-") !== -1) {
        value = value.slice(0,value.indexOf("-"));
    }
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${value}/`);
    
    return response;
}

export function getPokeList(number) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);

    return response;
}