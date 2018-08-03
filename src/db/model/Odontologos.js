const mongoose = require('mongoose');

const Schema = mongoose.Schema
const OdontologoSchema = new Schema({
    NombreApellido: String,
    FechaNac: Date,
    Edad: Number,
    Documento: Number,
    Telefono: Number,
    Email: String,
    Domicilio: String,
    FechaAlta: {
        type: Date,
        default: Date.now
    },
    Turnos: [
        {
            Fecha: Date
        }
    ]
})

module.exports = mongoose.model('Odontologo', OdontologoSchema)