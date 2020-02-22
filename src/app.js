const express = require('express');
const app = express();
const path = require('path');

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const methodOverride = require('method-override');

const session = require('express-session');
let guestMiddleware = require('./middlewares/guestMiddleware');
let userMiddleware = require('./middlewares/userMiddleware');

//Routes
//app.get('/', indexRouter);
//app.get('/users', usersRouter);
//app.get('/products', productsRouter);



// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

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
app.use(userMiddleware)


//Routes
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

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