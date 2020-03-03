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
		}*/).then( (products) => {
		res.render('products', {
			products
		})
		})
	
	},
	
	// Detail - Detail from one product
	detail: (req, res, next) => {
		db.product.findByPk(req.params.id, /*{
			include: [
				{association: db.location},
				{association: db.category},
			]
		}*/)
		.then( (product) => {  
			res.render('productDetail', {
				product
			})	
		})
		
	},
        //.cookie('product_ids', generateProductCookie(req, product))
		//.cookie('site', 'derive')
	

	// Create - Form to create
	create: (req, res) => {
		db.category.findAll().then((categories) => {
			res.render('product-create-form', {
				categories
			})
		})
		
	},
	
	// Create -  Method to store
	store: (req, res) => {
		db.product.create({
			name: req.body.name ,
			price: req.body.price,
			img: "" ,
			img2: "" ,
			img3: "",
			img4: "",
			img5: "",
			categories_id: req.body.category ,  //FALLA XQ NO ESTA TOMANDO LA RELACION SUPONGO
			locations_id:req.body.location,  //FALLA XQ NO ESTA TOMANDO LA RELACION SUPONGO
			description: req.body.description ,        
			created_at: "",
			updated_at:"",
			destacado: ""
		})
		res.redirect('/products')

	},

    // Update - Form to edit
	edit: (req, res) => {
		let productoAEditar = db.product.findByPk(req.params.id);
		let categories = db.category.findAll();
		Promise.all([productoAEditar, categories])
		.then(([product, categories]) => {
			res.render('product-edit-form', {
				product, categories
			});
		})			
	},

	update: (req, res) => {
		db.product.update({
			name: req.body.name ,
			price: req.body.price,
			img: "" ,
			img2: "" ,
			img3: "",
			img4: "",
			img5: "",
			categories_id: req.body.category ,  //FALLA XQ NO ESTA TOMANDO LA RELACION SUPONGO
			locations_id:req.body.location,  //FALLA XQ NO ESTA TOMANDO LA RELACION SUPONGO
			description: req.body.description ,        
			created_at: "",
			updated_at:"",
			destacado: ""
		}, {where: {
			id: req.params.id
		}}
		)
		res.redirect('/products/' + req.params.id)
    },
    
    delete: (req, res) => {
		db.product.destroy({
			where: {
				id: req.params.id,
			}
		})
		res.redirect('/products');
	}
    
};

module.exports = controller;

//crear, editar, eliminar, listar, ver detalle, buscar


