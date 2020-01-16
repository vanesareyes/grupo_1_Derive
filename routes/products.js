// ************ Require's ************
const path = require('path');
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

function ejemplo(req, res, next) {
	if (req.ip === '::1') {
		res.redirect(301, '/')
	}

	next()
}

router.get('/', ejemplo, productsController.root); /* GET - All products */
router.get('/detail/:id/', productsController.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); /* GET - Form to create */
router.post('/create/', upload.any(), productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); /* GET - Form to edit */
router.put('/edit/:id', productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:productId', productsController.destroy); /* DELETE - Delete from DB */

module.exports = router;

