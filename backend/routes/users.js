var express = require('express');
var router = express.Router();
const db = require('../models/database');
const User = require('../models/user');
const Sequelize = require('sequelize');
//Handle User routes

//Load all users
router.get('/', function(req, res, next) {
  res.send('Load all users');
  User.findAll()
    .then(users => {
      console.log(users);
    })
    .catch(err => console.log(err))
})

//Create a user
router.get('/create', function(req, res, next) {
  const data = {
    username: "tedi.m52",
    email:"tedi.m52@gmail.com"
  }
  let { username, email } = data;

  //Insert into user table
  User.create({
    username,
    email
    })
    .then(user => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router;
