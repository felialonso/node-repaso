module.exports = function(sequelize, dataTypes){
    
    let alias = "Artista";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'artistas',
        timestamps: false
    }
    
    let Artista = sequelize.define(alias, cols, config);

    Artista.associate = function(models) {
        Artista.belongsToMany(models.Cancione, {
            as:"canciones",
            through: "artis_song",
            foreignKey: "artist_id",
            otherKey: "song_id",
            timestamps: false
        })
    }


    return Artista;
}