const db = require('../database/models');
const sequelize = db.sequelize;

const cartCheck = (req, res, next) => {
    let cart

    db.cart.findOrCreate({
        where: { id: req.cookies.cart || 0
        },
        defaults: {}
    }).then(data => {
        req.session.cart = data[0].id
        // res.locals.cart = req.session.cart;
        // console.log('CARRITO', res.locals.cart)
})

    next();
}


module.exports = cartCheck;