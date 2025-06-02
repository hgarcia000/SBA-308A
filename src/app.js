

export const pokeSelect = document.getElementById("floatingSelect");

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
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
        console.log(response.data);
    }
});