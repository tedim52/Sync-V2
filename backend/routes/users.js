var express = require('express');
var router = express.Router();

const db = require('../db/database');
const User = require('../db/user');
const Sequelize = require('sequelize');

//User routes

//Load all users
router.get('/', function(req, res, next) {
  res.send('Load all users');
  User.findAll()
    .then(users => {
      console.log(users);
    })
    .catch(err => console.log(err))
});

//Create a user
//if user already exists, redirect to load user syncs
//can use middleware to accomplish
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
});

//TODO: load users syncs route('/'), create a sync route(/sync), create sync in spotify('/spotify')

module.exports = router;
