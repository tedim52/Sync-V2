/**
* @fileoverview Handles login/logout requests and sends authenticaiton request to passport.
* @author tediMitiku <tbm42@cornell.edu>
*/
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

// GET /auth/spotify
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in spotify authentication will involve redirecting
//   the user to spotify.com. After authorization, spotify will redirect the user
//   back to this application at /auth/spotify/callback
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

// GET /auth/spotify/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: '/' }),
  function(req, res) {
<<<<<<< HEAD
    res.redirect("/users")
=======
    res.redirect('http://localhost:8080');
>>>>>>> df6e367303332128a6f4f0e7b79ef023de9343a7
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
