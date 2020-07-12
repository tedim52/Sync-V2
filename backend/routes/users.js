/**
* @fileoverview Handles home page user requests.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const router = express.Router();
const {User, Sync} = require('../db/models');
const createSync = require('../core/discjockey');
const spotifyApi = require('../loaders/spotify');

//Authentication middleware to protect routes that require an authenticated user.
function ensureAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect("http://localhost:8080/login/auth/spotify");
  }
  return next();
}

/**
* Loads users information if user is already authenticated.
*/
router.get('/', ensureAuthenticated, async (req, res, next)=> {
  const authUserData = await spotifyApi.getMe();
  const authUserId = await authUserData.body.id;
  const authUsername = await authUserData.body.display_name;
  res.json({
    username: authUsername
    //TODO: send other info, friends, profile pic, other stuff to display on user profile page
  });
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', ensureAuthenticated, async (req, res, next)=> {
  const userForSync = await req.body.user;
  //TODO: Check if this user is a spotify user
  //TODO: Check if sync exists in database, if not create sync
    //Check if sync with this the authUser and synced user exists
    //        if it does, return that sync
    //        if it doesnt, create the sync, put it in the db with many to many relationship, send that
  const sync = await createSync(userForSync);
  res.json({
    syncedUser: userForSync,
    sync: sync
  });
});

/**
* Creates synced playlist in authenticated users Spotify account.
* @param {string} syncedUser - User that sync was created with.
* @param {Array} sync - Synced playlist to create for user.
*/
router.post('/playlist', ensureAuthenticated, async (req, res, next)=> {
  //TODO: Destructuring return Promise.all()
  const otherUsername = req.body.syncedUser;
  const sync = req.body.sync;

  //TODO: Check if sync already exists, and check if that sync has a playlist id already attached to it,
  // if so add any non duplicate songs in the new sync

  const authUserData = await spotifyApi.getMe();
  const [authUserId, authUsername] = await Promise.all([authUserData.body.id, authUserData.body.display_name]);
  const playlistName = authUsername + " x " + otherUsername;
  playlistOptions = { description: "A playlist created for "+ authUsername + " and " + otherUsername
                                  + " by Sync. www.syncwithme.com." };
  const createPlaylistResponse = await spotifyApi.createPlaylist(authUserId, playlistName, playlistOptions);
  const syncedPlaylistId = await createPlaylistResponse.body.id;

  //TODO: Add playlist id to user sync in database
  // Get sync from database, attached newly created playlist id to it for later retrival

  const addTracksResponse = await spotifyApi.addTracksToPlaylist(syncedPlaylistId, sync);
  res.json({result: createPlaylistResponse});
});

//TODO: write helper function to turn list of track spotify URI into song names

module.exports = router;
