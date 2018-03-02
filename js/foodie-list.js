"use strict";

console.log("foodie-list.js has arrived");

function getRestaurants(){
    console.log("getting all restaurants");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();
    loader.addEventListener('load', function(){
        var allRestaurants = JSON.parse(this.responseText);
        resolve(allRestaurants);
        console.log(allRestaurants);
    });
    loader.addEventListener('error', function(){
        reject(console.log("There was a problem loading restaurants."));
    });
    loader.open("GET", `./lib/restaurants.json`);
    loader.send();
    });
}

// getRestaurants();
module.exports = {getRestaurants};