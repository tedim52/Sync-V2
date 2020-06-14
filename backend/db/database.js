require('dotenv').config();
const { Sequelize } = require('sequelize');

//Setup db connection
const db = new Sequelize('mysql://root:password@127.0.0.1:3306/sync');////process.env.CONNECTION_URI

module.exports = db;
