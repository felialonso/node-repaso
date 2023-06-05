module.exports = function(sequelize, dataTypes){
    
    let alias = "Cancione";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        }, 
        duracion: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        genero_id: {
            type: dataTypes.INTEGER
        },
        album_id: {
            type: dataTypes.INTEGER
        },
        artista_id: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: 'canciones',
        timestamps: false
    }
    
    let Cancione = sequelize.define(alias, cols, config);

    Cancione.associate = function(models) {
        Cancione.belongsTo(models.Genero, {
            as:"genero",
            foreignKey: "genre_id"
        });
        Cancione.belongsToMany(models.Artista, {
            as:"artistas",
            through: "artis_song",
            foreignKey: "song_id",
            otherKey: "artis_id",
            timestamps: false
        })
    }


    return Cancione;
}