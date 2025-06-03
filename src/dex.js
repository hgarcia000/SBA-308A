

export function getPokemon(value) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);

    return response;
}

export function getPokemonEntry(value) {
    if (!value.endsWith("n-z") && !value.endsWith("o-o") && !value.startsWith("tapu") && !value.endsWith("null") && !value.startsWith("mr") && value.lastIndexOf("-") !== -1) {
        if (!value.startsWith("iron") && !value.endsWith("sk") && !value.endsWith("il") && !value.endsWith("et") && !value.endsWith("ne") && !value.endsWith("ng") && !value.endsWith("ks") && !value.endsWith("oon")) {
            if (!value.endsWith("ke") && !value.endsWith("ire") && !value.endsWith("olt")) {
                if (!value.endsWith("u") && !value.endsWith("ao") && !value.endsWith("ien")) {
                    value = value.slice(0,value.indexOf("-"));
                }
            }
        }
    }
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${value}/`);
    
    return response;
}

export function getPokeList(number) {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);

    return response;
}