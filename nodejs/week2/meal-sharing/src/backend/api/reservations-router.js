const express = require('express');
const router = express.Router();

const reservations = require('./../data/reservations.json');

/* Respond with the json for the reservation with the corresponding id */
router.get('/:id', async(req,res)=>{
  try{
    const {id} = req.params
    const reservation = reservations.find((reservation) => reservation.id === Number(id))
    if(!reservation){
      res.status(404).json('Reservation Not Found')
    }
    return res.json(reservation)
  }
  catch(error){
    throw error;
  }
})

/* Respond with the json for all reservations*/
router.get('/', async (request, response) => {
  try {
    response.json(reservations);
    
  } catch (error) {
    throw error;
  }
});


module.exports = router;
