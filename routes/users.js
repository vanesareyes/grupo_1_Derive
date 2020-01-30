const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');

let userValidation = [
  check('name')
  .isLength()
  .withMessage('Este campo debe estar completo'), 
  check('surname').isLength().withMessage('Este campo debe estar completo'), 
  check('email').isEmail(), 
  check('password').isLength({ min: 6, max: 12 }).withMessage('El password debe tener entre 6 y 12 caracteres')
]

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


router.get('/login', function(req, res) {
  res.send('formulario login') //cambiar a vista login
})

router.get('/register', function(req, res) {
    res.render('register-form')
})

router.post('/register', userValidation, function(req, res) {
 
  let result = validationResult(req)
  console.log(result)

  if (!result.isEmpty()) {
      return res.render('register-form', {
              errors: result.errors,
              data: req.body
          }) 
  }

  let users = fs.readFileSync('./data/users.json', { encoding: 'utf-8' })
  users = JSON.parse(users)
  users.push(req.body)
  users = JSON.stringify(users)
  fs.writeFileSync('./data/users.json', users)

  res.redirect(301, '/users/login')
})

router.post('/login', userValidation, function(req, res) {
  let result = validationResult(req)

  if (result.isEmpty()) {
      return res.render('login', {
              errors: result.errors,
              data: req.body
          }) 
  }
  //res.redirect(301, '/users/welcome') //ver a donde redirigimos

})

module.exports = router;
