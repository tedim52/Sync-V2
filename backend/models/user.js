const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./database');


//User Model
 class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize :db, modelName:'user'});


module.exports = User;
