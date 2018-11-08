const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors           = require('cors');
const session        = require('express-session');

const brewController = require('./controllers/brewController');
const authController  = require('./controllers/authController');

require('./db/db');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use('/brews', brewController);
app.use('/auth', authController);
// merged data

app.listen(process.env.PORT || 9000, () => {
  console.log('Listening on Port 9000')
});
