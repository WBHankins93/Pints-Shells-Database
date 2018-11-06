const mongoose = require('mongoose');

const brewSchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  website_url: String,
  longitude: String,
  latitude: String
});


module.exports = mongoose.model('Brews', brewSchema)
