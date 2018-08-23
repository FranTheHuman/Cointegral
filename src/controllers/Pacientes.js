/****************************************
TODO LO REFERIDO A LOS PACIENTES (RUTAS)
****************************************/

/*************************************************
TRAEMOS EL SCHEMA DE PACIENTES DE LA CARPETA DB
*************************************************/
const Paciente = require('../db/model/Pacientes');

const AllPacientes = async (req, res) => {

    const Respuesta = await Paciente.find();
    console.log(Respuesta);
    res.json(Respuesta); 

};

const OnePaciente = async (req, res) => {

    const id = req.params.id 
    const Respuesta = await Paciente.find({"_id":id});
    console.log(Respuesta);
    res.json(Respuesta); 

};

const AddPaciente = async (req, res) => {

    const NuevoPaciente = req.body; 
    const NewPaciente = new Paciente(NuevoPaciente);
    await NewPaciente.save();
    console.log(NewPaciente);
    res.json({status: 'Paciente Saved'});

};

const DeletePaciente = async (req, res) => {

    const id = req.params.id;  
    await Paciente.findByIdAndRemove(id);
    res.json({status: 'Paciente Deleted'});

};

const EditPaciente = async (req, res) => {

    const PacienteEditado = req.body;
    const id = req.params.id;
    await Paciente.findByIdAndUpdate(id, PacienteEditado);
    res.json({status: 'Paciente Updated'});

};

// Buscar Paciente Por Nombre
const PacientePorNombre = async (req, res) => {

    const PacienteBuscar = req.params.Nombre; 
    const Respuesta = await Paciente.findOne( {"Personal": { "Nombre": PacienteBuscar }} );
    console.log(Respuesta);
    res.json(Respuesta); 

};

module.exports = {
    AddPaciente,
    AllPacientes,
    DeletePaciente,
    EditPaciente,
    PacientePorNombre,
    OnePaciente
}











