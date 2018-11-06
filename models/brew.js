const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  website_url: String,
  longitude: String,
  latitude: String
})

module.exports = mongoose.model('Brewery', brewerySchema)
