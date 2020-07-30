/**
* @fileoverview Sets up Sequelize connection to database on server.
* @author tediMitiku <tbm42@cornell.edu>
*/
const { Sequelize } = require('sequelize');

const db_connection = (process.env.NODE_ENV='production') ? process.env.PROD_URI:process.env.DEV_URI;

/**
* Sequelize instance.
* @module
*/
const db = new Sequelize(db_connection);

module.exports = db;
