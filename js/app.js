/*Segundo Proyecto
Utilizando la punk API  (https://punkapi.com/) 
Crear página de presentación, un enlace que te lleve a todas las cervezas donde, 
si eliges una te lleva a otra página con la descripción y en esa página de descripción, además, 
podría haber un mapa con una ubicación aleatoria de donde procede la cerveza, 
luego otro enlace, desde la página principal, para cervezas aleatorias*/

const createDiv = function(element) {
    return `<div class="beer-card-container">
    <img id="img-beer" src="${element.image_url}" alt="otherBeer" />
    <h2 class="beer-name">${element.name}</h2>
    <p class="description-beer">${element.description}</p>
    <a href="detalle-cerveza.html?id=${element.id}">More info</a>
  </div>`
}


const beersNode = document.getElementById("beers");
//Fetch: Llamada a la api
const cervezas = fetch("https://api.punkapi.com/v2/beers")
    .then(function(response) {
        return response.json()
    }).then(function(beer) {
        beer.forEach(element => {
            console.log(element)
            const node = document.getElementById("beers")
            node.innerHTML += createDiv(element)
        });
        return beer
    })