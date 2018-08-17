/****************************************
TODO LO REFERIDO A LOS PACIENTES (RUTAS)
****************************************/

/*************************************************
TRAEMOS EL SCHEMA DE PACIENTES DE LA CARPETA DB
*************************************************/
const Paciente = require('../db/model/Pacientes');

const AllPacientes = async (req, res) => {

    const Respuesta = await Paciente.find();
    console.log(Respuesta);
    res.json(Respuesta); 

};

const OnePaciente = async (req, res) => {

    const id = req.params.id 
    const Respuesta = await Paciente.find({"_id":id});
    console.log(Respuesta);
    res.json(Respuesta); 

};

const AddPaciente = async (req, res) => {

    const NuevoPaciente = req.body; 
    const NewPaciente = new Paciente(NuevoPaciente);
    await NewPaciente.save();
    console.log(NewPaciente);
    res.json({status: 'Paciente Saved'});

};

const DeletePaciente = async (req, res) => {

    const id = req.params.id  
    await Paciente.findByIdAndRemove(id);
    res.json({status: 'Paciente Deleted'});

};

const EditPaciente = async (req, res) => {

    const PacienteEditado = req.body;
    const id = req.params.id;
    await Paciente.findByIdAndUpdate(id, PacienteEditado);
    res.json({status: 'Paciente Updated'});

};

// Buscar Paciente Por Nombre
const PacientePorNombre = async (req, res) => {

    const PacienteBuscar = req.params.Nombre; 
    const Respuesta = await Paciente.findOne( {"Personal": { "Nombre": PacienteBuscar }} );
    console.log(Respuesta);
    res.json(Respuesta); 

};

module.exports = {
    AddPaciente,
    AllPacientes,
    DeletePaciente,
    EditPaciente,
    PacientePorNombre,
    OnePaciente
}












/*

{
	"Personal": {
        "Nombre": "Lautaro",
        "Apellido": "Perrotta",
        "ObraSocial": "5b6afe88a365b446281df6f3",
        "NºAfil":  145215,
        "FechaNac": "1998/09/14",
        "Edad": 19,
        "Documento": 41411125,
        "Telefono": 3534821618,
        "Email": "Lautaro_p14@hotmail.com",
        "Domicilio": "Independencia 1235",
        "EstadoCivil": "Soltero"
    },
    "HistoriaClinica": {
        "MedicoCabecera": "Dr. Roberto Montreal",
        "ServUrgenciaBool": "true",
        "ServUrgen": "Emi",
        "HospitalizacionBool": "true",
        "HospitalizacionRazon": "Quebradura expuesta",
        "TratamientoMedicoBool": "true",
        "TratamientoMedicoRazon": "Sida",
        "Alergias": ["Mani", "Tomate", "Chocolate"],
        "Afecciones": { 
                "Problemas cardiacos": "true", 
                "Presion sanguinea alta": "true",
                "Presion sanguinea baja": "true",
                "Enfermedades venereas": "true",
                "Fiebre Reumatuca": "true",
                "Hepatitis": "true",
                "Ulcera de estomago": "true", 
                "Dolor de cabeza": "true", 
                "Sida": "true", 
                "Epilepsia": "true", 
                "Artitris": "true", 
                "Cancer": "true", 
                "Diabetes": "true", 
                "Aleteraciones Nerviosas": "true", 
                "Sinusitis": "true", 
                "Otras": "true"           
        },
        "Medicamentos": ["Bayaspirina", "Hiuprofeno"],
        "FumaBool": "true",
        "FumaCuanto": 14,
        "BebeBool": "true",
        "BebeCuanto": 25,
        "EmbarazadaBool":  "true",
        "EmbarazadaTiempo": 7,
        "ProblemaRadiante": "true",
        "Otros": "Hola mama",
        "Observaciones": "El sujeto es un genio",
        "DificultadHablar": "true",
        "DificultadMasticar": "true",
        "DificultadAbrirBoca":"true",
        "MovilidadEnDientes": "true",
        "EnciasSangrantes": "true",
        "PusBoca": "true",
        "PusDonde": "Encias",
        "EstadoHigieneBucal": "buena",
        "EstadoDeTejidosBlandos": {
            "Lengua": "Buena",
            "Carillos": "Buena",
            "PresentaSarro": "true",
            "Labios": "Buena",
            "PisoDeBoca": "Buena",
            "EstadoGfngivoPeropdontal": "Buena",
            "CantidadDientes": "30",
            "EnfermedadPeriodental": "Baba"
        }   
    },
    "Odontograma": {
        "Pieza11": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" }  ],
        "Pieza12": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza13": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ], 
        "Pieza14": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00599544543210ab9e4e" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza15": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00679544543210ab9e4f" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza16": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza17": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza18": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza21": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza22": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00679544543210ab9e4f" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza23": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00679544543210ab9e4f" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza24": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza25": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza26": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00709544543210ab9e50" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza27": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza28": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza31": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza32": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza33": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza34": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza35": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza36": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza37": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza38": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza41": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza42": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza43": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza44": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza45": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza46": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza47": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b003b9544543210ab9e4c"  }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ],
        "Pieza48": [ { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento":  "5b6b003b9544543210ab9e4c" }, { "Fecha": "1998/09/14", "Caras": ["Lingual", "Mesial"], "Estado": "Esto es el Estado", "Tratamiento": "5b6b00219544543210ab9e4b" } ]
    }
}

*/