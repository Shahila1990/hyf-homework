const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservation = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send('Meal Sharing Web App');
});


//respond with all meals with their review
function getMealWithReview(){
  return meals.map((meal)=>{
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    // if(reviews.length==0){

    // }
  })
}
app.get('/meals', async (request, response) => {
  getMealWithReview();
  response.send(meals);
});

//Respond with the json for all the meals (including it's reviews) that are cheap
function cheapMeal(){
  getMealWithReview();
  //console.log(mealsWithReview);
  return meals.filter((meal)=> meal.price <100)
}
app.get('/cheap-meals', async (request, response) => {
  response.send(cheapMeal());
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people
function largeMeal(){
  getMealWithReview();
  return meals.filter((meal) => meal.maxNumberOfGuests>5);

}
app.get('/large-meals', async (request, response) => {
  response.send(largeMeal());
});

//Respond with the json for a random meal (including it's reviews)
//random number generator
function getRandomNumber(length){
 return Math.floor(Math.random() * length);
}

function getRandomMeal(){
  getMealWithReview()
  const mealLength = meals.length
  let randomNumber = getRandomNumber(mealLength)
  return meals[randomNumber]
}
app.get('/meal', async (request, response) => {
  response.send(getRandomMeal());
});


//Respond with the json for all reservations
app.get('/reservations', async (request, response) => {
  response.send(reservation);
});

//Respond with the json for a random reservation
function getRandomReservation(){
  const randomResv = getRandomNumber(reservation.length)
  return reservation[randomResv]
}

app.get('/reservation', async (request, response) => {
  response.send(getRandomReservation());
});
module.exports = app;
