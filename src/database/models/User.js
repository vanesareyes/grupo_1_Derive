module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        },
        surname: {
            type: dataTypes.STRING(15),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        phone: {
            type: dataTypes.STRING(50),
            allowNull: true,
        },
        profile_img: {
            type: dataTypes.STRING(200),
            allowNull: true,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        admin: {
            type: dataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
        }

    };

    let config = {
        timestamps: true,
        underscored: true,
    }


    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsToMany(models.product, {
            through: 'user_product',
            timestamps: false,
            foreignKey: 'users_id',
            otherKey: 'products_id',
        })
        User.hasOne(models.userstoken,{
            as: "user",
            foreignKey: "users_id"
        })

    }
    return User;
}