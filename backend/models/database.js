const { Sequelize } = require('sequelize');

//setup Database
module.exports = new Sequelize('practice', 'root', 'mikruermiasgoyasolomon', {
  host: 'localhost',
  dialect: 'mysql'
});
