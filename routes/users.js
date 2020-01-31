const express = require('express');
const router = express.Router();
let { check, validationResult, body } = require('express-validator');
const usersController = require('../controllers/usersController');

//let logDBMiddleware = require(‘../middlewares/lodDBMidleware’)

let userValidation = [
  check('name').isLength().withMessage('Este campo debe estar completo'), 
  check('surname').isLength().withMessage('Este campo debe estar completo'), 
  check('email').isEmail().withMessage('El email debe ser un email válido'), 
  check('password').isLength({ min: 6, max: 12 }).withMessage('El password debe tener entre 6 y 12 caracteres')
]

//router.get('/login', usersController.login);

//router.post('/login', userValidation, usersController.loginByPost);

router.get('/register', usersController.register);

//router.post('/register', userValidation, usersController.storage);

module.exports = router;
