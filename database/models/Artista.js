module.exports = (sequelize, dataTypes) => {

    const artista = sequelize.define('Artista', {
        nombre: dataTypes.STRING,
        apellido: dataTypes.STRING,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    return artista;
};