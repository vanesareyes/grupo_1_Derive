const express = require('express');
var app = express();
var path = require('path');

/*var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

app.listen(3030, () => console.log(
  `*------------------------------
  Server runing in localhost:3030
  -------------------------------*`
  ))

app.use(express.static('public'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/views/index.html'));
})
app.get('/productDetail', function(req,res){
  res.sendFile(path.join(__dirname + '/views/productDetail.html'));
})
app.get('/shopping-cart', function(req,res){
  res.sendFile(path.join(__dirname + '/views/shopping-cart.html'));
})
app.get('/registre', function(req,res){
  res.sendFile(path.join(__dirname + '/views/registre-form.html'));
})
app.get('/addProduct', function(req,res){
  res.sendFile(path.join(__dirname + '/views/addProduct.html'));
})
app.get('/faqs', function(req,res){
  res.sendFile(path.join(__dirname + '/views/faqs.html'));
})



// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

  esto va en start en el json cuando esté bien montado  
  "start": "nodemon app.js"/*"node ./bin/www"*/