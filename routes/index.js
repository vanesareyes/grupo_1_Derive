var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.root);

router.get('/faqs', indexController.faqs);

router.get('/productDetail', indexController.productDetail);

router.get('/registre-form', indexController.registreForm);

router.get('/shopping-cart', indexController.shopppingCart);


module.exports = router;