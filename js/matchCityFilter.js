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
let hometownDiv = document.getElementById("hometown");


//EVENT LISTENERS
select.addEventListener("change", changeSelection);

// FUNCTIONS
function changeSelection(event){
    var selectID = select.options[select.selectedIndex].id;
    // console.log("you selected", selectID);
    getData.getRestaurants()
.then((resolve) => {
    var keys;
    var listInCity = "";
    // console.log("resolve", resolve);
    for(keys in resolve){
        if(selectID == resolve[keys].city_id){
        resolve.sort(function(a,b){
            return a.my_rating - b.my_rating;
        });
        resolve.reverse();
        //figure out a way to refactor the sort/reverse to be called over again in different functions/modules
        listInCity += `<h3>${resolve[keys].restaurant}</h3><p><strong><em>Star Rating:</strong></em> ${resolve[keys].my_rating}</p>`;
        }else if(selectID == "ViewAll"){
            renderDOM.displayAll();
        }else if(selectID == "default"){
            renderDOM.displayAll();
            //would have preferred for line 30 to be an or, but couldn't make it work
        // }else{console.log("this key was not a match");
        }
    fillRatingsDiv.innerHTML = listInCity;
    }
})
.then(() => {
    if(selectID == 7){
        hometownDiv.innerHTML = `<p class="green"> <img src="https://useiconic.com/open-iconic/svg/home.svg" alt="home" width="10px" height="10px"> This is your hometown!</p>`;
    }else{
        console.log("this is not your hometown");
    }
});
}


// EXPORTS
module.exports = {changeSelection};