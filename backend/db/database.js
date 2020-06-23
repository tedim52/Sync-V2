/**
* @fileoverview Sets up sequelize connection to database on server.
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
const { Sequelize } = require('sequelize');

<<<<<<< HEAD
//Setup db connection
const db = new Sequelize(process.env.CONNECTION_URI, {
    dialect: mysql
});
=======
/**
* Sequelize instance.
* @module
*/
const db = new Sequelize(process.env.CONNECTION_URI);
>>>>>>> 281c1482f61e70335ae3ed8ad17264628dd23423

module.exports = db;
