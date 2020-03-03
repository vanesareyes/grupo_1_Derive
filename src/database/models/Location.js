module.exports = (sequelize, dataTypes) => {
    let alias = 'location';

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        location: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    };

    let config = {
        timestamps: false,
    }


    const Location = sequelize.define(alias, cols, config);

    Location.associate = function(models) {
        Location.hasMany(models.product, {
            foreignKey: 'locations_id'
        })
    }


    return Location;
}