const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./database');

console.log('Enters user');

//User Model
const User = db.define('User', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

console.log(User === db.models.User);

module.exports = User;
