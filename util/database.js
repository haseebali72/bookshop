const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop_db', 'root', 'opopopop', {
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize;