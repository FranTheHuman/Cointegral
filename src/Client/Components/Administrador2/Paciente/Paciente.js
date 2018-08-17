import React, { Component } from 'react';
import FICHAPERSONAL from './Ficha/FichaPersonal';
import ODONTOGRAMA from './Odontograma/odontograma';
import AREALIZAR from './Tablas/aRealizar';
import REALIZADOS from './Tablas/Realizados';
import MODALHISTORIACLINICA from './Modales/HistoriaClinica';
import MODALHISTORIADIENTE from './Modales/HistorialDiente';
import MODALTRATAMIENTOS from './Modales/OdontogramaTratamientos';
import MODALCARAS from './Modales/OdontogramaCaras';


class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Paciente: [
                {
                    Personal: { Nombre: "", Apellido: "", ObraSocial: "", NºAfil:  "", FechaNac: "", Documento: 0, Telefono: 0, Email: "", Domicilio: "", EstadoCivil: "", FechaAlta: "" }, 
                    HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                               EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}},
                    Odontograma: { 
                                   Pieza11: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza12: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza13: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza14: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza15: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza16: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza17: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza18: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza21: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza22: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza23: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza24: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza25: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza26: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza27: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza28: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza31: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza32: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza33: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza34: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza35: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza36: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza37: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza38: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza41: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza42: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza43: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza44: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza45: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza46: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza47: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza48: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                }
                }
            ],
            ObraSocial: [{Nombre: ""}],
            Tratamientos: [],
            PiezaSeleccionada: "",
            Nuevo: { Fecha: new Date(), Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "A realizar", Tratamiento: "", Observaciones: "" }
        }; 
    }
    // OBTENER PACIENTE
    fetchPaciente = (id) => { 
        fetch(`/api/Paciente/${id}`)  
            .then(res => res.json())
            .then(data => {this.setState({Paciente: data}); console.log(data)})
            .catch(err => console.log(err));
    }
    // EDITAR ODONTOGRAMA
    EditOdontograma = () => {
        this.setState(
                this.state.Paciente[0].Odontograma, { [this.state.PiezaSeleccionada]: {$push: this.state.Nuevo} }
        ),  
        fetch(`/api/Paciente/${this.props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.Paciente[0]),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(err => { console.log(err); });        
    }
    // ACTUALIZAR STATE DE LAS CARAS DE NUEVO(State)
    handleChangeNuevoCaras = (e) => { 
        const  { name, checked }  = e.target;  
            let NuevoCopy = Object.assign({}, this.state.Nuevo);     
            NuevoCopy.Caras[name] = checked;                         
            this.setState({Nuevo:NuevoCopy});

            if(this.state.Nuevo.Caras.PzComplet == true){
                    let NuevoCopy2 = Object.assign({}, this.state.Nuevo);   
                    NuevoCopy2.Caras.Mesial = false;
                    NuevoCopy2.Caras.Distal = false;
                    NuevoCopy2.Caras.Oclusal = false;
                    NuevoCopy2.Caras.Palatina = false;
                    NuevoCopy2.Caras.Lingual = false;
                    NuevoCopy2.Caras.Vestibular = false;                        
                    this.setState({Nuevo:NuevoCopy2});
            }  

            console.log(`${name} ${checked}  // ${this.state.Nuevo.Caras.Mesial}`);       
    }
    // ACTUALIZAR OBSERVACION DE NUEVO(State)
    handleChangeNuevo = (e) => { 
        const  { value }  = e.target;  
            let NuevoCopy = Object.assign({}, this.state.Nuevo);     
            NuevoCopy[Observaciones] = value;                         
            this.setState({Nuevo:NuevoCopy});

            console.log(`${value}  // ${this.state.Nuevo[Observaciones]}`);       
    }
    // OBTENER OBRA SOCIAL
    fetchObraSocial = (id) => { 
        fetch(`/api/ObraSocial/${id}`)  
            .then(res => res.json())
            .then(data => {this.setState({ObraSocial: data});})
            .catch(err => console.log(err));
    }
    // OBTENER TRATAMIENTOS
    fetchTratamientos = () => { 
        fetch(`/api/Tratamientos`)  
            .then(res => res.json())
            .then(data => {this.setState({Tratamientos: data})})
            .catch(err => console.log(err));
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchPaciente(id);
        this.fetchObraSocial(this.state.Paciente[0].Personal.ObraSocial);
        this.fetchTratamientos(); 
    }
    // SELECCIONAR UN DIENTE Y ACTUALIZAR STATE
    handleChangePiezas = (pieza) => { 
        this.setState({
            PiezaSeleccionada: pieza
        })  
    }
    // SELECCIONAR UN TRATAMIENTO Y ACTUALIZAR STATE
    handleChangeTratamientos = (Tratamiento) => { 
        let NuevoCopy = Object.assign({}, this.state.Nuevo);     
        NuevoCopy[Tratamiento] = Tratamiento;                         
        this.setState({Nuevo:NuevoCopy});
    }
    render(){
        return(
            <div>
                <MODALHISTORIACLINICA Paciente={this.state.Paciente[0].HistoriaClinica}/>
                <MODALHISTORIADIENTE/>
                <MODALTRATAMIENTOS Tratamientos={this.state.Tratamientos} handleChangeTratamientos={this.handleChangeTratamientos}/>
                <MODALCARAS EditOdontograma={this.EditOdontograma} handleChangeNuevoCaras={this.handleChangeNuevoCaras} Nuevo={this.state.Nuevo} handleChangeNuevo={this.handleChangeNuevo}/>
                {/* <MODALES/> */}
                <div className="row"> 
                <FICHAPERSONAL Paciente={this.state.Paciente[0].Personal} ObraSocial={this.state.ObraSocial[0].Nombre} id={this.state.Paciente[0]._id}/>
                <ODONTOGRAMA Paciente={this.state.Paciente[0].Odontograma} handleChangePiezas={this.handleChangePiezas}/>
                </div>
                {/* <TABLAS/> */}
                <div className="col-sm-12">
                    <div className="row">
                        <AREALIZAR/>
                        <REALIZADOS/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Paciente;
