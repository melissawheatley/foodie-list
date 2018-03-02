"use strict";

console.log("foodie-list.js has arrived");

function getRestaurants(){
    // console.log("getting all restaurants");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();
    loader.addEventListener('load', function(){
        var allRestaurants = JSON.parse(this.responseText);
        resolve(allRestaurants);
        // console.log(allRestaurants);
    });
    loader.addEventListener('error', function(){
        reject(console.log("There was a problem getting restaurants."));
    });
    loader.open("GET", `https://foodie-list-5b7c9.firebaseio.com/restaurants.json`);
    loader.send();
    });
}

function getCities(){
    // console.log("getting all restaurants");
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();
    loader.addEventListener('load', function(){
        var allCities = JSON.parse(this.responseText);
        resolve(allCities);
        console.log(allCities);
    });
    loader.addEventListener('error', function(){
        reject(console.log("There was a problem getting cities."));
    });
    loader.open("GET", `https://foodie-list-5b7c9.firebaseio.com/cities.json`);
    loader.send();
    });
}


// getRestaurants();
module.exports = {getRestaurants, getCities};