const express = require('express');
const router = express.Router();

const reviews = require('./../data/reviews.json');

router.get('/:id', async(req,res)=>{
  try{
    const {id} = req.params
    const review = reviews.find((review)=> review.id===Number(id))
    if(!review){
      res.status(404).json('Review Not Found')
    }
    return res.json(review)
  }catch(error){
    throw error
  }
})

/* Respond with the json for all reviews*/ 
router.get('/', async (request, response) => {
  try {
    response.json(reviews)
  } catch (error) {
    throw error;
  }
});

module.exports = router;
