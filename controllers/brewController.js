const express = require('express');
const router = express.Router();

const Brewery = require('../models/brews');


router.get('/', async (req, res) => {

  try {
    const allBrews = await Brewery.find();

    res.json({
        status: 200,
        data: allBrews
      });

  } catch (err) {
    res.send(err)
  }
});




module.exports = router;
