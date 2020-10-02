/**
* @fileoverview Sets up sequelize connection to database on server.
* @author tediMitiku <tbm42@cornell.edu>
*/
const { Sequelize } = require('sequelize');

/**
* Sequelize instance.
* @module
*/
const db = new Sequelize('sync', 'root', 'Cornellvac62', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = db;
