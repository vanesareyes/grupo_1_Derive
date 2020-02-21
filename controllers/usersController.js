const fs = require('fs');
const bcrypt = require ('bcrypt');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
let usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


console.log(usersJSON)
const controller = {

    login: (req, res) => {
        res.render('login-form')
    },

    register: (req, res) => {
        res.render('register-form')
    },
    
    store: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)

        if (errors.isEmpty()) {

            let usuarioExistente = usersJSON.find(user => user.email == req.body.email)
            console.log(usuarioExistente)
            if (typeof usuarioExistente != 'undefined') {
                res.render('register-form', { errors: [{ msg: 'Usuario ya existente' }] })
            } else {
                let user = {
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    phone: req.body.phone,
                }

                users = [
                        ...usersJSON,
                        user,
                    ]
                    //usersJSON.push(user)
                usersJSON = JSON.stringify(users);
                fs.writeFileSync('./data/users.json', usersJSON);
                res.redirect(301, '/users/login')
            }
            
           let users = [
                ...usersJSON,
                user,
            ]
            //usersJSON.push(user)
            usersJSON = JSON.stringify(users);
            fs.writeFileSync('./data/users.json', usersJSON);
            res.redirect(301, '/users/login')
            } 
        } else {
            res.render('register-form', { 
                errors: errors.errors
            })
        }

    },

    processLogin: (req, res) => {
        let errors = validationResult(req)
            console.log(errors)
        if (errors.isEmpty()){
            let usuarioALoguearse = usersJSON.find(user => user.email == req.body.email) 
            console.log(usuarioALoguearse ,'usuarioALoguearse')
            if (typeof usuarioALoguearse != 'undefined' && bcrypt.compareSync(req.body.password, usuarioALoguearse.password)) {
                req.session.usuarioLogueado = usuarioALoguearse;
                console.log('session', req.session.usuarioLogueado)
                    res.send('Bienvenido')
                } else {res.render('login-form', {
                    errors: [
                        { msg: 'La combinación de usuario y contraseña es inválida' }
                    ]
                });
            }

                
        } else {
                res.render('login-form', { 
                errors: errors.errors,
                })

        }

            
        }
                
        
    
    





/*    req.session.user = {
            id: 1,
            email: 'john@doe.com'
        }
    welcomeUser: (req,res) => {
        res.render('welcomeUser', {usuario: req.session.user})
    }, */


/*res.send('estas logueado')
        
        /res.redirect(301, '/users/welcome')/
    }*/

//};
module.exports = controller;