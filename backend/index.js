/**
* @fileoverview Entry point into Sync app.
* @author tediMitiku <tbm42@cornell.edu>
*/
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

//Setup and authenticate db connection
const db = require('./db/database');

db.authenticate()
    .then(()=>console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

//Setup Spotify Web API
const spotifyApi = require('./loaders/spotify');

//Setup Passport
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//Setup Passport Spotify
const passportSetup = require('./loaders/passport-setup');

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.get("/",(req, res) => res.send('Home Page'));

app.listen(3000, ()=>console.log("localhost:3000"));
module.exports = app;
