// Funcionalidad de slider
const carrusel = document.querySelector("[data-target='carrusel']");
const card = carrusel.querySelector("[data-target='marca']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const anchoCarrusel = carrusel.offsetWidth;
const estiloCard = card.currentStyle || window.getComputedStyle(card)
const margenDerechoCard = Number(estiloCard.marginRight.match(/\d+/g)[0]);

const cards = carrusel.querySelectorAll("[data-target='marca']").length;

let offset = 0;
const maxX = -((cards / 3) * anchoCarrusel + 
               (margenDerechoCard * (cards / 3)) - 
               anchoCarrusel - margenDerechoCard);

leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += anchoCarrusel + margenDerechoCard;
    carrusel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= anchoCarrusel + margenDerechoCard;
    carrusel.style.transform = `translateX(${offset}px)`;
  }
})