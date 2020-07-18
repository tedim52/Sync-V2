/**
* @fileoverview Handles login/logout requests and sends authenticaiton request to passport.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const router = express.Router();
const { User, Sync } = require('../db/models');
const passport = require('passport');

/**
* If user is already authenticated, direct to user page, else authenticate through
* Spotify.
*/
router.get('/', (req, res, next)=> {
  if (req.isAuthenticated()) {
    res.redirect("http://localhost:3000/users");
  } else {
    res.redirect("http://localhost:8080/login/auth/spotify");
  }
});

/**
* Spotify authentication.
*/
router.get('/auth/spotify',
            passport.authenticate('spotify', {
              scope: ['user-read-email', 'user-read-private', 'user-library-read', 'playlist-read-collaborative',
                      'playlist-modify-public'],
              showDialog: true }), (req, res)=> {
});

//Create fake authentication strategy for testing purposes

/**
* Spotify authentication callback handler.
*/
router.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: '/login/auth/spotify' }),
  (req, res)=> {
    res.redirect('http://localhost:3000/users');
});

/**
* Logout authenticated user, removes cookies and redirect to landing page.
*/
router.get('/logout', (req, res)=> {
  req.logout();
  res.redirect('http://localhost:3000/');
});

module.exports = router;
