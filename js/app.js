/*Segundo Proyecto
Utilizando la punk API  (https://punkapi.com/) 
Crear página de presentación, un enlace que te lleve a todas las cervezas donde, 
si eliges una te lleva a otra página con la descripción y en esa página de descripción, además, 
podría haber un mapa con una ubicación aleatoria de donde procede la cerveza, 
luego otro enlace, desde la página principal, para cervezas aleatorias*/

const createDiv = function(element) {
    return `<div class="otherBeer">
    <img id="random-beer" src="${element.image_url}" alt="otherBeer" />
    <h1 class="center">${element.name}</h1>
  </div>`
}


const beersNode = document.getElementById("beers");
//Fetch: Llamada a la api
console.log(beersNode)
fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then(response => response.json())

.then((beers) => {
        for (let i = 0; i < beers.length; i++) {
            const beer = beers[i];
            beersNode.innerHTML += createDiv(beer);
            console.log(beers);
        }

    }

);

//const element = countries[index];
//countriesNode.innerHTML += cardTemplate(element);