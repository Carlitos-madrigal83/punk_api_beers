fetch("https://api.punkapi.com/v2/beers/random ")
    .then(response => response.json())
    .then(randomBeer => console.log(randomBeer))