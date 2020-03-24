const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize;
// const crypto = require('crypto');
const { QueryTypes } = require('sequelize');


const controller = {
    //List products
    list: async function (req, res) {
        let users = await sequelize.query("SELECT id, name, surname, email FROM `users`", { type: QueryTypes.SELECT }); 
        
        for (user of users){
            user.detail = "api/users/" + user.id
            }
        let respuesta = {
            meta: {
                count: users.length
                },
                users
            }

            res.json(respuesta)
    },
    
    detail: (req,res) => {
        db.user.findByPk(req.params.id, {
            attributes: {
                exclude: ["password", "admin"]
            }
        })
        .then(data => {
        console.log(data.password)
        delete data.password
        console.log('DATA', data)
           res.json(data)
        })
}
}

module.exports = controller