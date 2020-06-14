const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./database');

//User Model
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.TEXT
}, {
  sequelize: db,
  modelName: 'User',
  tableName:'Users' });
db.sync();

module.exports = User;
