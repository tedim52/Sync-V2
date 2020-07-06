/**
* @fileoverview Handles login/logout requests and sends authenticaiton request to passport.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const router = express.Router();
const {User, Sync} = require('../db/models');
const passport = require('passport');

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("http://localhost:3000/users");
  } else {
    res.redirect("http://localhost:8080/login/auth/spotify");
  }
}

router.get('/', (req, res, next)=> {
  if (req.isAuthenticated()) {
    res.redirect("http://localhost:3000/users");
  } else {
    res.redirect("http://localhost:8080/login/auth/spotify");
  }
});

// GET /auth/spotify
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in spotify authentication will involve redirecting
//   the user to spotify.com. After authorization, spotify will redirect the user
//   back to this application at /auth/spotify/callback
router.get('/auth/spotify',
            passport.authenticate('spotify', {
              scope: ['user-read-email', 'user-read-private', 'user-library-read', 'playlist-read-collaborative',
                      'playlist-modify-public'],
              showDialog: true }), (req, res)=> {
  }
);

// GET /auth/spotify/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: '/login/auth/spotify' }),
  (req, res)=> {
    res.redirect('http://localhost:3000/users');
  }
);

router.get('/logout', (req, res)=> {
  req.logout();
  res.redirect('/');
});

module.exports = router;
