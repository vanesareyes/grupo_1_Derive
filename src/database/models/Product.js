module.exports = (sequelize, dataTypes) => {

    let alias = "product";

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
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        img: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        img2: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        img3: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        img4: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        img5: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        categories_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        locations_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },        
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        stock: {
            type: dataTypes.INTEGER(11),
        },
        destacado: {
            type: dataTypes.TINYINT,
            defaultValue: 0,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    };
    

    let config = {
        timestamps: true,
        underscored: true,        
    }


    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models){
        Product.belongsTo(models.location, {
            as: "location",
            foreignKey: "locations_id"
        })
        Product.belongsTo(models.category, {
            as: "category",
            foreignKey: "categories_id"
        }) 
        Product.belongsToMany(models.user, {
            through: 'user_product',
            timestamps: false,
            foreignKey: 'products_id',
            otherKey: 'users_id',
        })
        Product.belongsToMany(models.cart, {
            as: 'carts',
            through: models.cartProduct,
            timestamps: true,
            // foreignKey: 'carts_id',
            // otherKey: 'products_id',
        })
    }
    
   
    return Product;
}
