const express = require('express');
let { check, validationResult, body } = require('express-validator');

const userValidationLogin = [
    check('email').isEmail().withMessage('El email debe ser un email válido'), 
    check('password').isLength({ min: 6, max: 12 }).withMessage('El password debe tener entre 6 y 12 caracteres'),
    
]

module.exports = userValidationLogin;