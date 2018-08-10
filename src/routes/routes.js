// Controllers
const User = require('../controllers/Sesion');
const Tratamientos = require('../controllers/Tratamientos');
const ObraSociales = require('../controllers/ObrasSociales');
const Pacientes = require('../controllers/Pacientes');
const Odontologos = require('../controllers/Odontologos');
const Turnos = require('../controllers/Turnos');
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
        app.get('/api/Pacientes', Pacientes.AllPacientes);
        app.post('/api/Paciente', Pacientes.AddPaciente); 
        app.put('/api/Paciente/:id', Pacientes.EditPaciente);
        app.delete('/api/Paciente/:id', Pacientes.DeletePaciente);   
        app.get('/api/Paciente/:Nombre', Pacientes.PacientePorNombre);         
        // Odontologos:
        app.get('/api/Odontologos', Odontologos.AllOdontologos);
        app.post('/api/Odontologos', Odontologos.AddOdontologo); 
        app.put('/api/Odontologos/:id', Odontologos.EditOdontologo);
        app.delete('/api/Odontologos/:id', Odontologos.DeleteOdontologo);  
        // Obra Social:
        app.get('/api/ObraSocial', ObraSociales.AllObrasSociales);
        app.post('/api/ObraSocial', ObraSociales.AddObraSocial); 
        app.delete('/api/ObraSocial/:id', ObraSociales.DelteObraSocial); 
        // Tratamientos:  
        app.get('/api/Tratamientos', Tratamientos.AllTratamientos);
        app.post('/api/Tratamientos', Tratamientos.AddTratamiento); 
        app.delete('/api/Tratamientos/:id', Tratamientos.DeleteTratamiento); 
        app.put('/api/Tratamientos/:id', Tratamientos.AumentarVecesEcho); 
        // Turnos:           
        app.get('/api/Turnos', Turnos.AllTurnos);
        app.post('/api/Turnos', Turnos.AddTurnos); 
        app.delete('/api/Turnos/:id', Turnos.DeleteTurnos); 
        app.put('/api/Turnos/:id', Turnos.EditTurnos); 
} 
          