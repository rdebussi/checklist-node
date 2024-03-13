const Sequelize = require("sequelize")

const connection = new Sequelize('checklist', 'root', 'guitarra21', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = connection