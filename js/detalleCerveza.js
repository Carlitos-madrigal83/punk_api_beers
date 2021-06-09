/*Segundo Proyecto
Utilizando la punk API  (https://punkapi.com/)
Crear página de presentación, un enlace que te lleve a todas las cervezas donde,
si eliges una te lleva a otra página con la descripción y en esa página de descripción, además,
podría haber un mapa con una ubicación aleatoria de donde procede la cerveza,
luego otro enlace, desde la página principal, para cervezas aleatorias*/

const createDiv = function(element) {
    return `<div class="beer-card-container">
    <img id="img-beer" src="${element.image_url ? element.image_url :"https://www.misbotellasdecerveza.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/e/cerveza_33_2.jpg" }" alt="otherBeer" />
    <h2 class="beer-name">${element.name}</h2>
    <p class="description-beer">${element.description}</p>
  </div>`
}

const newBtn = document.createElement('button');
newBtn.setAttribute('id', 'beer-button');
newBtn.innerHTML = "get-random-beer";
const body = document.getElementsByTagName('body')[0];
body.appendChild(newBtn)
const beersNode = document.getElementById("container");

//Fetch: Llamada a la api
const getBeer = () => {
    const cervezas = fetch('https://api.punkapi.com/v2/beers/random')
        .then(function(response) {
            return response.json()
        }).then(function(beer) {
            beer.forEach(element => {
                const node = document.getElementById("container")
                node.innerHTML += createDiv(element)
            });
            return beer
        })
    return cervezas;
}

const container = document.querySelector('#container')

function handleBeer() {
    container.innerHTML = ""
    getBeer()
}

const beerBtn = document.querySelector("#beer-button");
beerBtn.addEventListener('click', handleBeer)