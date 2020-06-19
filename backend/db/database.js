/**
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
const { Sequelize } = require('sequelize');

/**
* Sequelize instance
* @module
*/
const db = new Sequelize(process.env.CONNECTION_URI);

module.exports = db;
