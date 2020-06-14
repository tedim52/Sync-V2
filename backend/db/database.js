require('dotenv').config();
const { Sequelize } = require('sequelize');

//Setup db connection
const db = new Sequelize(process.env.CONNECTION_URI);

module.exports = db;
