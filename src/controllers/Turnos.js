 /****************************************
 TODO LO REFERIDO A LOS TURNOS (RUTAS)
 ****************************************/

 /*************************************************
 TRAEMOS EL SCHEMA DE TURNOS Y PACIENTES DE LA CARPETA DB
 *************************************************/
 const Turnos = require('../db/model/Turnos');
 const Pacientes = require('../db/model/Pacientes');
 const Odontologo = require('../db/model/Odontologos');
const AllTurnos = async (req, res) => {
    Turnos.find({}, function(err, turno) {
        Pacientes.populate(turno, {path: "Paciente"}, function(err, turno){
            Odontologo.populate(turno, {path: "Especialista"}, function(err, turno){
                console.log(turno);
                res.json(turno);
            })
        })
    }); 
 }

 const AddTurnos = async (req, res) => {

     const NuevoTurno = req.body; 
     const NewTurno = new Turnos(NuevoTurno);
     await NewTurno.save();
     console.log(NewTurno);
     res.json({status: 'Turno Saved'});

};

const DeleteTurnos = async (req, res) => {

    const id = req.params.id  
    await Turnos.findByIdAndRemove(id);
    res.json({status: 'Turno Deleted'});

};

 /*************************************************
FUNCION PARA CONFIRMAR EL TURNO - PUT
 *************************************************/
const confirmarTurno = async (req, res) => {

    TurnoEditado = { "Asistio": "true"}
    const id = req.params.id;
    await Turnos.findByIdAndUpdate(id, TurnoEditado);
    res.json({status: 'Turno Updated'});

};
 /*************************************************
FUNCIONES PARA UNA AUSENCIA EN EL TURNO - PUT
 *************************************************/
const AusenciaNoAnunciadaTurno = async (req, res) => {

    TurnoEditado = { "AusenciaAnunciada": "false", "Asistio": "false"}
    const id = req.params.id;
    await Turnos.findByIdAndUpdate(id, TurnoEditado);
    res.json({status: 'Turno Updated'});

};
const AusenciaAnunciadaTurno = async (req, res) => {

    TurnoEditado = { "AusenciaAnunciada": "true", "Asistio": "false"}
    const id = req.params.id;
    await Turnos.findByIdAndUpdate(id, TurnoEditado);
    res.json({status: 'Turno Updated'});

};

module.exports = {
    AusenciaNoAnunciadaTurno,
    DeleteTurnos,
    AddTurnos,
    AllTurnos,
    confirmarTurno,
    AusenciaAnunciadaTurno
}
