var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

//Entry point

//Routes
var usersRouter = require('./routes/users');

//Connect to db
const db = require('./db/database');

db.authenticate()
    .then(()=>console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

//Setup Spotify Web API access
const spotifyApi = require('./loaders/spotify');

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  }
);

var app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get("/",(req, res) => res.send('Home Page'));

app.listen(3000, ()=>console.log("localhost:3000"));
module.exports = app;
