/**
* @fileoverview Setting up authentication to Spotify using Passport.js.
* @author tediMitiku <tbm42@cornell.edu>
*/
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../db/models').User;
const Sequelize = require('sequelize');
const spotifyApi = require('./spotify');

// Passport session setup for persistent login
passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.findByPk(id).then(user => {
      done(null, user);
  });
});

//Allow permanent Spotify API data retrieval through refresh token
var tokenExpirationEpoch;
var expireTime;
var numberOfTimesUpdated = 0;

//Generates new Spotify API access token upon expiration
setInterval(()=> {
  //If a refresh token exists, start tracking it
  if(spotifyApi.getAccessToken() != null) {
    //Every 20 minutes, print message
    console.log(
      'Time left: ' +
        Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
        ' seconds left!'
    );
    numberOfTimesUpdated++;

    // Times up, refresh the token and stop printing
    if (numberOfTimesUpdated > 2) {
      numberOfTimesUpdated = 0;
      clearInterval(this);

      // Refresh token and print the new time to expiration
      spotifyApi.refreshAccessToken().then((data)=> {
        tokenExpirationEpoch = new Date().getTime() / 1000 + expireTime;
        console.log(
          'Refreshed token. It now expires in ' +
            Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
          ' seconds!'
        );
      }).catch((err)=> { console.log('Could not refresh the token!', err.message) });
    }
  }
}, 720,000);

//Spotify Strategy for user authentication
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/login/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      process.nextTick(async ()=> {
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.setRefreshToken(refreshToken);
        expireTime = expires_in;
        console.log(expires_in);
        tokenExpirationEpoch =
          new Date().getTime() / 1000 + expires_in;
            console.log( 'Retrieved token. It expires in ' +
                          Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
                          ' seconds!'
            );
        User.findOrCreate({
          where: {
            username: profile.username,
            email: profile.emails[0].value
          }
        }).then(([user, created]) => {
          if(created){
            console.log('User created.');
          } else {
            console.log('User already exists.');
          }
          done(null, user);
        }).catch(err => console.log(err));
      });
    }
  )
);
