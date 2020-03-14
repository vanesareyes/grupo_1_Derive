module.exports = (sequelize, dataTypes) => {

    let alias = "cartProduct";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        carts_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        products_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        subtotal: {
            type: dataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },               
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
    };
    

    let config = {
        tableName: 'cart_product', 
        timestamps: true,
        underscored: true,        
    }


    const CartProduct = sequelize.define(alias, cols, config);

    // CartProduct.associate = function (models){
    //     CartProduct.HasMany(models.product, {
    //         through: 'cart_product',
    //         timestamps: true,
    //         foreignKey: 'products_id',
    //         otherKey: 'carts_id',
    //     })
    // }
    
   
    return CartProduct;
}
