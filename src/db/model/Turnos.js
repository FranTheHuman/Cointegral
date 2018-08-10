const mongoose = require('mongoose');

const Schema = mongoose.Schema
const TurnosSchema = new Schema({
    Paciente: { type: Schema.ObjectId, ref: "Paciente" },
    FechaTurno: Date,
    FechaAlta: {
        type: Date,
        default: Date.now
    },
    Asistio: { type: Boolean, default: true},
    AvisoAusencia: { type: Boolean, default: false}, // Ausencia Anunciada 
    CanceladoConTiempo: { type: Boolean, default: false},   // X
    // Duracion del turno 
})

module.exports = mongoose.model('Turnos', TurnosSchema)