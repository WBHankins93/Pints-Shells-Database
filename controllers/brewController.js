const express = require('express');
const router = express.Router();

const Brewery = require('../models/brew');


// index route for breweries
router.get('/', async (req, res) => {

  try {
    const allBrewTours = await Brewery.find();
    console.log(allBrewTours, 'GET REQUEST')

    res.json({
        status: 200,
        data: allBrewTours
      });

  } catch (err) {
    res.send(err)
  }
});


// POST route to create Brew Tour
router.post('/', async (req, res) => {

  try {
    const createdBrewTours = await Brewery.create(req.body);
    console.log(createdBrewTours)
    res.json({
      status: 200,
      data: createdBrewTours
    })

  } catch (err) {
    res.send(err)
  }
})

//
router.get('/:id', async (req, res) => {
  try {

    const findBrewTour = await Brewery.findById(req.params.id)

    res.json({
      status: 200,
      data: findBrewTour
    })

  } catch(err) {
    res.send(err);
  }
})

router.put('/', async (req, res) => {
  try {

    const updateBrewTours = await Brewery.findOneAndUpdate(req.params.id, req.body)

    res.json({
      status: 200,
      data: updateBrewTours
    })

  } catch(err) {
    res.send(err);
  }
});


// Delete route will go here soon




module.exports = router;
