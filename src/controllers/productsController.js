const fs = require('fs');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {

    //List products
    root: (req, res) => {
        db.product.findAll({
            include: [
                "location",
                "category",
            ]
        }).then((products) => {
            res.render('products', {
                products
            })
        })

    },

    // Detail - Detail from one product
    detail: async function (req, res) {
        req.session.cart = 11

        let cart = await db.cart.findByPk(req.session.cart, {
            include:'products'
        })

        let isAdded = Array.from(cart.products).filter(function(product){
            return product.id == req.params.id


        })

        db.product.findByPk(req.params.id, {
                include: [
                    "location",
                    "category",
                    "carts" 
                ]
            })
            .then((product) => {
                // console.log('PRODUCTO',product)
                let msg = undefined;
                res.render('productDetail', {
                    product,
                    cart,
                    isAdded: isAdded.length > 0,
                    msg : msg
                })
            })

    },
       // Create - Form to create
    create: (req, res) => {
        let categories = db.category.findAll();
        let locations = db.location.findAll();
        Promise.all([categories,locations])
            .then(data => {
                let [categories, locations] = data

                res.render('product-create-form', {
                    locations,
                    categories
                });
            })

    },

    // Create -  Method to store
    store: (req, res) => {
        db.product.create({
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            img2: req.body.img2,
            img3: req.body.img3,
            img4: req.body.img4,
            img5: req.body.img5,
            categories_id: req.body.category, 
            locations_id: req.body.location, 
            description: req.body.description,
            created_at: "",
            updated_at: "",
            destacado: "",
            stock: req.body.stock
        },{
            include: [
                "location",
                "category"
            ]
        }).then((product)=>{
            console.log(product,'product')
            res.redirect(301,'/products')
        })        

    },

    // Update - Form to edit
    edit: (req, res) => {
        let productoAEditar = db.product.findByPk(req.params.id, {
            include: [
                "location",
                "category"
            ]
        });
        let categories = db.category.findAll();
        let locations = db.location.findAll();
        Promise.all([productoAEditar, categories, locations])
            .then(([product, categories, locations]) => {
                res.render('product-edit-form', {
                    product,
                    categories,
                    locations
                });
            })
    },

    update: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.product.update({
                name: req.body.name,
                price: req.body.price,
                img: req.body.img,
                img2: req.body.img2,
                img3: req.body.img3,
                img4: req.body.img4,
                img5: req.body.img5,
                categories_id: req.body.category, 
                locations_id: req.body.location, 
                description: req.body.description,
                stock: req.body.stock
            }, {
            where: {
                id: req.params.id
            }
        }, {
            include: [
                "location",
                "category"
            ]
        }
        ).then((updatedProduct) => {
            res.redirect('/products/detail/' + req.params.id)
        })
        } else {
            let productoAEditar = db.product.findByPk(req.params.id, {
                include: [
                    "location",
                    "category"
                ]
            });
            let categories = db.category.findAll();
            let locations = db.location.findAll();
            Promise.all([productoAEditar, categories, locations])
                .then(([product, categories, locations]) => {
                    res.render('product-edit-form', {
                        errors: errors.errors,
                        product,
                        categories,
                        locations
                    })
                })
        }
                
    },

    delete: (req, res) => {
        db.product.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.redirect('/products');
    }

};

module.exports = controller;

//crear, editar, eliminar, listar, ver detalle, buscar