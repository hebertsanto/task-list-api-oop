const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'heberttask',
    database: 'tasklist',
    password: '102030'
})

module.exports = sequelize;