module.exports = function(sequelize, dataTypes){
    
    let alias = "Albumes";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        }  
    }

    let config = {
        tableName: 'Albume',
        timestamps: false
    }
    
    let Albume = sequelize.define(alias, cols, config);

    Albume.associate = function(models) {
        Albume.hasMany(models.Cancione, {
            as:"canciones",
            foreignKey: "artista_id"
        })
    }

    return Albume;
}