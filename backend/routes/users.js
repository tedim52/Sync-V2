/**
* @fileoverview Handles home page user requests.
* @author tediMitiku <tbm42@cornell.edu>
*/
var express = require('express');
var router = express.Router();
const db = require('../db/database');
const models = require('../db/models');
const Sequelize = require('sequelize');

/**
* Loads users information.
*/
router.get('/', function(req, res, next) {
  res.send('Load all users');
  models.User.findAll()
    .then(users => {
      console.log(users);
    })
    .catch(err => console.log(err))
});

/*
* Creates sync between two users.
*/
router.post('/sync', function(req, res, next) {
//TODO: make sync
});

module.exports = router;
