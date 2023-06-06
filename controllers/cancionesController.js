const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        return res.json('hola')
    }
}