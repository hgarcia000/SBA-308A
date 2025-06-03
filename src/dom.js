import { cardSpace, pokeSelect } from "./app.js";

export function populateDropdown(entries) {
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
}


export function createPokeCard(imgSrc, pokeName, pokeGenus, pokeTypes, desc, height, weight) {
  const template = document.getElementById("cardTemplate");
  const clone = template.content.firstElementChild.cloneNode(true);

  const img = clone.querySelector("img");
  img.src = imgSrc;
  img.alt = pokeName;

  const title = clone.querySelector("h3.card-title");
  title.textContent = pokeName.charAt(0).toLocaleUpperCase() + pokeName.slice(1);

  const genus = clone.querySelector("h5.card-title");
  genus.textContent = pokeGenus;

  const typesContainer = clone.querySelector(".pokeTypes");

  pokeTypes.forEach(element => {

    const typeEl = document.createElement("span");
    typeEl.classList.add("badge");
    typeEl.id = element.type.name;
    typeEl.textContent = element.type.name.charAt(0).toLocaleUpperCase() + element.type.name.slice(1);

    typesContainer.appendChild(typeEl);

  });

  const text = clone.querySelector(".desc");
  text.textContent = desc;

  const heightEl = clone.querySelector(".height");
  heightEl.textContent = `Height: ${height / 10} m`;

  const weightEl = clone.querySelector(".weight");
  weightEl.textContent = `Weight: ${weight / 10} kg`

  cardSpace.appendChild(clone);

}

export function clear() {
  while (cardSpace.firstChild) {
    cardSpace.removeChild(cardSpace.firstChild);
  }
}

export function loadSpinner() {

    const spinner = document.querySelector(".loading");

    spinner.innerHTML = `<div class="spinner-border text-primary" style="width: 10rem; height: 10rem;" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;

    setTimeout(() => {
        spinner.removeChild(spinner.firstChild)
    }, 200);

}