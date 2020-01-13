const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator")
/*const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
let users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/
const controller = {
/*    loginByGet: (req, res) => {
        
        res.render('register')
    },
    loginByPost: (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            res.render('login', {
                errors: errors.errors,
                data: req.body
            })
        }
        req.session.user = {
            id: 1,
            email: 'john@doe.com'
        }
        
        res.redirect(301, '/users/welcome')
    },
    welcomeUser: (req,res) => {
        res.render('welcomeUser', {usuario: req.session.user})
    },
    registerByGet: (req, res) => {
        
        res.render('register')
    },
    // Home con el usuario activo
    registerByPost: (req, res) => {
        let errors = validationResult(req)
        if (errors){
            res.render('login', {
                errors: errors.errors,
                data: req.body
            })
        }
        res.send('estas logueado')
        
        /res.redirect(301, '/users/welcome')/
    },*/
};
module.exports = controller;