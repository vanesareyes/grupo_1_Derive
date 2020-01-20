var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */

/* GET home page. 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
*/
router.get('/', indexController.root);

//router.get('/products', indexController.products);

router.get('/faqs', indexController.faqs);

router.get('/register-form', indexController.registerForm);

router.get('/shopping-cart', indexController.shopppingCart);


module.exports = router;
