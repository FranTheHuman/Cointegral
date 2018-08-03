const mongoose = require('mongoose');

const Schema = mongoose.Schema
const AfeccionesSchema = new Schema({
    Paciente: { type: Schema.ObjectId, ref: "Paciente" },
    FechaTurno: Date,
    Odontologo: { type: Schema.ObjectId, ref: "Odontologo" },
    FechaAlta: {
        type: Date,
        default: Date.now
    },
    Asistio: { type: Boolean, default: true},
    AvisoAusencia: { type: Boolean, default: false},
    CanceladoConTiempo: { type: Boolean, default: false},
})

module.exports = mongoose.model('Afecciones', AfeccionesSchema)