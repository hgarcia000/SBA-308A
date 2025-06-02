import { clear, createPokeCard } from "./dom.js";


const pokeSelect = document.getElementById("floatingSelect");

export const cardSpace = document.querySelector(".pokeCard");

(async function initializeDropdown() {
    
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    const entries = response.data.results;

    console.log(entries);

    let i = 1;

    entries.forEach(element => {
        let index = i;
        if (index < 10) {
            index = "00" + i;
        } else if (index < 100) {
            index = "0" + i;
        }

        const optionEl = document.createElement("option");
        optionEl.value = element.name;
        optionEl.textContent = index + " - " + element.name.charAt(0).toLocaleUpperCase() + element.name.slice(1);

        pokeSelect.appendChild(optionEl);

        i++;
    });
})();

pokeSelect.addEventListener("change", async (e) => {
    if (e.target.value) {

        clear();

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
        const entry = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${e.target.value}/`)
        console.log(response.data.types);
        console.log(response.data);
        console.log(entry.data);

        const cardEl = createPokeCard(response.data.sprites.front_default, response.data.name, response.data.types, entry.data.flavor_text_entries[14].flavor_text);

        cardSpace.appendChild(cardEl);
    }
});