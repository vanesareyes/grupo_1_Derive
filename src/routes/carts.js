const express = require('express');
const router = express.Router();

const cartsController = require('../controllers/cartsController');

router.get('/', cartsController.shoppingCart);

router.post('/', cartsController.addProduct);

router.put('/:product', cartsController.update); //consultar ruta

router.delete('/:product', cartsController.destroy);

module.exports = router;