require('dotenv').config();
const { Sequelize } = require('sequelize');

//Setup db connection
const db = new Sequelize(process.env.CONNECTION_URI, {
    dialect: mysql
});

module.exports = db;
