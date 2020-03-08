const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
let userValidationRegister = require('../middlewares/userValidationRegister');
let userValidationLogin = require('../middlewares/userValidationLogin');


//let logDBMiddleware = require(‘../middlewares/lodDBMidleware’)

router.get('/login', usersController.login);

router.post('/login', userValidationLogin, usersController.processLogin);

router.get('/register', usersController.register);

router.post('/register', userValidationRegister, usersController.store);

module.exports = router;
