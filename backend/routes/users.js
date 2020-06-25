/**
* @fileoverview Handles home page user requests.
* @author tediMitiku <tbm42@cornell.edu>
*/
var express = require('express');
var router = express.Router();
const {User, Sync} = require('../db/models');
const createSync = require('../core/discjockey');

/**
* Loads users information.
*/
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => {
      res.render("users.ejs", {users: users});
    })
    .catch(err => console.log(err))
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', async function(req, res, next) {
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
});

module.exports = router;
