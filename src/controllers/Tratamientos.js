const Tratamientos = require('../db/model/Tratamientos');

const AddTratamiento = async (req, res) => {

    const NuevoTratamiento = { Nombre: req.body.Nombre, Precio: req.body.Precio, VecesHecho: req.body.VecesHecho  } 
    const NewTratamiento = new Tratamientos(NuevoTratamiento);
    await NewTratamiento.save();
    console.log(NewTratamiento);
    res.json({status: 'Tratamientos Saved'});

}

const AllTratamientos = async (req,res) => {

    const tratamientos = await Tratamientos.find();
    console.log(tratamientos);
    res.json(tratamientos); 

}

const DeleteTratamiento = async (req,res) => {

    const id = req.params.id;
    await Tratamientos.findByIdAndRemove(id);
    res.json({status: 'Tratamiento Deleted'});

}

const AumentarVecesEcho = async (req, res) => {

    const id = req.params.id;
    await Tratamientos.update({_id: id }, {$inc:{VecesHecho:1}});
    res.json({status: 'Tratamiento Updated'});

}

module.exports = {
    AddTratamiento,
    AllTratamientos,
    DeleteTratamiento,
    AumentarVecesEcho
} 