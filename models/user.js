const mongoose = require('mongoose');
const BrewTour = require('./brew')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  brewTour: [BrewTour.schema],
});



module.exports = mongoose.model('User', UserSchema);
