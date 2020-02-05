const fs = require('fs');
const path = require('path');
const faqsFilePath = path.join(__dirname, '../data/faqs.json');
let faqs = JSON.parse(fs.readFileSync(faqsFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {

    root: (req, res) => {
        let hotThisWeek = products.filter(
            (producto)=>{
                return producto.destacado == 1;
            });
        res.render('index', {products:hotThisWeek})
    },

    /*products: (req, res) => {
        res.render('products', {products})
    },

    registerForm: (req, res) => {
        res.render('register-form', {})
    },*/

    faqs: (req, res) => {
        res.render('faqs', { faqs})
    },

    
    shoppingCart: (req, res) => {
        res.render('shoppingCart')
    },

    //search: (req, res) => {
        // Do the magic
    //},
};

module.exports = controller;