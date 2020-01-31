const fs = require('fs');
//const bcrypt = require ('bcrypt');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    
    login: (req, res) => {
        res.send('formulario login') //cambiar a vista login
      },


/*   function(req, res) {
  let result = validationResult(req)

  if (result.isEmpty()) {
      return res.render('login', {
              errors: result.errors,
              data: req.body
          }) 
  }
  //res.redirect(301, '/users/welcome') //ver a donde redirigimos

}

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
    }, */
    
    register: (req, res) => {      
        res.render('register-form')
    },
    
    storage: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()){

            let usersJSON = fs.readFileSync('./data/users.json', { encoding: 'utf-8' })
            let users;
            if(usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(users)
            }

            let user = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
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
} 
    

}



            
        /*res.send('estas logueado')
        
        /res.redirect(301, '/users/welcome')/
    }*/
   
//};
module.exports = controller;
