const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const brewController = require('./controllers/brewController');

require('./db/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/brew', brewController);


app.listen(process.env.PORT || 9000, () => {
  console.log('Listening on Port 9000')
});
