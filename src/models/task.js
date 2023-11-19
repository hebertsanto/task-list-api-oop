const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const TaskModel = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = TaskModel;