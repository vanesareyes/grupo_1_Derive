const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {

    shoppingCart: (req, res) => {
        req.session.cart = 11;
        let cart = db.cart.findByPk(req.session.cart, {
            include: ['products']
            })
        
        let categories = db.category.findAll();

        Promise.all([cart,categories])
            .then(data => {
                let [cart, categories] = data
                res.render('shoppingCart', {
                    cart,
                    categories
                });
            })
        },

    addProduct: async function (req, res) {
        req.session.cart = 11;

        let {product_id: productId, qty} = req.body
        // console.log('PRODUCTO_ID',productId)
        let product = await db.product.findByPk(productId)
    
        db.cart.findByPk(req.session.cart).then(cart => {
            cart.addProduct(product, {through: {
                quantity: qty,
                unit_price: product.price,
                subtotal: qty * product.price
                }
            })
            
            res.redirect('/products')
        })
    },

    update: async function (req, res) {
        req.session.cart = 11;

        let product = await db.product.findByPk(req.params.product)
        console.log('PRODUCTO',product)

        db.cart.findByPk(req.session.cart).then(cart => {
            cart.addProduct(product, {through: {
                quantity: req.body.qty,
                unit_price: product.price,
                subtotal: req.body.qty * product.price
                }
            })
            
            res.redirect('/products')
        })
    },

    destroy: (req, res) => {
        req.session.cart = 11;
        console.log('PRODUCTOID',req.params.product)

        db.cartProduct.destroy({
            where: {
                product_id: req.params.product,
                cart_id: req.session.cart,
            }
        })
        res.send('Producto borrado')
        // res.redirect('/cart')
    }
}

module.exports = controller;