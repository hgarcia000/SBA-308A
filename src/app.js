import { getPokeList, getPokemon, getPokemonEntry } from "./dex.js";
import { clear, createPokeCard, loadSpinner, populateDropdown } from "./dom.js";


export const pokeSelect = document.getElementById("floatingSelect");

export const cardSpace = document.querySelector(".pokeCard");

(async function initializeDropdown() {
    
    const response = await getPokeList(905);
    const entries = response.data.results;

    // console.log(entries);

    populateDropdown(entries);

})();

pokeSelect.addEventListener("change", async (e) => {
    if (e.target.value != "null") {

        clear();
        loadSpinner();

        const response = await getPokemon(e.target.value);
        const entry = await getPokemonEntry(e.target.value);
        // console.log(response.data.types);
        // console.log(response.data);
        // console.log(entry.data);
        // console.log(response.data.height / 10);
        // console.log(response.data.weight / 10);
        // console.log(entry.data.flavor_text_entries);

        const descriptions = entry.data.flavor_text_entries.filter((e) => {return e.language.name == "en"});

        setTimeout(() => {
            createPokeCard(response.data.sprites.front_default, response.data.name, entry.data.genera[7].genus, response.data.types, descriptions[descriptions.length - 1].flavor_text, response.data.height, response.data.weight);
        }, 200);
        

    }
});