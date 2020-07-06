/**
* @fileoverview Handles home page user requests.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const router = express.Router();
const {User, Sync} = require('../db/models');
const createSync = require('../core/discjockey');

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect("http://localhost:8000/login/auth/spotify");
  }
  return next();
}

/**
* Loads users information.
*/
router.get('/', ensureAuthenticated, (req, res, next)=> {
  //TODO: Send user profile information
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', async (req, res, next)=> {
  const userForSync = await req.body.user;
  const sync = await createSync(userForSync);
  res.send({
    syncedUser: userForSync,
    sync: sync
  });
});

module.exports = router;
