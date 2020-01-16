const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	root: (req, res) => {
		res.render('index', {
			products: products
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('')
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		console.log(req.files)

		products.push({
			id: productsFilePath.length,
			...req.body,
			...{image: req.files[0].filename}
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products))

		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let product = products.find(function (p) {
			return p.id == req.params.id
		})

		res.render()
	},


};

module.exports = controller;
