
module.exports = (sequelize, dataTypes) => {
    const Genero = sequelize.define('Genero', {
        name: dataTypes.STRING,
    }, {timestamps: false});


    Genero.associate = models => {
        Genero.hasMany(models.Cancione, {
            as:"canciones",
            foreignKey: 'genero_id'
        })
    }

    return Genero;
}