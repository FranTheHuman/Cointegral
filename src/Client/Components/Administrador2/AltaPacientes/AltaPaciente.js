import React, { Component } from 'react';
import FichaPersonal from './Columnas/FichaPersonal';
import Columna1 from './Columnas/Columna1';
import Columna2 from './Columnas/Columna2';
import Columna3 from './Columnas/Columna3'; 
class AltaPaciente extends Component {
    constructor() {
        super();
        this.state = {
            NuevoPaciente: { 
                             Personal: { Nombre: "", Apellido: "", ObraSocial: "", NºAfil:  "", FechaNac: "", Documento: 0, Telefono: 0, Email: "", Domicilio: "", EstadoCivil: "" }, 
                             HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                                                EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}} 
                           }, 
            ErrorVarialbe: null, 
            ObraSocial: []
        };   
        this.addPaciente = this.addPaciente.bind(this); 
        this.MensajeFunction = this.MensajeFunction.bind(this); 
    }
    // FUNCION PARA AGREGAR UN PACIENTE
    addPaciente(event){
        fetch('/api/Paciente', {
                method: 'POST',
                body: JSON.stringify(this.state.NuevoPaciente),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({NuevoPaciente: { 
                        Personal: { Nombre: "", Apellido: "", ObraSocial: "", NºAfil:  "", FechaNac: "", Documento: 0, Telefono: 0, Email: "", Domicilio: "", EstadoCivil: "" }, 
                        HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                                           EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}} 
                      }, ErrorVarialbe: false}); 
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ErrorVarialbe: true}); 
                });
        event.preventDefault();
    }
    // FUNCION PARA OBTENER LAS OBRAS SOCIALES
    fetchObraSociales() { 
        fetch('/api/ObraSocial')  
            .then(res => res.json())
            .then(data => { 
                this.setState({ObraSocial: data});
            } );
    }
    componentDidMount(){
        this.fetchObraSociales();
    }
    // FUNCION PARA MOSTREAR UNA MENSAJE DE ERROR SI LA CARGA TUVO UN PROBLEMA O DE SUCCESS SI LA CARGA FUE SATISFACTORIA
    MensajeFunction(){
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
            NuevoPacienteCopy.Personal[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});

            console.log(`${name} ${value}  // ${this.state.NuevoPaciente.Personal[name]}`);       
    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> HistoriaClinica
    handleChangeColumna123 = (e) => { 
        const  { name, value, type, checked }  = e.target; 
         if (type == 'checkbox') {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica[name] = checked;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});

            console.log(`${name} ${checked}  // ${this.state.NuevoPaciente.HistoriaClinica[name]}`);
         } 
         else {           
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});

            console.log(`${name} ${value}  // ${this.state.NuevoPaciente.HistoriaClinica[name]}`);
         } 
        
    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> EstadoDeTejidosBlandos
    handleChangeColumna3 = (e) => {
        const  { name, value, type, checked }  = e.target; 
        if (type == 'checkbox') {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica.EstadoDeTejidosBlandos[name] = checked;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});

            console.log(`${name} ${checked}  // ${this.state.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos[name]}`);
        } else {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica.EstadoDeTejidosBlandos[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
    
            console.log(`${name} ${value}  // ${this.state.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos[name]}`);
        }
    }
    render(){
        return(
            <form onSubmit={this.addPaciente} id="FormularioPacientes">
            <legend id="TITULOFORMULARIO">Nuevo Paciente</legend>
            {this.MensajeFunction()}
                <div className="col-sm-12">
                    <div className="row">
                        <FichaPersonal handleChange={this.handleChangePaciente} ObraSocial={this.state.ObraSocial} NuevoPaciente={this.state.NuevoPaciente}/>
                        <Columna1 handleChange={this.handleChangeColumna123} NuevoPaciente={this.state.NuevoPaciente}/>
                        <Columna2 handleChange={this.handleChangeColumna123} NuevoPaciente={this.state.NuevoPaciente}/>
                        <Columna3 handleChange={this.handleChangeColumna123} handleChangeColumna3={this.handleChangeColumna3} NuevoPaciente={this.state.NuevoPaciente}/>
                    </div>
                </div>              
            </form>
        )
    }
}

export default AltaPaciente;
