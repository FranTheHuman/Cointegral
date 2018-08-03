const mongoose = require('mongoose');

const Schema = mongoose.Schema
const TratamientoSchema = new Schema({
    Nombre: String,
    Precio: Number,
    FechaAlta: {
        type: Date,
        default: Date.now
    },
    VecesHecho: Number
})

module.exports = mongoose.model('Tratamiento', TratamientoSchema)



/* 
    Consultas ( No en Odontograma )
    Limpieza 
    Prótesis dental
    Carillas dentales
    Estética dental
    Limpieza dental avanzada
    Lesion de Caries
    Infeccion Pulpar
    Fractura
    Extraccion
    Ausente
    Restauracion
    Endodoncia
    Corona
    Implante
    Perno muñon
    Otro

    Ortodoncia
    Ortodoncia infantil
*/