const fs = require('fs');
const path = require('path');




const controller = {

    root: (req, res) => {
        res.render('index', {})
    },

    productDetail: (req,res)=> {
        res.render('productDetail', {})
    },

    faqs: (req,res)=> {
        res.render('faqs', {})
    },

    registreForm: (req,res)=> {
        res.render('registre-form', {})
    },

    shopppingCart: (req,res)=> {
        res.render('shopping-cart', {})
    },

    search: (req, res) => {
        // Do the magic
    },
};
module.exports = controller;