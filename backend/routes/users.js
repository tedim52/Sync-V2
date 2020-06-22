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
      res.send(users);
    })
    .catch(err => console.log(err))
});

/**
* Creates sync between two users.
* @param {string} user - Spotify user to create sync with.
*/

module.exports = router;
