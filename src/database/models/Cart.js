module.exports = (sequelize, dataTypes) => {

    let alias = "cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        users_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        total: {
            type: dataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },           
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        confirmed_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }

    };
    

    let config = {
        timestamps: true,
        underscored: true,        
    }


    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models){
        Cart.belongsTo(models.user, {
            as: "user",
            foreignKey: "users_id"
        })
        Cart.belongsToMany(models.product, {
            as: 'products',
            through: models.cartProduct,
            timestamps: true,
            // foreignKey: 'products_id',
            // otherKey: 'carts_id',
        })
    }
    
   
    return Cart;
}
