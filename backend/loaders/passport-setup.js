/**
* @fileoverview Setting up authentication to Spotify using Passport.js.
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../db/models').User;
const Sequelize = require('sequelize');
const spotifyApi = require('./spotify');

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(obj, done) {
  User.findByPk(obj.id).then(user => {
      done(null, user);
  })
});

// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, expires_in
//   and spotify profile), and invoke a callback with a user object.
passport.use(
  new SpotifyStrategy(
    {
<<<<<<< HEAD
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URI
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      process.nextTick(async function() {
=======
      clientID: process.env.client_id,
      clientSecret: process.env.client_secret,
      callbackURL: 'http://localhost:8080/login/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      process.nextTick(async function() {
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.setRefreshToken(refreshToken);
>>>>>>> df6e367303332128a6f4f0e7b79ef023de9343a7
        User.findOrCreate({
            where: {
                spotifyId: profile.id,
                username: profile._json.display_name,
                email: profile.emails[0].value
            }
        }).then(([user, created]) => {
          if(created){
            console.log('User created.');
          } else {
            console.log('User already exists.');
          }
        }).catch(err => console.log(err));
        done(null, profile);
      });
    }
  )
);
