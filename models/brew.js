const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
  name: String,
  state: String,
  street: String,
  city: String,
  phone: String,
  website_url: String,
  position: []
})

module.exports = mongoose.model('Brewery', brewerySchema)
