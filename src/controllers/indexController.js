const fs = require('fs');
const path = require('path');
const faqsFilePath = path.join(__dirname, '../data/faqs.json');
let faqs = JSON.parse(fs.readFileSync(faqsFilePath, 'utf-8'));
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const controller = {

    root: (req, res, next) => {
        db.product.findAll({
            where: {
                destacado: 1  //hotThisWeek 
            },
			include: [
				"location",
				"category"
			]
		}).then ((products) => {
            res.render('index', {
                    products
                })
    })
},

    faqs: (req, res) => {
        res.render('faqs', { faqs})
    },

    
    // shoppingCart: (req, res) => {
    //     db.cart.findByPk(req.session.cart)
    //     .then(data => {
    //         res.json({cart: data})
    //         // res.render('shoppingCart')
    //     })
        
    // },


    contact: (req, res) => {
        res.render('contact')
    },

    search: (req, res) => {
        let categories = db.category.findAll();
        let locations = db.location.findAll();
        let products = db.product.findAll({
            where: {
                    [Op.or]: [
                      {
                        name: {
                          [Op.like]: '%'+req.query.busqueda+'%'
                        }
                      },
                      {
                        description: {
                            [Op.like]: '%'+req.query.busqueda+'%'
                        }
                      }
                    ]
            },
			include: [
				"location",
				"category"
			]
        });
        Promise.all([categories,locations,products])
            .then (data => {
                let [categories, locations, products] = data;
            res.render('busqueda', {
                    products,
                    categories,
                    locations
                })
    })
    },

    advancedSearch: (req,res) => {
        let categories = db.category.findAll();
        let locations = db.location.findAll();
        let products = db.product.findAll({
            where: {
                    [Op.and]: [
                        {
                        [Op.or]: [
                        {
                            name: {
                              [Op.like]: '%'+req.query.keyWord+'%'
                            }
                          },
                          {
                            description: {
                                [Op.like]: '%'+req.query.keyWord+'%'
                            }
                          }
                        ]},
                      {
                        categories_id: req.query.category
                        }
                      ,
                      {
                        locations_id: req.query.location
                        },{
                        price: {
                            [Op.lte]: req.query.price
                      }}
                    ]
            },
			include: [
				"location",
				"category"
			]
        })
        Promise.all([categories,locations,products])
        .then (data => {
            let [categories, locations, products] = data;
            res.render('busqueda', {
                    products,
                    categories,
                    locations
            })
        })
    },

};

module.exports = controller;