const mongoose = require('mongoose');

const Schema = mongoose.Schema
const TurnosSchema = new Schema({
    Paciente: { type: Schema.ObjectId, ref: "Paciente" },
    Especialista: { type: Schema.ObjectId, ref: "Odontologo" },
    FechaTurno: Date,
    FechaAlta: {
        type: Date,
        default: Date.now
    },
    Asistio: { type: Boolean, default: null},
    AusenciaAnunciada: { type: Boolean, default: null},    
    Duracion: String,
})

module.exports = mongoose.model('Turnos', TurnosSchema)