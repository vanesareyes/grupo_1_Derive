const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize;
// const crypto = require('crypto');
const { QueryTypes } = require('sequelize');


const controller = {
    //List users
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
    
    // User's details
    detail: (req,res) => {
        db.user.findByPk(req.params.id, {
            attributes: {
                exclude: ["password", "admin"]
            }
        })
        .then(user => {
            user.setDataValue("image_URL","http://localhost:3001/profilePics/profile-picture-" + user.id)
            res.json(user)
        })
}
}

module.exports = controller
