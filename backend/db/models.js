/**
* @fileoverview Defines User and Sync tables and relationship in database.
* @author tediMitiku <tbm42@cornell.edu>
*/
const { Sequelize, Model, DataTypes }  = require('sequelize');
const db = require('./database');

/**
* A User
* @typedef {Object} User
* @property {string} username - Spotify username.
* @property {string} email
  @property {Sync} syncs - The syncs the user has created with other users.
*/
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
    allowNull:true
    },
  spotifyId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  accessToken: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  },
  refreshToken: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  },
},
  {
    sequelize: db,
    modelName: 'User',
    tableName:'User',
    timestamps: false
});


/**
* A Sync
* @typedef {Object} Sync
* @property {string} playlistId - The Spotify playlist id if sync is made into playlist.
* @property {Object} tracks- Array of spotify track URI's.
*/
class Sync extends Model {}
Sync.init({
  playlistId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  tracks: {
    type: Sequelize.JSON,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Sync',
  tableName:'Sync',
  timestamps: false
});

//Many to many relationship on users and sync
User.belongsToMany(Sync, { as: 'Syncs', through: 'user_sync', foreignKey: 'userId' });
Sync.belongsToMany(User, { as: 'Users', through: 'user_sync', foreignKey: 'syncId' });

db.sync();

module.exports = { User: User, Sync: Sync };
