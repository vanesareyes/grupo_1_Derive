const express = require('express');
let { check, validationResult, body } = require('express-validator');

const productFormValidation = [
    check('name').isLength({ min: 5 }).withMessage('Debe ingresar un nombre de al menos 5 caracteres'), 
    check('description').isLength({ min: 50 }).withMessage('Debe ingresar una descripción de al menos 50 caracteres'), 
]

module.exports = productFormValidation;
  