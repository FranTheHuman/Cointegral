const mongoose = require('mongoose');
var ObraSocial = mongoose.model('ObraSocial');

const Schema = mongoose.Schema

const PacienteSchema = new Schema({
    Personal: {
        Nombre: String,
        Apellido: String,
        ObraSocial: { type: Schema.ObjectId, ref: "ObraSocial" },
        NºAfil:  Number,
        FechaNac: Date,
        Edad: Number,
        Documento: Number,
        Telefono: Number,
        Email: String,
        Domicilio: String,
        EstadoCivil: String,
        FechaAlta: {
            type: Date,
            default: Date.now
        }
    },
    HistoriaClinica: {
        MedicoCabecera: String,
        ServUrgenciaBool: { type: Boolean, default: false},
        ServUrgen: String,
        HospitalizacionBool: { type: Boolean, default: false},
        HospitalizacionRazon: String,
        TratamientoMedicoBool: { type: Boolean, default: false},
        TratamientoMedicoRazon: String,
        Alergias: String,
        Afecciones: String,
        Medicamentos: String,
        FumaBool: { type: Boolean, default: false},
        FumaCuanto: Number,
        BebeBool: { type: Boolean, default: false},
        BebeCuanto: Number,
        EmbarazadaBool:  { type: Boolean, default: false},
        EmbarazadaTiempo: Number,
        ProblemaRadiante: { type: Boolean, default: false},
        Otros: String,
        Observaciones: String,
        DificultadHablar: { type: Boolean, default: false},
        DificultadMasticar: { type: Boolean, default: false},
        DificultadAbrirBoca: { type: Boolean, default: false},
        MovilidadEnDientes: { type: Boolean, default: false},
        EnciasSangrantes: { type: Boolean, default: false},
        PusBoca: { type: Boolean, default: false},
        PusDonde: String,
        EstadoHigieneBucal: String,
        EstadoDeTejidosBlandos: {
            Lengua: String,
            Carillos: String,
            PresentaSarro: { type: Boolean, default: false},
            Labios: String,
            PisoDeBoca: String,
            EstadoGfngivoPeropdontal: String,
            CantidadDientes: String,
            EnfermedadPeriodental: String
        }   
    },
    Odontograma: {
        Pieza11: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza12: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza13: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ], 
        Pieza14: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza15: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza16: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza17: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza18: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza21: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza22: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza23: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza24: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza25: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza26: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza27: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza28: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza31: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza32: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza33: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza34: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza35: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza36: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza37: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza38: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza41: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza42: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza43: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza44: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza45: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza46: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza47: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ],
        Pieza48: [ { Fecha: Date, Caras:  { PzComplet: Boolean, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: String, Tratamiento: { type: Schema.ObjectId, ref: "Tratamiento" }, Observaciones: String } ]
    },
})

module.exports = mongoose.model('Paciente', PacienteSchema)