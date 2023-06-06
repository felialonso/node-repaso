
module.exports = (sequelize, dataTypes) => {
    const Genero = sequelize.define('genero', {
        name: dataTypes.STRING,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Genero.associate = models => {
        Genero.hasMany(models.Cancione, {
            as:"canciones",
            foreignKey: 'genre_id'
        })
    }

    return Genero;
}