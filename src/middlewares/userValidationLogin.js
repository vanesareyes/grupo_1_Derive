const express = require('express');
let { check, validationResult, body } = require('express-validator');

const userValidationLogin = [
    check('email').isEmail().withMessage('El email debe ser un email válido'), 
    check('password').isLength({ min: 5, max: 20 }).withMessage('El password debe tener entre 5 y 20 caracteres'),
    
]

module.exports = userValidationLogin;