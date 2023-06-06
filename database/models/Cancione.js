module.exports = (sequelize, dataTypes) => {
    
    const cancione = sequelize.define('Cancione', {
        titulo: dataTypes.STRING,
        duracion: dataTypes.INTEGER,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    

    cancione.associate = models => {
        cancione.belongsTo(models.Genero, {
            as:"genero",
            foreignKey: "genero_id"
        })


        Cancione.belongsToMany(models.Artista, {
            as:"artistas",
            through: "artista_cancion"
        })
    }

}