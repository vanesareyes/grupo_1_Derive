function guestMiddleware(req, res, next) {
    if (res.locals.isAuthenticated) {
        //res.send('user profile')
        res.redirect('/users/profile')
    }
    next();
}

module.exports = guestMiddleware;