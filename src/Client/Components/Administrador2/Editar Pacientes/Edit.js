import React, { Component } from 'react';
import FichaPersonal from './Columnas/FichaPersonal';
import Columna1 from './Columnas/Columna1';
import Columna2 from './Columnas/Columna2';
import Columna3 from './Columnas/Columna3'; 
import Val from '../../../../public/js/Validacion/index';
class Edit extends Component {
    constructor() {
        super();
        this.state = {
            NuevoPaciente: [
                { 
                    _id: "", Personal: { Nombre: "", Apellido: "", ObraSocial: "", NºAfil:  "", FechaNac: "", Documento: 0, Telefono: 0, Email: "", Domicilio: "", EstadoCivil: "" }, 
                    HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                                       EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}} 
                }
            ],
            ErrorVarialbe: null, 
            ObraSocial: []
        };   
    }
    EditPaciente = (event) => {
        let NewPCopy = Object.assign({}, this.state.NuevoPaciente);  
        if(  // Validamos los datos personales
            Val.ValidarNombres(NewPCopy.Personal.Nombre) == false ||
            Val.ValidarNombres(NewPCopy.Personal.Apellido) == false ||
            Val.ValidarDNI(NewPCopy.Personal.NºAfil) == false || 
            Val.ValidarDNI(NewPCopy.Personal.Documento) == false ||
            Val.ValidarEstadoCivil(NewPCopy.Personal.EstadoCivil) == false 
        ) { this.setState({ErrorVarialbe: true}); event.preventDefault(); return null; }
        else {
            fetch(`/api/Paciente/${this.state.NuevoPaciente[0]._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.NuevoPaciente[0]),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({NuevoPaciente: [
                        { 
                            _id: "", Personal: { Nombre: "", Apellido: "", ObraSocial: "", NºAfil:  "", FechaNac: "", Documento: "", Telefono: "", Email: "", Domicilio: "", EstadoCivil: "" }, 
                            HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                                               EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}} 
                        }
                    ], ErrorVarialbe: false}); 
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ErrorVarialbe: true}); 
                });
                event.preventDefault();  
        }        
    }
    // FUNCION PARA OBTENER LAS OBRAS SOCIALES
    fetchObraSociales = () => { 
        fetch(`/api/ObraSocial`)  
            .then(res => res.json())
            .then(data => { 
                this.setState({ObraSocial: data});
            } );
    }
    fetchPaciente = (id) => { 
        fetch(`/api/Paciente/${id}`)  
            .then(res => res.json())
            .then(data => { 
                this.setState({NuevoPaciente: data});
            } );
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.fetchPaciente(id);
        this.fetchObraSociales();
    }
    // FUNCION PARA MOSTREAR UNA MENSAJE DE ERROR SI LA CARGA TUVO UN PROBLEMA O DE SUCCESS SI LA CARGA FUE SATISFACTORIA
    MensajeFunction = () => {
        if(this.state.ErrorVarialbe) {
            return (
                <div className="alert alert-danger" role="alert">
                    Un Error ah ocurrido en la carga del paciente, Verifique que los datos ingresados sean los correctos :c
                </div>
            )
        } else if(this.state.ErrorVarialbe == false) {
            return (
                <div className="alert alert-success" role="alert">
                    Paciente cargado correctamente UwU
                </div>
            )
        } else return null
    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> Personal
    handleChangePaciente = (e) => { 
        const  { name, value }  = e.target;  
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy[0].Personal[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});

    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> HistoriaClinica
    handleChangeColumna123 = (e) => { 
        const  { name, value, type, checked }  = e.target; 
         if (type == 'checkbox') {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy[0].HistoriaClinica[name] = checked;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});

         } 
         else {           
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy[0].HistoriaClinica[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
         } 
    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> EstadoDeTejidosBlandos
    handleChangeColumna3 = (e) => {
        const  { name, value, type, checked }  = e.target; 
        if (type == 'checkbox') {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy[0].HistoriaClinica.EstadoDeTejidosBlandos[name] = checked;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
        } else {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy[0].HistoriaClinica.EstadoDeTejidosBlandos[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
        }
    }
    render(){
        return(
            <form onSubmit={this.EditPaciente} id="FormularioPacientes">
            <legend id="TITULOFORMULARIO">Editar Paciente</legend>
            {this.MensajeFunction()}
                <div className="col-sm-12">
                    <div className="row">
                        <FichaPersonal handleChange={this.handleChangePaciente} ObraSocial={this.state.ObraSocial} NuevoPaciente={this.state.NuevoPaciente[0]}/>
                        <Columna1 handleChange={this.handleChangeColumna123} NuevoPaciente={this.state.NuevoPaciente[0]}/>
                        <Columna2 handleChange={this.handleChangeColumna123} NuevoPaciente={this.state.NuevoPaciente[0]}/>
                        <Columna3 handleChange={this.handleChangeColumna123} handleChangeColumna3={this.handleChangeColumna3} NuevoPaciente={this.state.NuevoPaciente[0]}/>
                    </div>
                </div>              
            </form>
        )
    }
}

export default Edit;
