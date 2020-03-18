var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */

router.get('/', indexController.root);

router.get('/faqs', indexController.faqs);

// router.get('/shopping-cart', indexController.shoppingCart);

router.get('/contact', indexController.contact);

router.get('/busqueda', indexController.buscar);




module.exports = router;
