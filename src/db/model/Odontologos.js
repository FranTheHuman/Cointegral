const mongoose = require('mongoose');

const Schema = mongoose.Schema
const OdontologoSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Documento: Number,
    Telefono: Number,
    Email: String,
    Domicilio: String,
    Especialidad: String,
    FechaAlta: {
        type: Date,
        default: Date.now
    },
    Turnos: [
        { 
            type: Schema.ObjectId, ref: "Turnos" 
        }
    ]
})

module.exports = mongoose.model('Odontologo', OdontologoSchema)