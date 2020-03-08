function userMiddleware(req, res, next) {
    if (!res.locals.isAuthenticated) {
       res.redirect('/users/login')
    }
    next();
}

module.exports = userMiddleware;