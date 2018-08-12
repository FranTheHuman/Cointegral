/****************************************
TODO LO REFERIDO A LOS ODONTOLOGOS (RUTAS)
****************************************/

/*************************************************
TRAEMOS EL SCHEMA DE ODONTOLOGOS DE LA CARPETA DB
*************************************************/
const Odontologo = require('../db/model/Odontologos');

const AllOdontologos = async (req, res) => {

    const Respuesta = await Odontologo.find();
    console.log(Respuesta);
    res.json(Respuesta); 

};

const AddOdontologo = async (req, res) => {

    const NuevoOdontologo = req.body; 
    const NewOdontologo = new Odontologo(NuevoOdontologo);
    await NewOdontologo.save();
    console.log(NewOdontologo);
    res.json({status: 'Odontologo Saved'});

};

const DeleteOdontologo = async (req, res) => {

    const id = req.params.id  
    await Odontologo.findByIdAndRemove(id);
    res.json({status: 'Odontologo Deleted'});

};

const EditOdontologo = async (req, res) => {

    const OdontologoEditado = req.body;
    const id = req.params.id;
    await Odontologo.findByIdAndUpdate(id, OdontologoEditado);
    res.json({status: 'Odontologo Updated'});

};

module.exports = {
    EditOdontologo,
    DeleteOdontologo,
    AddOdontologo,
    AllOdontologos
}

