"use strict";
console.log("render.js present");

//REQUIRE
let restaurantData = require('./foodie-list');

//VARIABLES
let fillRatingsDiv = document.getElementById("ratingsDiv");
var restaurantList= "";


//FUNCTIONS
function displayAll(){
    restaurantData.getRestaurants()
.then(function(resolve){
    // console.log("preparing to display all restaurants");
    var keys;
    for(keys in resolve){
        // console.log("keys", keys);
        resolve.sort(function(a,b){
            return a.my_rating - b.my_rating;
        });
        resolve.reverse();
        restaurantList += `<h3>${resolve[keys].restaurant} — <em>${resolve[keys].city_id}</em></h3><p><strong><em>Star Rating:</strong></em> ${resolve[keys].my_rating}</p>`;
    }
    // console.log("restaurantList: ", restaurantList); 
    fillRatingsDiv.innerHTML = restaurantList;
});
}

displayAll();

module.exports = {displayAll};