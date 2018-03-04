"use strict";
console.log("city filter ready");
 
//REQUIRES
let getData = require("./foodie-list");
let citySelect = require("./populateSelect");
let renderDOM = require("./render");

//VARIABLES
let fillRatingsDiv = document.getElementById("ratingsDiv");
let select = document.getElementById("dropdown");
let selectID; 

//EVENT LISTENERS
select.addEventListener("change", changeSelection);

// FUNCTIONS
function changeSelection(event){
    var selectID = select.options[select.selectedIndex].id;
    console.log("you selected", selectID);
    // return selectID;
    getData.getRestaurants()
.then(function(resolve){
    var keys;
    var listInCity = "";
    // console.log("resolve", resolve);
    for(keys in resolve){
        if(selectID == resolve[keys].city_id){ 
        listInCity += `<h3>${resolve[keys].restaurant}</h3><p><strong><em>Star Rating:</strong></em> ${resolve[keys].my_rating}</p>`;
        }else if(selectID == "ViewAll"){
            renderDOM.displayAll();
        }else if(selectID == "default"){
            renderDOM.displayAll();
            //would have preferred for line 30 to be an or, but couldn't make it work
        }else{console.log("this key was not a match");
        }
    fillRatingsDiv.innerHTML = listInCity;
    }
});
}

// function restaurantsByCity(selectID){ 
//     getData.getRestaurants()
// .then(function(resolve){
//     var keys;
//     var listInCity = "";
//     console.log("resolve", resolve);
//     for(keys in resolve){
//     if(resolve[keys].city_id == selectID){ 
//     listInCity += `<h3>${resolve[keys].restaurant}</h3><p><strong><em>Star Rating:</strong></em> ${resolve[keys].my_rating}</p>`;
// }else{console.log("this key was not a match");
//     }
//     fillRatingsDiv.innerHTML = listInCity;
// }
// });
// }

// restaurantsByCity();

// EXPORTS
module.exports = {changeSelection};