const {Sequelize, Model, DataTypes } = require('sequelize');
const db = require('./database');

//User model
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
    tableName:'User',
    timestamps: false
  });

//Sync model
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

db.sync().then({
  force: true
});

module.exports = { User: User, Sync: Sync };
