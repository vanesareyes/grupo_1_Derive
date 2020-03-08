const db = require('../database/models');
const sequelize = db.sequelize;

const locals = (req, res, next) => {
    res.locals.isAuthenticated = false;
    if (req.session.user) {
        res.locals.isAuthenticated = true;
        res.locals.user = req.session.user;
    } else if (req.cookies.rememberToken) {
        // Si existe el token en la colección entonces es válido
        db.userstoken.findOne({
            where:{
                token: req.cookies.rememberToken
                }
            },
            {
            include: [
                "user"
                ]
            }
        ).then((userToken)=>{
            // Si encontramos un usuario que coincida, lo logeamos     
            if(userToken){    
                db.user.findByPk(userToken.users_id)
                .then((user) => {           
                delete user.password;
                req.session.usuarioLogueado = user;
                res.locals.isAuthenticated = true;
                res.locals.user = req.session.usuarioALoguearse;
            })
        }else {
        // Si no existe en la colección es inválido, borramos la cookie
            res.cookie('rememberToken', null, { maxAge: -1 });
        }
        })        
        }
    next();
}


module.exports = locals;
