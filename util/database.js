const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'RU4realio', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
