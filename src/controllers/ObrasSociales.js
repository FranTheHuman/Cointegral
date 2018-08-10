/****************************************
TODO LO REFERIDO A LAS OBRAS SOCIALES (RUTAS) - LISTO
****************************************/

/*************************************************
TRAEMOS EL SCHEMA DE OBRA SOCIAL DE LA CARPETA DB
*************************************************/
const ObraSociales = require('../db/model/ObraSocial');

/*************************************************
FUNCION PARA OBTENER TODAS LAS OBRAS SOCALES - GET
*************************************************/
const AllObrasSociales = async (req, res) => {

    const Obrasociales = await ObraSociales.find();
    console.log(Obrasociales);
    res.json(Obrasociales); 

}
/*************************************************
FUNCION PARA AGREGAR UNA OBRA SOCIAL - POST
*************************************************/
const AddObraSocial = async (req, res) => {

    const NuevaObraSocial = { Nombre: req.body.Nombre  } 
    const NewObraSocial = new ObraSociales(NuevaObraSocial);
    await NewObraSocial.save();
    console.log(NewObraSocial);
    res.json({status: 'Obra Social Saved'});

}
/*************************************************
FUNCION PARA ELIMINAR UNA OBRA SOCIAL - DELETE
*************************************************/
const DelteObraSocial = async (req, res) => {

    const id = req.params.id  
    await ObraSociales.findByIdAndRemove(id);
    res.json({status: 'Obra Social Deleted'});

}
/*************************************************
EXPORTAMOS LAS FUNCIONES PARA PODER UTILIZARLAS EN LAS RUTAS
*************************************************/
module.exports = {
    AllObrasSociales,
    AddObraSocial,
    DelteObraSocial
}