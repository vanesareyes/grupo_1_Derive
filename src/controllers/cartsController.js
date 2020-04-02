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

            res.redirect('/carts')
        })
    },

    update: async function (req, res) {
        req.session.cart = 11;

        let product = await db.product.findByPk(req.params.product)
        console.log('PRODUCTO',product.id)

        db.cart.findByPk(req.session.cart).then(cart => {
            cart.addProduct(product, {through: {
                quantity: req.body.qty,
                unit_price: product.price,
                subtotal: req.body.qty * product.price
                }
            })
            
        // sequelize.raw('select round(sum(subtotal)) as total from cart_product where cart_id = 11', {
        //     raw: true,
        //     type: sequelize.QueryTypes.SELECT,
        // })
        // .then(result => 
        //     // cart.update({
        //     //     total: result[0].total
        //     // })
        //     console.log('RSULTADO',result)
        // )

        res.redirect('/carts')
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
        res.redirect('/carts')
    }
}

module.exports = controller;