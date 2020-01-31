const fs = require('fs');
//const bcrypt = require ('bcrypt');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
let usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    
    login: (req, res) => {
        res.send('formulario login') //cambiar a vista login
      },
    
    register: (req, res) => {      
        res.render('register-form')
    },
    
    storage: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()){

            let users;
            if(usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON)
            }

            let user = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                //password: bcrypt.hashSync(req.body.password,10),
                phone: req.body.phone,
            }
            users.push(user)
            usersJSON = JSON.stringify(users);
            fs.writeFileSync('./data/users.json', usersJSON);
  
        res.redirect(301, '/users/login')
        } else {
        return res.render('register-form', {
                    errors: errors.errors,
                    data: req.body
                     })
                }
    },
    
    loginByPost: (req, res) => {
        let users;
            if(usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON)
            }

      /*  for (let i = 0; i < users.length; i ++){
            if(users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password))
            res.send('Welcome!')
        }
    */

        let errors = validationResult(req)
        if (!errors.isEmpty()){
            res.render('login', {
                errors: errors.errors,
                data: req.body
            })
        }
                
        res.send('Welcome!')
    },
    

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
