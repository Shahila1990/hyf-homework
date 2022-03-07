const express = require('express');
const router = express.Router();

const meals = require('./../data/meals.json');

router.get('/', async (request, response) => {
  let sortedMeal = meals;

  if ('maxPrice' in request.query) {
    const maxPrice = Number(request.query.maxPrice);
    if(!maxPrice){
     return response.status(400).json('Invalid Number')
    }
    sortedMeal = sortedMeal.filter((meal) => meal.price <= maxPrice);
    if (JSON.stringify(sortedMeal) === '[]') {
      return response.json('No meals found');
    }
  }

  if ('title' in request.query) {
    const text = `${request.query.title}`.toLocaleLowerCase();
    sortedMeal = sortedMeal.filter((meal) => meal.title.toLocaleLowerCase().includes(text));
  }

  if ('createdAfter' in request.query) {
    const day = request.query.createdAfter;
    if(!Date.parse(day)){
       return response.status(400).json('Invalid Date');
    }
    sortedMeal = sortedMeal.filter((meal) => Date.parse(meal.createdAt) > Date.parse(day));
  }

  if ('limit' in request.query) {
    const numberOfMeals = parseInt(request.query.limit);
    if(!numberOfMeals){
      return response.status(400).json('Invalid input')
    }
    sortedMeal = sortedMeal.slice(0, numberOfMeals);
  }
  return response.json(sortedMeal);
});


/* Respond with the json for the meal with the corresponding id*/
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const meal = meals.find((meal) => meal.id === Number(id));
    if(!Number(id)){
      return res.status(400).json('Invalid Number')
    }
    if (!meal) {
      return res.json('Meal not found');
    }
    return res.status(200).json(meal);
  } catch (error) {
    throw error;
  }
});

/* Respond with the json for all the meals */
router.get('/', async (request, response) => {
  try {
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

//meals Parameters

module.exports = router;
