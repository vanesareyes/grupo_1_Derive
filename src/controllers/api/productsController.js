const fs = require('fs');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../../database/models');
const sequelize = db.sequelize;

const controller = {

    //List products
    list: (req, res) => {
        db.product.findAll({
            include: [
                "location",
                "category",
            ]
        }).then((products) => {
            let respuesta = products

            res.json(respuesta)
        })

    },

};

module.exports = controller;
