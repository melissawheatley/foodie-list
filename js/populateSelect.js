"use strict";
console.log("populating select...");

//REQUIRES
let restaurantData = require('./foodie-list');
let render = require('./render');

//VARIABLES
var dropdown = document.getElementById("dropdown");
var cityName = `<option selected>Choose a City</option>`;

//FUNCTION
function showCityNames(){
    restaurantData.getCities()
.then(function(resolve){
    var keys;
    for(keys in resolve){
        var cityVar = resolve[keys].city;
        cityName += `<option value="${cityVar}">${cityVar}</option>`;
        console.log("city ids: ", cityName);
    }
    dropdown.innerHTML = cityName;
});
}
showCityNames();

//EXPORTS
module.exports = {showCityNames};