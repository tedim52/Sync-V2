const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./database');

//User Model
class User extends Model {}
User.init({
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull:false
    }
  }, {
    sequelize: db,
    modelName: 'User',
    tableName:'Users',
    timestamps: false
  });
//many to many relationship, user to syncs

db.sync().then({
  force: true
});

module.exports = User;
