/**
* @fileoverview Setting up authentication to Spotify using Passport.js.
* @author tediMitiku <tbm42@cornell.edu>
*/
const passport = require('passport');
const MockStrategy = require('passport-mock-strategy');
const User = require('../db/models').User;
const Sequelize = require('sequelize');
const { spotifyApi } = require('../loaders/spotify');

const testAccessToken = '';

passport.use(new MockStrategy({
    name: 'mock authentication',
    username: "Ishan Bhatt"

}, (user, done) => {
  console.log("Mock Authentication Strategy");
}));
