module.exports = (sequelize, dataTypes) => {
    let alias = 'category';

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    };

    let config = {
        tableName: 'categories',
        timestamps: false,
    }


    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.product, {
            foreignKey: 'categories_id'
        })
    }



    return Category;
}