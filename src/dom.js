import { cardSpace } from "./app.js";


export function createPokeCard(imgSrc, pokeName, desc) {
  const template = document.getElementById("cardTemplate");
  const clone = template.content.firstElementChild.cloneNode(true);

  const img = clone.querySelector("img");
  img.src = imgSrc;
  img.alt = pokeName;

  const title = clone.querySelector(".card-title");
  title.textContent = pokeName.charAt(0).toLocaleUpperCase() + pokeName.slice(1);

  const text = clone.querySelector(".card-text");
  text.textContent = desc;


  return clone;
}

export function clear() {
  while (cardSpace.firstChild) {
    cardSpace.removeChild(cardSpace.firstChild);
  }
}