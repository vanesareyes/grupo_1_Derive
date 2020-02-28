module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        } ,
        surname: {
            type: dataTypes.STRING(15),
            allowNull: false,
        } ,
        phone: {
            type: dataTypes.INTEGER,
            allowNull: false,
        } ,
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(12),
            allowNull: false,
        },
        profile_img: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        category: {
            type: dataTypes.STRING(45),
            allowNull: true,
            defaultValue: "null",
        }

    };
    
    let config = {
        timestamps: false
    }


    const User = sequelize.define(alias, cols, config);
    
    return User;
}