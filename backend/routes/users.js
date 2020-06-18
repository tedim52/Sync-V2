/**
* @author tediMitiku <tbm42@cornell.edu>
*/
var express = require('express');
var router = express.Router();
const db = require('../db/database');
const models = require('../db/models');
const Sequelize = require('sequelize');
const spotifyApi = require('../loaders/spotify');

/**
* Inserts user in database upon login if user doesn't exist.
* Redirects to user profile page.
*/
router.get('/login', function(req, res, next) {
  models.User.create({
    username: req.body.username,
    email: req.body.email
  }).then((user) => {
    console.log(user);
  })
  .catch(UniqueConstainError => {
    console.log("User already exists");
  });
  res.redirect('/users');
});

/**
* Creates a sync between two users.
*/
router.get('/', function(req, res, next) {
  res.send('Load all users');
  models.User.findAll()
    .then(users => {
      console.log(users);
    })
    .catch(err => console.log(err))
});

module.exports = router;
