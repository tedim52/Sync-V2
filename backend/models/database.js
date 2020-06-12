const { Sequelize } = require('sequelize');

//setup Database
module.exports = new Sequelize('practice', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
