var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */

router.get('/', indexController.root);

//router.get('/products', indexController.products);

router.get('/faqs', indexController.faqs);

//router.get('/register-form', indexController.registerForm);

router.get('/shopping-cart', indexController.shoppingCart);

//router.get('/contact', indexController.contact);

router.get('/contact', indexController.contact);




module.exports = router;
