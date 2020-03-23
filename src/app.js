const express = require('express');
const app = express();
const path = require('path');

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const cartsRouter = require('./routes/carts');
const apiProductsRouter = require('./routes/api/products');
const methodOverride = require('method-override');

const session = require('express-session');
const auth = require('./middlewares/auth');
// const cartCheck = require('./middlewares/cartCheck');


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))
app.use(session({secret: 'shhhh'}))

app.use(function(req, res, next){
    res.locals.data = req.body;
    next();
  });
app.use(auth);
// app.use(cartCheck);


//Routes
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/carts', cartsRouter);
app.use('/api/products', apiProductsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;