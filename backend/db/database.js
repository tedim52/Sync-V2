/**
* @fileoverview Sets up sequelize connection to database on server.
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
const { Sequelize } = require('sequelize');

/**
* Sequelize instance.
* @module
*/
const db = new Sequelize("mysql://root:cloud114@localhost/3306/sync");

module.exports = db;
