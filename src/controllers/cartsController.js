const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {

    shoppingCart: (req, res) => {
        console.log('req.session.cart',res.locals.cart)

        req.session.cart = 11;
        db.cart.findByPk(req.session.cart)
        .then(data => {
        // res.json({cart: data})
      res.render('shoppingCart', {
          cart: data
        })
        // })
        
        })
    },

    addProduct: async function (req, res) {
        req.session.cart = 11;

        let {product_id: productId, qty} = req.body
        console.log('PRODUCTO_ID',productId)
        let product = await db.product.findByPk(productId)
    
        db.cart.findByPk(req.session.cart).then(cart => {
            console.log('PRODUCTO',product)
            cart.addProduct(product, {through: {
                quantity: qty,
                unit_price: product.price,
                subtotal: qty * product.price
                }
            })

        res.redirect('/products')
    })
    },
}

module.exports = controller;