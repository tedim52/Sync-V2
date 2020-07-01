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
router.get('/', (req, res, next)=> {
  User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => console.log(err))
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', async (req, res, next)=> {
  console.log("Sync entered.");
  const userForSync = req.body.user;
  const sync = await createSync(userForSync);
  console.log(sync);
  res.send({
    syncedUser: userForSync,
    sync: sync
  });
  console.log("Sync Created.");
});

module.exports = router;
