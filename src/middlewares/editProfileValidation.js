const express = require('express');
let { check, validationResult, body } = require('express-validator');

const editProfileValidation = [
    check('name').isLength({ min: 2 }).withMessage('Debe ingresar su nombre'), 
    check('surname').isLength({ min: 2 }).withMessage('Debe ingresar su apellido'), 
    check('email').isEmail().withMessage('El email debe ser un email válido'), 
        
]

module.exports = editProfileValidation;
  