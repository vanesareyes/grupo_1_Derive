const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
let userValidationRegister = require('../middlewares/userValidationRegister');
let userValidationLogin = require('../middlewares/userValidationLogin');
let editProfileValidation = require('../middlewares/editProfileValidation');
const guestMiddleware = require('../middlewares/guestMiddleware')
const userMiddleware = require('../middlewares/userMiddleware')

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', userValidationLogin, usersController.processLogin);

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', userValidationRegister, usersController.store);

router.get('/profile', userMiddleware, usersController.profile);

router.get('/edit-profile', userMiddleware, usersController.editProfile);

router.post('/edit-profile',  userMiddleware, usersController.uploadProfilePic);

router.put('/edit-profile', editProfileValidation, usersController.processEditProfile);

router.get('/logout', usersController.logout);
//router.get('/:id/edit', usersController.edit);
//router.delete('/:id', usersController.destroy);

module.exports = router;
