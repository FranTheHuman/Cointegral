 /****************************************
 TODO LO REFERIDO A LOS TURNOS (RUTAS)
 ****************************************/

 /*************************************************
 TRAEMOS EL SCHEMA DE TURNOS DE LA CARPETA DB
 *************************************************/
 const Turnos = require('../db/model/Turnos');

 const AllTurnos = async (req, res) => {

    const turnos = await Turnos.find();
    console.log(turnos);
    res.json(turnos); 

 }

 const AddTurnos = async (req, res) => {

     const NuevoTurno = { Paciente: req.body.Paciente, FechaTurno: req.body.FechaTurno}; 
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

const EditTurnos = async (req, res) => {

    const TurnoEditado = req.body;
    const id = req.params.id;
    await Turnos.findByIdAndUpdate(id, TurnoEditado);
    res.json({status: 'Turno Updated'});

};

module.exports = {
    EditTurnos,
    DeleteTurnos,
    AddTurnos,
    AllTurnos
}
