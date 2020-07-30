/**
* @fileoverview Handles home page user requests.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const router = express.Router();
const {User, Sync} = require('../db/models');
const createSync = require('../core/discjockey');
const { spotifyApi } = require('../loaders/spotify');

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
  const [id, username, imageURL] = await Promise.all([authUserData.body.id,
                                                      authUserData.body.display_name,
                                                      authUserData.body.images[0].url]);
  res.json({
    success: true,
    id: id,
    image: imageURL,
    username: username
  });
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', ensureAuthenticated, async (req, res, next)=> {
  const userForSync = req.body.user;

  //Check if user is a Spotify user
  spotifyApi.getUser(userForSync).catch(err => {
    console.log(err);
    res.status(404).json({success: false, message: "Spotify user does not exist."});
  });

  const syncNames = await createSync(userForSync);
  res.status(200)json({
    success: true,
    syncedUser: userForSync,
    sync: syncNames
  });
});

/**
* Creates synced playlist in authenticated users Spotify account.
* @param {string} syncedUser - User that sync was created with.
* @param {Array} sync - Synced playlist to create for user.
*/
router.post('/playlist', ensureAuthenticated, async (req, res, next)=> {
  const otherUsername = req.body.syncedUser;
  const sync = req.body.sync;

  const authUserData = await spotifyApi.getMe();
  const [authUserId, authUsername] = await Promise.all([authUserData.body.id,
                                                        authUserData.body.display_name]);
  const playlistName = authUsername + " x " + otherUsername;
  playlistOptions = { description: "A playlist created for "+ authUsername + " and " + otherUsername
                                  + " by Sync. www.syncwithme.com." };
  const createPlaylistResponse = await spotifyApi.createPlaylist(authUserId, playlistName, playlistOptions);
  const syncedPlaylistId = await createPlaylistResponse.body.id;

  const addTracksResponse = await spotifyApi.addTracksToPlaylist(syncedPlaylistId, sync);
  res.status(200).json({success: true, result: createPlaylistResponse});
});

module.exports = router;
