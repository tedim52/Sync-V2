/**
* @fileoverview Defines User and Sync tables and relationship in database.
* @author tediMitiku <tbm42@cornell.edu>
*/
const {Sequelize, Model, DataTypes}  = require('sequelize');
const db = require('./database');

/**
* A User
* @typedfe {Object} User
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
    spotifyId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    }
  }, {
    sequelize: db,
    modelName: 'User',
    tableName:'User',
    timestamps: false
  });

  /**
  * A Sync
  * @typedfe {Object} Sync
  * @property {string} playlistId - The Spotify playlist id if sync is made into playlist.
  * @property {User} users - The users sync is assigned to.
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

db.sync({ force: true });

module.exports = { User: User, Sync: Sync };
