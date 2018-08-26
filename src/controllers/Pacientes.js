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
// Buscar Paciente
const PacienteBuscar = async (req, res) => {
    const {Parametro} = req.params;
    const parametro = Parametro.charAt(0).toUpperCase() + Parametro.slice(1); 
    Paciente.find({"Personal.Nombre": parametro }, (err, paciente)=>{
        if(err){return res.json({"Error status": "true"});}
        if(paciente.length === 0){
            Paciente.find({"Personal.Apellido": parametro}, (err, paciente2)=>{
                if(err){return res.json({"Error status": "true"});}
                if(paciente2.length === 0){
                    Paciente.find({"Personal.Documento": Parametro}, (err, paciente3)=>{
                        if(err){return res.json({"Error status": "true"});}
                        if(paciente3.length === 0){
                            res.json({"Error status": "true"});
                        } else {
                            console.log(paciente3);
                            res.json(paciente3); 
                        }
                    })
                } else {
                    console.log(paciente2);
                    res.json(paciente2); 
                }
            })
        } else {
            console.log(paciente);
            res.json(paciente); 
        }
    })
};

module.exports = {
    AddPaciente,
    AllPacientes,
    DeletePaciente,
    EditPaciente,
    PacienteBuscar,
    OnePaciente
}











