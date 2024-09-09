const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbprojeto', 'user', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
