const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const brewController = require('./controllers/brewController');
const cors           = require('cors');

require('./db/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use('/brews', brewController);


app.listen(process.env.PORT || 9000, () => {
  console.log('Listening on Port 9000')
});
