/*Segundo Proyecto
Utilizando la punk API  (https://punkapi.com/)
Crear página de presentación, un enlace que te lleve a todas las cervezas donde,
si eliges una te lleva a otra página con la descripción y en esa página de descripción, además,
podría haber un mapa con una ubicación aleatoria de donde procede la cerveza,
luego otro enlace, desde la página principal, para cervezas aleatorias*/

const params = new URLSearchParams(window.location.search);
const beerId = params.get('id')


const createDiv = function(element) {
        const { hops } = element.ingredients
        console.log(hops)
        const allHops = hops.map(function(hops) {
            return hops.name;
        }).join(",");
        console.log(allHops)
        return `<div class="beer-card-container">
    <img id="img-beer" src="${element.image_url ? element.image_url :"https://www.misbotellasdecerveza.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/e/cerveza_33_2.jpg" }" alt="otherBeer" />
    <h2 class="beer-name">Nombre de Cerveza: ${element.name}</h2>
    <p class="description-beer">${element.description}</p>
    <p class="ingredientes-beer">Ingredientes: ${allHops}</p>
  </div>`
    }
    //Fetch: Llamada a la api
const getBeer = (id) => {
    const cervezas = fetch(`https://api.punkapi.com/v2/beers/${id}`)
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

getBeer(beerId)

// 1. Initialize leaflet and center the city of Los Angeles
const map = L.map("mapid").setView([34.052235, -118.243683], 10);

// 2. Add Layer from mapbox
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2lyZ2V0dG8iLCJhIjoiY2pqeTN3Z3p0MnZ4eDNybWF6NjFyeTJybCJ9.EpIVsQVachGWPiHwCijVOg';

L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: MAPBOX_TOKEN,
    }
).addTo(map);