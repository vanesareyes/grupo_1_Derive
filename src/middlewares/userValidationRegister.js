const express = require('express');
let { check, validationResult, body } = require('express-validator');

const userValidationRegister = [
    check('name').isLength({ min: 2 }).withMessage('Debe ingresar su nombre'), 
    check('surname').isLength({ min: 2 }).withMessage('Debe ingresar su apellido'), 
    check('email').isEmail().withMessage('El email debe ser un email válido'), 
    check('password').isLength({ min: 8, max: 29 }).withMessage('El password debe tener entre 8 y 20 caracteres'),
]

module.exports = userValidationRegister;
  