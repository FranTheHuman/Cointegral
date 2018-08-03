/******************************************************
TODO LO REFERIDO A LA CONFIGURACION DEL MODULO PASSPORT
*******************************************************/
const localStrategy = require('passport-local').Strategy
const User = require('../db/model/User');


module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            user.last_login = Date.now();
            user.save()
                .then(() => done(err, user))
        })
    })
    /****
    SIGNUP
    *****/
    passport.use('local-signup', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true 
    },
    function (req, username, password, done) {
        User.findOne({ 'username': username }, function (err, user) {
            if(err){
                return done(err);
            }
            if(user){
                return done(null, false, req.flash('signupmessage', 'El Usuario ya existe'));
            } else {
                var newUser = new User();
                newUser.username = username; 
                newUser.Tipo = 2;
                newUser.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if (err) { throw err; }
                    return done(null, newUser);
                })
            }
        })
    }));
    /****
    LOGIN
    *****/
    passport.use('local-login', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true    
    },
        function (req, username, password, done){
            User.findOne({'username': username}, function (err, user){
                if(err){
                    return done(err);
                }
                if(!user){
                    return done(null, false, req.flash('signupmessage', 'No email found'));
                }
                if(!user.validatePassword(password)){
                    return done(null, false, req.flash('signupmessage', 'Invalid password'))
                } else {
                    if(user.Tipo == 3){
                        return done(null, false, req.flash('signupmessage', 'Not at admin'));
                    }           
                    User.update({_id: user._id}, user.last_loggin = Date.now()); 
                    return done(null, user);
                }  
            })
        }
    ));
}   