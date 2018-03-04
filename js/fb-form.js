"use strict";

console.log("fb-form.js is ready");

// REQUIRES
let restaurantData = require('./foodie-list');
let render = require('./render');
let select = require('./populateSelect');
let filter = require('./matchCityFilter');

// VARIABLES
var addNew = document.getElementById("addRestaurant");
let saveBtn = document.getElementById("save_btn");

// FUNCTIONS
function buildRestObj() {
    let restaurantObject = {
    city_id: $("#form--city_id").val(),
    date_visited: $("#form--date_visited").val(),
    my_rating: $("#form--my_rating").val(),
    restaurant: $("#form--restaurant").val(),
  };
  return restaurantObject;
}

function saveAdd(){
  console.log("save button clicked");
  let restaurantObject = buildRestObj();
    console.log("restaurantObject", restaurantObject);
    addRestaurant(restaurantObject)
    .then((restaurantID) => {
      console.log("what is the new ID?", restaurantID);
      render.displayAll();
    });
  }

function createForm(restaurants, restaurantID) {
    return new Promise(function (resolve, reject) {
      let restaurantInfo = {
        city_id: restaurants ? restaurants.city_id : "",
        date_visited: restaurants ? restaurants.date_visited : "",
        my_rating: restaurants ? restaurants.my_rating : "",
        restaurant: restaurants ? restaurants.restaurant : "",
        btnLabel: restaurants ? "save changes" : "save rating",
        btnId: restaurants ? "edit_btn_class" : "save_btn_class"
      },
      form =
        `<h3>Add a New Restaurant</h3>
        <input type="text" id="form--city_id" placeholder="City ID" value="${restaurantInfo.city_id}"></input>
        <input type="text" id="form--date_visited" placeholder="Date Visited" value="${restaurantInfo.date_visited}"></input>
        <input type="text" id="form--my_rating" placeholder="Please rate the restaurant from 1-5" value="${restaurantInfo.my_rating}"></input>
        <input type="text" id="form--restaurant" placeholder="Restaurant Name" value="${restaurantInfo.restaurant}"></input>
        <button id="save_btn" class="${restaurantInfo.btnId}">${restaurantInfo.btnLabel}</button>`;
      resolve(form);
    });
  }
  //if there's time, come back to this and add the select so user doesn't have to know the city_id

function addRestaurant(restaurantObject) {
    return $.ajax({
      url: `https://foodie-list-5b7c9.firebaseio.com/restaurants.json`,
      type: 'POST',
      data: JSON.stringify(restaurantObject),
      dataType: "json"
    }).done((restaurantID) => {
      return restaurantID;
    });
  }


// EVENT LISTENERS
// Show form for entering new review 
addNew.addEventListener("click", function(){
    console.log("clicked add review");
    var formDiv = document.getElementById("reviewForm");
    createForm()
    .then((form) => {
        formDiv.innerHTML = form;
    });
  });

// EXPORTS
module.exports = {
    buildRestObj,
    createForm, 
    addRestaurant,
    saveAdd
};