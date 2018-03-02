"use strict";
console.log("render.js present");

//REQUIRE
let restaurantData = require('./foodie-list');

//VARIABLES
let fillRatingsDiv = document.getElementById("ratingsDiv");
let restaurantArray = [];
var restaurantList= "";


//FUNCTIONS
function displayAll(){
    restaurantData.getRestaurants()
.then(function(resolve){
    // console.log("preparing to display all restaurants");
    var keys;
    for(keys in resolve){
        console.log("keys", keys);
        restaurantList += `<h3>${resolve[keys].restaurant}</h3><p><strong><em>Star Rating:</strong></em> ${resolve[keys].my_rating}</p>`;
    }
    console.log("restaurantList: ", restaurantList); 
    fillRatingsDiv.innerHTML = restaurantList;
});
}

// restaurantArray.push(resolve.restaurants[keys]); 
// then create another function that will order restaurantArray items by resolve.restaurants[keys].my_rating.
// check and input boostrap card classes


displayAll();

module.exports = {displayAll};