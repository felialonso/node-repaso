module.exports = (sequelize, dataTypes) => {

    const artista = sequelize.define('Artista', {
        nombre: dataTypes.STRING,
        apellido: dataTypes.STRING,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    artista.associate = models => {
        artista.belongsToMany(models.Cancione, {
            as:"canciones",
            foreignKey: "artista_id"
        })
    }

    return artista;
};