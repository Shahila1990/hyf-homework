const { request, response } = require('express');
const express = require('express');
const app = express();

// import data here
const meals = require('./data/meals');
const reservation = require('./data/reservations');
const reviews = require('./data/reviews');

// this is where you will be adding .your routes
app.get('/', async (request, response) => {
  response.send('Meal Sharing Web App');
});

//add review
meals.forEach((meal, id) => {
  const review = reviews.filter((res) => res.mealId === meal.id);
  meal.reviews = review;
});
app.get('/meals', async (request, response) => {
  response.send(meals);
});

//cheapmeal
app.get('/cheap-meals', async (request, response) => {
  response.send(meals.filter((meal) => meal.price < 100));
});

//Largemeal
app.get('/large-meals', async (request, response) => {
  response.send(meals.filter((meal) => meal.maxNumberOfGuests > 5));
});

//random number generator
function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

//random meal
app.get('/meal', async (request, response) => {
  response.send(meals[getRandomNumber(meals.length)]);
});

//reservation
app.get('/reservations', async (request, response) => {
  response.send(reservation);
});

//random reservation
app.get('/reservation', async (request, response) => {
  response.send(reservation[getRandomNumber(reservation.length)]);
});

module.exports = app;
