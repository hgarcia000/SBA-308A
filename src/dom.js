import { cardSpace } from "./app.js";


export function createPokeCard(imgSrc, pokeName, pokeTypes, desc) {
  const template = document.getElementById("cardTemplate");
  const clone = template.content.firstElementChild.cloneNode(true);

  const img = clone.querySelector("img");
  img.src = imgSrc;
  img.alt = pokeName;

  const title = clone.querySelector(".card-title");
  title.textContent = pokeName.charAt(0).toLocaleUpperCase() + pokeName.slice(1);

  const typesContainer = clone.querySelector(".pokeTypes");

  pokeTypes.forEach(element => {

    const typeEl = document.createElement("span");
    typeEl.classList.add("badge");
    typeEl.id = element.type.name;
    typeEl.textContent = element.type.name.charAt(0).toLocaleUpperCase() + element.type.name.slice(1);

    typesContainer.appendChild(typeEl);

  });

  const text = clone.querySelector(".card-text");
  text.textContent = desc;


  return clone;
}

export function clear() {
  while (cardSpace.firstChild) {
    cardSpace.removeChild(cardSpace.firstChild);
  }
}