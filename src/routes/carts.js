const express = require('express');
const router = express.Router();

const cartsController = require('../controllers/cartsController');

router.get('/', cartsController.shoppingCart);

router.post('/', cartsController.addProduct);

module.exports = router;