/**
* @fileoverview Entry point into Sync app.
* @author tediMitiku <tbm42@cornell.edu>
*/
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login');

let app = express();

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
app.get("/",(req, res) => res.json({
    text: "Welcome to Sync!"
}));

app.listen(3001, ()=>console.log("Server started at http://localhost:3001"));

module.exports = app;
