const Sequelize = require('sequelize');
const {postgresConnectionString} = require('../config');
const sequelize = new Sequelize(postgresConnectionString);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.orders = require('./order-postegre')(sequelize, Sequelize);

module.exports = db;