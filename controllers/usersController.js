const fs = require('fs');
//const bcrypt = require ('bcrypt');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
let usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    
    login: (req, res) => {
        res.render('login-form') 
      },
    
    register: (req, res) => {      
        res.render('register-form')
    },
    
    storage: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        
        if (errors.isEmpty()){

            let usuarioExistente = usersJSON.find(user => user.email == req.body.email)
            console.log(usuarioExistente)
            if (typeof usuarioExistente != 'undefined') { 
                res.render('register-form', { errors: [{msg: 'Usuario ya existente'}] })
                } else {                  
            let user = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
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
        } else {
            //sessionStorage.setItem("user", req.body.name)
            //let data = sessionStorage.getItem("user")
            //console.log(data)
            //res.locals.data = req.body
            //let data = res.locals
           // console.log(res.locals.data)
            res.render('register-form', { 
                errors: errors.errors
            })
        }
        
    },
    
    processLogin: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()){
            let usuarioALoguearse
            for (let i = 0; i < usersJSON.length; i++){
                if(usersJSON[i].email == req.body.email && bcrypt.compareSync(req.body.password, usersJSON[i].password))
                usuarioALoguearse = usersJSON[i];
                break;
                }
            
            if (usuarioALoguearse == undefined) {
                return res.render('login-form', {
                    errors: [
                        {msg: 'La combinación de usuario y contraseña es inválida'}
                    ]});
            }
            req.session.usuarioLogueado = usuarioALoguearse;
        } else {
            /*let user = {
                email: req.body.email,
            }
            res.locals = {userss : user}*/
            res.render('login-form', { 
            errors: errors.errors,
            })

            } 
            
        }

      /*  for (let i = 0; i < users.length; i ++){
            if(users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password))
            res.send('Welcome!')
        }
    */

            
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
