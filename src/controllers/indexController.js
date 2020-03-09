const fs = require('fs');
const path = require('path');
const faqsFilePath = path.join(__dirname, '../data/faqs.json');
let faqs = JSON.parse(fs.readFileSync(faqsFilePath, 'utf-8'));
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize; 


const controller = {

    root: (req, res, next) => {
        db.product.findAll({
            where: {
                destacado: 0  //hotThisWeek 
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
        res.render('busqueda')
    },

};

module.exports = controller;