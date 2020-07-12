/**
* @fileoverview Handles login/logout requests and sends authenticaiton request to passport.
* @author tediMitiku <tbm42@cornell.edu>
*/
<<<<<<< HEAD
require('dotenv').config();
let express = require('express');
let router = express.Router();
=======
const express = require('express');
const router = express.Router();
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713
const {User, Sync} = require('../db/models');
const passport = require('passport');

/**
* If user is already authenticated, direct to user page, else authenticate through
* Spotify.
*/
<<<<<<< HEAD
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
=======
router.get('/', (req, res, next)=> {
  if (req.isAuthenticated()) {
    res.redirect("http://localhost:3000/users");
  } else {
    res.redirect("http://localhost:8080/login/auth/spotify");
  }
});

/**
* Spotify authenticatoin route.
*/
router.get('/auth/spotify',
            passport.authenticate('spotify', {
              scope: ['user-read-email', 'user-read-private', 'user-library-read', 'playlist-read-collaborative',
                      'playlist-modify-public'],
              showDialog: true }), (req, res)=> {
});

/**
* Spotify authentication callback handler route.
*/
router.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: '/login/auth/spotify' }),
  (req, res)=> {
    res.redirect('http://localhost:3000/users');
});
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713

/**
* Removes authenticated users cookies and redirect to landing page.
*/
router.get('/logout', (req, res)=> {
  req.logout();
  res.redirect('http://localhost:3000/');
});

module.exports = router;
