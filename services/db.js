const { Sequelize } = require('sequelize');

const db = new Sequelize('restapi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;