function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.send('invitado')
    }
}

module.exports = guestMiddleware;