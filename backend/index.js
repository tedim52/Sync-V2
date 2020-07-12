/**
* @fileoverview Entry point into Sync app.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config(); //secrets
const logger = require('morgan');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const app = express();

//Setup Cookie Session for persistent login
app.use(session({
  secret: "lsajf6fhj4k6jhnjsdjhg83j",
  saveUninitialized: true,
  resave: true,
}));

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
app.get("/",(req, res) => res.send('Sync API'));

app.listen(8080, ()=>console.log("localhost:8080"));
module.exports = app;
