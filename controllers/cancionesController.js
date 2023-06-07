const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Cancione.findAll()
        .then(canciones => {
            return res.json(canciones)
        })
    },


show: (req, res) => {
    DB.Cancione
        .findByPk(req.params.id)
        .then(cancione => {
            return res.status(200).json({
                data: cancione,
                status: 200
            })
        })
},

store: (req, res) => {
  
    DB.Cancione
        .create(req.body)
        .then(cancione => {
           return res.status(200).json({
               data: cancione,
                status: 200
            })
        })
}


}