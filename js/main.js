"use strict";
console.log("main.js present");

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
    for(keys in resolve.restaurants){
        restaurantList += `<h3>${resolve.restaurants[keys].restaurant}</h3><p><strong><em>Star Rating:</strong></em> ${resolve.restaurants[keys].my_rating}</p>`;
    }
    console.log("restaurantList: ", restaurantList); 
    fillRatingsDiv.innerHTML = restaurantList;
});
}

// ask around and see if other people are importing their data to firebase
// restaurantArray.push(resolve.restaurants[keys]); 
// then create another function that will order restaurantArray items by resolve.restaurants[keys].my_rating.
// check and input boostrap card classes


displayAll();