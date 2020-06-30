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
      res.json(users)
      //res.render("users.ejs", {users: users});
    })
    .catch(err => console.log(err))
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/
router.post('/sync', async function(req, res, next) {
  let userForSync = req.body.user;
  //TODO: Check if this user is a spotify user
  let sync = await createSync(userForSync);
  res.send("Sync between  "+userForSync+" and "+req.user);
});

module.exports = router;
