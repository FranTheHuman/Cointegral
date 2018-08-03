const mongoose = require('mongoose');

const Schema = mongoose.Schema
const ObraSocialSchema = new Schema({
    Nombre: String, 
    FechaAlta: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ObraSocial', ObraSocialSchema)
