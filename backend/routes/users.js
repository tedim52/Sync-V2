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
router.get('/', async function(req, res, next) {
  await User.findAll()
    .then(users => {
      res.json({
          username: "Vaughn"
      });
    })
    .catch(err => console.log(err))
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', async function(req, res, next) {
<<<<<<< HEAD
  var userForSync = req.body.user;
  //check if this user is a spotify user
  var users = await User.findAll({
      where: {
          username: userForSync
      }
  })
  var sync = await createSync(users[0].spotifyId);
  console.log(sync);
  res.render("sync.ejs");
=======
  let userForSync = req.body.user;
  //TODO: Check if this user is a spotify user
  let sync = await createSync(userForSync);
  res.send(sync);
>>>>>>> df6e367303332128a6f4f0e7b79ef023de9343a7
});

module.exports = router;
