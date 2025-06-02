import { getPokeList, getPokemon, getPokemonEntry } from "./dex.js";
import { clear, createPokeCard, populateDropdown } from "./dom.js";


export const pokeSelect = document.getElementById("floatingSelect");

export const cardSpace = document.querySelector(".pokeCard");

(async function initializeDropdown() {
    
    const response = await getPokeList(251);
    const entries = response.data.results;

    console.log(entries);

    populateDropdown(entries);

})();

pokeSelect.addEventListener("change", async (e) => {
    if (e.target.value != "null") {

        clear();

        const response = await getPokemon(e.target.value);
        const entry = await getPokemonEntry(e.target.value);
        console.log(response.data.types);
        console.log(response.data);
        console.log(entry.data);

        createPokeCard(response.data.sprites.front_default, response.data.name, entry.data.genera[7].genus, response.data.types, entry.data.flavor_text_entries[14].flavor_text);

    }
});