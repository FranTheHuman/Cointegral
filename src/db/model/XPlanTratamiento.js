const mongoose = require('mongoose');

const Schema = mongoose.Schema
const PlanTratamientoSchema = new Schema({
    Paciente: { type: Schema.ObjectId, ref: "Paciente" },
    Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" },
    Odontologo: { type: Schema.ObjectId, ref: "Odontologo" },
    NumPlan: Number,
    Observaciones: String,
    Turnos: Number,
    Estado: { type: Boolean, default: false}
})

module.exports = mongoose.model('PlanTratamiento', PlanTratamientoSchema)

