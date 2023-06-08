const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Cancione.findAll()
        .then(canciones => {
            return res.json(canciones)
        })
    },

    listGenero: (req, res) => {
        DB.Genero.findAll()
        .then(generos => {
            return res.json(generos)
        })
    },


show: (req, res) => {
    DB.Cancione.findByPk(req.params.id)
        .then(canciones => {
            return res.json(canciones)
        })
},

store: (req, res) => {
  
    DB.Cancione.create(req.body)
        .then(canciones => {
           return res.status(200).json({
            data: canciones,
            status: 200
            })
        })
}


}