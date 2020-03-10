const locals = (req, res, next) =>{
    if (req.session.user.admin == 0) {
        res.redirect('/')
    }
next();
}
    module.exports = locals;