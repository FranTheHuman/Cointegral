// Controllers
const User = require('../controllers/Sesion');

// Routes
module.exports = (app, passport) => {

    // Sesion: 
        app.get('/Login', User.getlogin);
        app.get('/SignUp', User.getsignup);
        app.post('/SignUp', User.SamePassword, passport.authenticate('local-signup', User.postsignup));
        app.post('/Login', passport.authenticate('local-login', User.postlogin));
        app.get('/logout', User.logout);
    // Api's    
        app.get('/api/user', User.getprofile);
        // Pacientes:        
        // Odontologos:
        // Obra Social:
        // Turnos:           
} 
          