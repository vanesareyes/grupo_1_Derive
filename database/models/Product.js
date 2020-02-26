module.exports = (sequelize, dataTypes) => {

    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        img: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        img2: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        img3: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        img4: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        img5: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        categorie_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        locations_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    };
    

    let config = {
        timestamps: false
    }


    const Product = sequelize.define(alias, cols, config);
    
    return Product;
}