module.exports = (sequelize, dataTypes) => {

    const artista = sequelize.define('Artista', {
        first_name: dataTypes.STRING,
        last_name: dataTypes.STRING,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    artista.associate = fmodels => {
        artista.belongsToMany(models.Cancione, {
            as:"canciones",
            through: "artista_cancion"
        })
    }

    return artista;
};