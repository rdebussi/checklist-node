const Sequelize = require("sequelize")
const connection = require("../database/database")

const Task = connection.define('tasks', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Task