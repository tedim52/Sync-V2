/**
* @fileoverview Sets up sequelize connection to database on server.
* @author tediMitiku <tbm42@cornell.edu>
*/
const { Sequelize } = require('sequelize');

/**
* Sequelize instance.
* @module
*/
const db = new Sequelize('sync', 'root', 'cloud114', {
  dialect: 'mysql'
})

module.exports = db;
