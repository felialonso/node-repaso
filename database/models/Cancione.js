module.exports = (sequelize, dataTypes) => {
    
    const Cancione = sequelize.define('Cancione', {
        id: { type: dataTypes.INTEGER, autoIncrement: true, allowNull:false, primaryKey: true},
        titulo: dataTypes.STRING,
        duracion: dataTypes.INTEGER,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    

    Cancione.associate = models => {
        Cancione.belongsTo(models.Genero, {
            as:"genero",
            foreignKey:"genero_id"
        });

        Cancione.belongsTo(models.Albume, {
            as: 'album',
            foreignKey: 'album_id',
          });

        Cancione.belongsTo(models.Artista, {
            as:"artistas",
            foreignKey: "artista_id"
        });
    }
        return Cancione;
}