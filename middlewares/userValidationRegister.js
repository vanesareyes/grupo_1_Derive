const express = require('express');
let { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const path = require('path');
let usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userValidationRegister = [
    check('name').isLength().withMessage('Debe ingresar su nombre'), 
    check('surname').isLength().withMessage('Debe ingresar su apellido'), 
    check('email').isEmail().withMessage('El email debe ser un email válido'), 
    check('password').isLength({ min: 6, max: 12 }).withMessage('El password debe tener entre 6 y 12 caracteres'),
    body('email').custom (value => {
      return usersJSON.find(email => email == value)
      .then(user => { console.log(user)
        //if (user) {
          //return Promise.reject('Usuario ya existente');
        //}
      })
    })
  ]


      /*let users;
        if(usersJSON == "") {
          users = [];
        } 
        } 
        for (let i = 0; i < users.length; i ++) {
          if (users[i].email == value) {
            return false;
          }
        }
        return true;
    }).withMessage('Usuario ya existente')

    check('email').custom(value => {
    return User.findByEmail(value).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  }),
  check('password').custom((value, { req }) => {
    if (value !== req.body.passwordConfirmation) {
      throw new Error('Password confirmation is incorrect');
    }
  })
  */
  

  module.exports = userValidationRegister;
  