// Funcionalidad de modal
let div = document.getElementById('modalFondo');
let boton = document.getElementById('boton');
let botonEstilo = getComputedStyle(div);

function showHide(e){
  e.preventDefault();
  e.stopPropagation();
  if(botonEstilo.display == "none"){
    div.style.display = "block";
  } else if (div.style.display == "block"){
    div.style.display = "none";
  }
}

boton.addEventListener("click", showHide, false);

document.addEventListener("click", function(e){
  let clic = e.target;
  if(div.style.display == "block" && clic != div){
    div.style.display = "none";
  }
}, false);

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