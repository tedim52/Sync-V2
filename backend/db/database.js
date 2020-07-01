/**
* @fileoverview Sets up sequelize connection to database on server.
* @author tediMitiku <tbm42@cornell.edu>
*/
const { Sequelize } = require('sequelize');

/**
* Sequelize instance.
* @module
*/
const db = new Sequelize(process.env.CONNECTION_URI);

module.exports = db;
