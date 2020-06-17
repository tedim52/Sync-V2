var express = require('express');
var router = express.Router();

const db = require('../db/database');
const models = require('../db/models');
const Sequelize = require('sequelize');
const spotifyApi = require('../loaders/spotify');

//When user logs in, create new user, if user doesn't already exist, or else
router.get('/login', function(req, res, next) {
  models.User.create({
    username: req.body.username,
    email: req.body.email
  })
  .then(user => {
    res.redirect('/users');
  })
  .catch(err => console.log(err));//catch duplicate error
});

//Load user profile, previously created syncs, etc.
router.get('/', function(req, res, next) {
  res.send('Load all users');
  models.User.findAll()
    .then(users => {
      console.log(users);
    })
    .catch(err => console.log(err))
});

module.exports = router;
