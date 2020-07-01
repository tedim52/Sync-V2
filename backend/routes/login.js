/**
* @fileoverview Handles login/logout requests and sends authenticaiton request to passport.
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
let express = require('express');
let router = express.Router();
const {User, Sync} = require('../db/models');
const passport = require('passport');

/**
* Inserts user in database upon login if user doesn't exist.
* Redirects to user profile page.
*/
router.get('/', function(req, res, next) {
  res.render("login.ejs");
});

router.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private', 'user-library-read', 'playlist-read-collaborative',
            'playlist-modify-public'],
    showDialog: true
  }),
  function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  }
);

router.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    console.log(req.session)
    req.session.user = req.session.passport.user
    res.redirect(process.env.API_REDIRECT_URI);
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
