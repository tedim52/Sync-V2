/**
* @fileoverview Handles home page user requests.
* @author tediMitiku <tbm42@cornell.edu>
*/
const express = require('express');
const router = express.Router();
const {User, Sync} = require('../db/models');
const createSync = require('../core/discjockey');

/**
* Loads users information.
*/
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => {
      res.json({users: users, authUser: req.session.user})
    })
    .catch(err => console.log(err))
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', async function(req, res, next) {
  let userForSync = req.body.syncUser;
  //TODO: Check if this user is a spotify user
  let sync = await createSync(userForSync);
  Sync.findOrCreate({
      where: {
        playlistId: "Sync between "+userForSync+" and ",
        tracks: sync
      }
  }).then(([sync, created]) => {
    if(created){
      console.log('Sync created.');
    } else {
      console.log('Sync already exists.');
    }
  }).catch(err => console.log(err));

  res.json({
    authUser: "",
    syncUser: userForSync,
    sync: sync
  });
});

module.exports = router;
