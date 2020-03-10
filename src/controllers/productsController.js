const fs = require('fs');
const path = require('path');

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
    detail: (req, res, next) => {
        db.product.findByPk(req.params.id, {
                include: [
                    "location",
                    "category"
                ]
            })
            .then((product) => {
                console.log(product.category)
                res.render('productDetail', {
                    product
                })
            })

    },
    //.cookie('product_ids', generateProductCookie(req, product))
    //.cookie('site', 'derive')


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
            img: "",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            categories_id: req.body.category, 
            locations_id: req.body.location, 
            description: req.body.description,
            created_at: "",
            updated_at: "",
            destacado: "",
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
       db.product.update({
            name: req.body.name,
            price: req.body.price,
            // img: "",
            // img2: "",
            // img3: "",
            // img4: "",
            // img5: "",
            categories_id: req.body.category, 
            locations_id: req.body.location, 
            description: req.body.description,
            // created_at: "",
            // updated_at: "",
            // destacado: ""
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
            console.log(updatedProduct,'product') 
            res.redirect('/products/detail/' + req.params.id)
        })
                
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