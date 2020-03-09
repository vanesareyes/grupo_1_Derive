const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
//let usersFilePath = path.join(__dirname, '../data/users.json');
//let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;
const crypto = require('crypto');

const controller = {

    login: (req, res) => {
        res.render('login-form')
    },

    register: (req, res) => {
        res.render('register-form')
    },

    store: (req, res, next) => {
        let errors = validationResult(req)
        console.log(errors)

        if (errors.isEmpty()) {
            db.user.findOrCreate({
                    where: { email: req.body.email },
                    defaults: {
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        phone: req.body.phone,
                    }
                })
                .then(([user, created]) => {
                    if (!created) {
                        res.render('register-form', { errors: [{ msg: 'Usuario ya existente' }] })
                    } else {
                        console.log(user.get)
                        res.redirect(301, '/users/login')
                    }

                })
        } else {
            res.render('register-form', {
                errors: errors.errors
            })
        }

    },

    processLogin: (req, res) => {
        let errors = validationResult(req)
        console.log('errores', errors)
        if (errors.isEmpty()) {
            db.user.findOne({
                where: {email: req.body.email}
            }).then((usuarioALoguearse) => {
            if (usuarioALoguearse != null) {
                if (bcrypt.compare(req.body.password, usuarioALoguearse.password)) {
                    delete usuarioALoguearse.password;
                    req.session.user = usuarioALoguearse;
                    res.locals.user = req.session.user;
                    if (req.body.remember) {
                        // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
                        const token = crypto.randomBytes(64).toString('base64');
                        res.cookie('rememberToken', token, { maxAge: 1000 * 60 * 60 * 24 * 90 });
                        db.userstoken.create({
                            token: token,
                            users_id: usuarioALoguearse.id,
                            created_at: "",
                            updated_at: "",
                            
                        },{
                            include: [
                                "user"
                            ]
                        }).then((result)=>{
                    //res.redirect('/users/perfil');
                            res.redirect('/');
                        })
                    } else {
                        //res.redirect('/users/perfil');
                        res.redirect('/');
                    }                     
                } else {
                    res.render('login-form', {
                        errors: [
                            { msg: 'La contraseña es inválida' }
                        ]
                    });
                }
            } else {
                res.render('login-form', {
                    errors: [
                        { msg: 'El usuario no existe' }
                    ]
                })
            }
        })
        } else {
            res.render('login-form', {
                errors: errors.errors,
            })
        } 
    },
    profile: (req, res) => {
        res.send('VER TU PERFIL')
    },

    editProfile: (req, res) => {
        res.send('EDITA TUS DATOS')
    },


    logout: (req, res) => {
        console.log('sesion', req.session.user.id)
        // Al hacer logout borramos todos las cookies activas
        db.userstoken.destroy({
            where: {
                users_id: req.session.user.id 
            }
        })
        // },{
        //     include: [
        //         "user"
        //     ]
        // })
        .then((result)=>{
            req.session.destroy();
            res.cookie('rememberToken', null, { maxAge: -1 });
            res.redirect('login');
        })
    }
    

        // La otra opción sería solo borrar la que corresponda a esta sesión.
        // let token = userTokensModel.findByField('token', req.cookies.rememberToken);
        // if (token) { userTokensModel.destroy(token.id) }

}

module.exports = controller

//falta editar y ver detalle