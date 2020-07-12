/**
* @fileoverview Entry point into Sync app.
* @author tediMitiku <tbm42@cornell.edu>
*/
<<<<<<< HEAD
let express = require('express');
let session = require('express-session')
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login');

let app = express();
=======
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
  secret: process.env.COOKIE_KEY,
  saveUninitialized: true,
  resave: true,
}));
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: 'kjasf56sdafkhj457nsadfkj',
  resave: false,
  saveUninitialized: false
}))

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
<<<<<<< HEAD
app.get("/",(req, res) => res.json({
    text: "Welcome to Sync!"
}));

app.listen(3001, ()=>console.log("Server started at http://localhost:3001"));
=======
app.get("/",(req, res) => res.send('Sync API'));
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713

module.exports = app;
