function authMiddleware(req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next();
    } else {
        res.send('usuario')  // falta definir 
    }
}

module.exports = authMiddleware;