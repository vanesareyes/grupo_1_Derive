// ************ Require's ************
const path = require('path');
const express = require('express');
const router = express.Router();
const admin = require('../middlewares/admin')
let productFormValidation = require('../middlewares/productFormValidation');
const multer = require('multer')

var storage = multer.diskStorage({
	destination: function (request, file, callback) {
		callback(null, './public/images/products/');
	},
	filename: function (request, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

const upload = multer({storage: storage})

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

function ejemplo(req, res, next) {
	if (req.ip === '::1') {
		res.redirect(301, '/')
	}

	next()
}

/*** LISTING PRODUCTS***/
//router.get('/', ejemplo, productsController.root); /* GET - All products */
router.get('/', productsController.root);

router.get('/detail/:id/', productsController.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', admin, productsController.create); /* GET - Form to create */
router.post('/create', productFormValidation, upload.any(), productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', admin, productsController.edit); /* GET - Form to edit */
router.put('/edit/:id', productFormValidation, productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.get('/delete/:id', productsController.edit); /* DELETE - Delete from DB */
router.delete('/delete/:id', productsController.delete); /* DELETE - Delete from DB */




module.exports = router;

