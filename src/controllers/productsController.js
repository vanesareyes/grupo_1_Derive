const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize; 

const controller = {

	//List products
	root: (req, res, next) => {
		db.product.findAll(/*{
			include: [
				{association: db.location},
				{association: db.category},
			]
		}*/).then( products => {
		res.render('products', {
			products
		})
		})
		next();
		},
	

	// Detail - Detail from one product
	detail: (req, res, next) => {
		db.product.findByPk(req.params.id).then( data => {  
			res.render('productDetail', {
				product
			})	
		})
		next();	
	},
        //.cookie('product_ids', generateProductCookie(req, product))
		//.cookie('site', 'derive')
	

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
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

		res.redirect('/products')
	},

    // Update - Form to edit
	edit: (req, res) => {
		let product = products.find(p => p.id == req.params.id)			
				
		res.render('product-edit-form', {
			product
		});
	},

	update: (req, res) => {
		let arrayIndex

		let product = products.find(function (p, index) {
			if (p.id == req.params.id) {
				arrayIndex = index
				return true
			}

			return false
		})

		let editado = {
			...product,
			...req.body
		}

		products[arrayIndex] = editado

		fs.writeFileSync(productsFilePath, JSON.stringify(products))

		res.send('listo!')
    },
    
    delete: (req, res) => {
						
		//let product = products.find(p => p.id == req.params.id);
		let finalProducts = products.filter (product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts,null,''));
		res.redirect('/products');
	}
		
/*
		let product = products.find(function (p) {
			return p.id == req.params.id
		})		
		res.render('product-deletion', {
			product:product
		})*/
    
};

module.exports = controller;

//crear, editar, eliminar, listar, ver detalle, buscar


