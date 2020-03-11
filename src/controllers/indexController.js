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

    
    shoppingCart: (req, res) => {
        res.render('shoppingCart')
    },


    contact: (req, res) => {
        res.render('contact')
    },

    buscar: (req, res) => {
        db.product.findAll({
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
                      }//,
                        //{
                        // location_id: {
                        //     [Op.like]: '%'+req.params.busqueda+'%'
                        //  }
                        // }
                    ]
            },
			include: [
				"location",
				"category"
			]
		}).then ((products) => {
            res.render('busqueda', {
                    products
                })
    })
    },

};

module.exports = controller;