const path = require('path');
const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsController');

router.get('/', productsAPIController.list);
router.get('/detail/:id', productsAPIController.detail);
router.get('/lastProduct', productsAPIController.lastProduct);

module.exports = router;