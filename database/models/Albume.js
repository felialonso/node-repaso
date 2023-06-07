module.exports = (sequelize, dataTypes) => {
    
    const Albume = sequelize.define('Albume', {
        nombre: dataTypes.STRING,
        duracion: dataTypes.DOUBLE
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Albume.associate = models => {
        Albume.hasMany(models.Cancione, {
            as:"canciones",
            foreignKey: "artista_id"
        })
    }

    return Albume;
}