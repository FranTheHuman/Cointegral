/****************************************
TODO LO REFERIDO A LA SESION DEL USUARIO (RUTAS)
****************************************/

/***************************************************************************************
FUNCION PARA SABER SI INICO SESION PARA DARLE ACCESO A LOS DIFERENTES PUNTOS DEL SISTEMA
***************************************************************************************/

isloggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        if(req.user.Local.admin){
            return next()
        }
    }
    return res.redirect('/Login')
}

/*******************************************************
PARA RENDERIZAR LAS VIEWS DE LOGIN Y SIGNUP - METODO GET 
********************************************************/
const getlogin = (req, res) => {
    res.render('login',{
        message: req.flash('loginMessage'),
        title: "Login"
     })
}

const getsignup = (req, res) => {
    res.render('signup', {
        message: req.flash('signupMessage'),
        title: 'SignUp'
    })
}

/*************************************************************************************************
PARA ENVIARLO AL SISTEMA SI EL INICIO DE SESION ES XITOSO O DE VUELTA AL LOGIN SI NO - METODO POST 
**************************************************************************************************/

const postlogin = {
    successRedirect: '/Home',
    failureRedirect: '/Login',
    failureFlash: true
}
const postsignup = {
    successRedirect: '/Home',
    failureRedirect: '/SignUp',
    failureFlash: true
}

/*************************************************************************
FUNCION PARA HACER QUE AL CREAR UN NUEVO ADMIN SE ASEGURE DE LA CONTRASEÑA 
*************************************************************************/
const SamePassword = (req, res, next) => {
    if(req.body.password == req.body.password2){
        return next();
    }
    return res.redirect('/SignUp')
    req.flash('signupmessage', 'Not the same password')
}

/*******************************
PARA CERRAR EL ACCESO AL SISTEMA
*********************************/

const logout = (req,res) => {
    req.logout()
    res.redirect('/Login')
}

/*********************************************
PARA VER LA INFORMACION DEL USUARIO EN SESION
****************************************/

const Users = require('../db/model/User');

const getprofile = async (req, res) => {
    USER = req.user
    const user = await Users.find(USER);
    console.log(user);
    res.json(user);  
}


/*******************************
PARA EXPORTAR LAS FUNCIONES 
*********************************/
module.exports = {
    logout,
    SamePassword,
    postsignup,
    postlogin,
    getsignup,
    getlogin,
    isloggedIn,
    getprofile
}