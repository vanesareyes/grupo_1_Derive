const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
let { check, validationResult, body } = require('express-validator');
//let usersFilePath = path.join(__dirname, '../data/users.json');
//let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;
const { QueryTypes } = require('sequelize');
const crypto = require('crypto');
const multer = require('multer');

//set storage engine
const storage = multer.diskStorage({
    destination: './public/profilePics',
    filename: function(req, file, cb){cb(null, file.fieldname + '-' + req.session.user.id + path.extname(file.originalname));}
})
//init upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 25000000,
    },
    fileFilter: function(req, file, cb) {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if(mimeType && extName){
            return cb(null, true);
        } else {
            cb('Procurá subir una imagen solamente por favor');
        }
    }
}).single('profile-picture');

const controller = {

    login: (req, res) => {
        res.render('login-form')
    },

    register: (req, res) => {
        res.render('register-form')
    },

    store: (req, res) => {
        let errors = validationResult(req)
        // console.log(errors)

        if (errors.isEmpty()) {
            db.user.findOrCreate({
                    where: { email: req.body.email },
                    defaults: {
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        //phone: req.body.phone,
                    }
                })
                .then(([user, created]) => {
                    if (!created) {
                        res.render('register-form', { errors: [{ msg: 'Usuario ya existente' }] })
                    } else {
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
        // console.log('errores', errors)
        if (errors.isEmpty()) {
            db.user.findOne({
                where: {email: req.body.email}
            }).then((usuarioALoguearse) => {
                if (usuarioALoguearse != null) {
                    if (bcrypt.compareSync(req.body.password, usuarioALoguearse.password)) {
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
                            if(!req.session.user.phone) {
                                res.redirect('edit-profile')
                            } else{
                                res.redirect('profile');
                            }
                        })
                        } else {
                            if(!req.session.user.phone) {
                                res.redirect('edit-profile')
                            } else {
                                res.redirect('profile');
                            }
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
    profile: async (req, res) => {
        let image = await sequelize.query("SELECT profile_img FROM `users` WHERE `id` = " + req.session.user.id, { type: QueryTypes.SELECT });
        res.render('user-profile',{
             image: image[0].profile_img

         }) 

        // res.send('VER TU PERFIL')
    },

    editProfile: async (req, res) => {
        let image = await sequelize.query("SELECT profile_img FROM `users` WHERE `id` = " + req.session.user.id, { type: QueryTypes.SELECT });
        // console.log(image[0].profile_img)
        res.render('user-create-form', {
            image: image[0].profile_img
        })
    },

    processEditProfile: async (req, res) => {
        let errors = validationResult(req)
        console.log('errores', errors)
        if (errors.isEmpty()) {
        db.user.update({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone: req.body.phone,
            }, {
                where: {
                    id: req.session.user.id
                }
            }
        ).then((updatedProfile) => {
            // res.send('Perfil actualizado')           
            res.redirect('profile')
        })
    } else {
        let image = await sequelize.query("SELECT profile_img FROM `users` WHERE `id` = " + req.session.user.id, { type: QueryTypes.SELECT });
        res.render('user-create-form', {
            errors: errors.errors,
            image: image[0].profile_img


        })
    }
                
    },

    uploadProfilePic: (req, res) => {
        upload(req, res, (err) => {
            if(err){
                res.render('user-create-form', {
                    msg: err
                })
            } else{
                if(req.file == undefined) {
                    res.render('user-create-form', {
                        msg: 'Por favor seleccioná un archivo'
                    })
                } else {
                    db.user.update({
                        profile_img: `/profilePics/${req.file.filename}`
                    }, {
                        where: {
                            id: req.session.user.id
                        }
                    }).then(async (updatedProfile) => {
                        let image = await sequelize.query("SELECT profile_img FROM `users` WHERE `id` = " + req.session.user.id, { type: QueryTypes.SELECT });
                        res.render('user-create-form', {
                            msg: 'La imagen fue cargada con éxito',
                            file: `/profilePics/${req.file.filename}`,
                            image: image[0].profile_img
                        })
                    })
                }
            }
        }) 
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
    
}

module.exports = controller

