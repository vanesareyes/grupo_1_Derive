function userMiddleware(req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        res.locals.user = req.session.usuarioLogueado;
        
    } next()
}

module.exports = userMiddleware;