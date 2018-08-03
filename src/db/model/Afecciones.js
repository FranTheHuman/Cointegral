const mongoose = require('mongoose');

const Schema = mongoose.Schema
const AfeccionesSchema = new Schema({
    Nombre: String, 
    FechaAlta: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Afecciones', AfeccionesSchema)

// DATOS PARA REPORTES PRINCIPALMENTE

/* 
    Problemas cardiacos
    Presion sanguinea alta
    Presion sanguinea baja
    Enfermedades venereas
    Fiebre Reumatuca
    Hepatitis
    Ulcera de estomago
    Dolor de cabeza
    Sida
    Epilepsia
    Artitris
    Cancer
    Diabetes
    Aleteraciones Nerviosas
    Sinusitis
    Otras
*/