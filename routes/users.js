const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
const usersController = require('../controllers/usersController');
let usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


//let logDBMiddleware = require(‘../middlewares/lodDBMidleware’)

let userValidation = [
  check('name').isLength().withMessage('Debe ingresar su nombre'), 
  check('surname').isLength().withMessage('Debe ingresar su apellido'), 
  check('email').isEmail().withMessage('El email debe ser un email válido'), 
  check('password').isLength({ min: 6, max: 12 }).withMessage('El password debe tener entre 6 y 12 caracteres'),
  body('email').custom(function(value){
    let users;
      if(usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(users)
      }
      for (let i = 0; i < users.length; i ++) {
        if (users[i].email == value) {
          return false;
        }
      }
      return true;
  }).withMessage('Usuario ya existente')
]

router.get('/login', usersController.login);

//router.post('/login', userValidation, usersController.loginByPost);

router.get('/register', usersController.register);

router.post('/register', userValidation, usersController.storage);

module.exports = router;
