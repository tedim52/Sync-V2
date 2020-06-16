const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./database');

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


//Sync model
class Sync extends Model {}
Sync.init({
  //user one
  //user two
  //track ids,
  //playlist id


}, {
  sequelize: db,
  modelName: 'Sync',
  tabelName: 'Sync'
});


db.sync().then({
  force: true
});

module.exports = { User: User, Sync: Sync };
