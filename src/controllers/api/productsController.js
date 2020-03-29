const fs = require('fs');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../../database/models');
const sequelize = db.sequelize;
const { QueryTypes } = require('sequelize');

const controller = {

    //List products
    list: async (req, res) => {
        let products = await sequelize.query("SELECT products.id AS `id`, products.name, products.description, categories.category, locations.location FROM `products` LEFT OUTER JOIN `locations` ON `products`.`locations_id` LEFT OUTER JOIN `categories` ON `products`.`categories_id`", { type: QueryTypes.SELECT }); 
        console.log(products.length, 'CANTIDAD')

        for (product of products){
            product.detail = "api/products/" + product.id
            }
        let respuesta = {
            meta: {
                count: products.length
                },
                products
            }

            res.json(respuesta)

        
    },
    detail: (req, res) => {
        db.product.findByPk(req.params.id, {
            include: [
                "location",
                "category"
            ]
        }
            
    )
        .then(product => {
            product.setDataValue("image_URL",product.img)
            res.json(product)
        })
    }

};

module.exports = controller;
