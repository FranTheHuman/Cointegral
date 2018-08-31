import React, { Component } from 'react';
import FichaPersonal from './Columnas/FichaPersonal';
import Columna1 from './Columnas/Columna1';
import Columna2 from './Columnas/Columna2';
import Columna3 from './Columnas/Columna3'; 
import Val from '../../../../public/js/Validacion/index';
class AltaPaciente extends Component {
    constructor() {
        super();
        this.state = {
            NuevoPaciente: { 
                             Personal: { Nombre: "", Apellido: "", ObraSocial: "5b6afe88a365b446281df6f3", NºAfil:  "", FechaNac: "", Documento: "", Telefono: "", Email: "", Domicilio: "", EstadoCivil: "" }, 
                             HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                                                EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}} 
                           }, 
            ErrorVarialbe: null, 
            ObraSocial: []
        };    
    }
    // FUNCION PARA AGREGAR UN PACIENTE
    addPaciente = (event) => {
        let NewPCopy = Object.assign({}, this.state.NuevoPaciente);  
        if(  // Validamos los datos personales
            Val.ValidarNombres(NewPCopy.Personal.Nombre) == false ||
            Val.ValidarNombres(NewPCopy.Personal.Apellido) == false ||
            Val.ValidarDNI(NewPCopy.Personal.NºAfil) == false || 
            Val.ValidarDNI(NewPCopy.Personal.Documento) == false ||
            Val.ValidarEstadoCivil(NewPCopy.Personal.EstadoCivil) == false 
        ) { this.setState({ErrorVarialbe: true}); event.preventDefault(); return null; }
        else {
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
                    this.setState({NuevoPaciente: { 
                        Personal: { Nombre: "", Apellido: "", ObraSocial: "5b6afe88a365b446281df6f3", NºAfil:  "", FechaNac: "", Documento: 0, Telefono: 0, Email: "", Domicilio: "", EstadoCivil: "" }, 
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
    }
    // FUNCION PARA CONVERTIR LA PRIMERA LETRA EN MAYUSCULA
    MaysPrimera = (string) => { 
        const parametro = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        return parametro;
    }
    // FUNCION PARA OBTENER LAS OBRAS SOCIALES
    fetchObraSociales = () => { 
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
            if(name === "Nombre" || name == "Apellido" || name == "EstadoCivil"){ 
                let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
                NuevoPacienteCopy.Personal[name] = this.MaysPrimera(value);                         
                this.setState({NuevoPaciente:NuevoPacienteCopy});
                console.log(`${name} ${this.MaysPrimera(value)}  // ${this.state.NuevoPaciente.Personal[name]}`);
            } else {
                let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
                NuevoPacienteCopy.Personal[name] = value;                         
                this.setState({NuevoPaciente:NuevoPacienteCopy});
                console.log(`${name} ${value}  // ${this.state.NuevoPaciente.Personal[name]}`); 
            }             
    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> HistoriaClinica
    handleChangeColumna123 = (e) => { 
        const  { name, value, type, checked }  = e.target; 
         if (type == 'checkbox') {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica[name] = checked;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
         } 
         else {           
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
         } 
    }
    // FUNCION PARA SETEAR LOS ESTADOS CORRESPONDIENTES CON LA COLUMNA 3 --> EstadoDeTejidosBlandos
    handleChangeColumna3 = (e) => {
        const  { name, value, type, checked }  = e.target; 
        if (type == 'checkbox') {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica.EstadoDeTejidosBlandos[name] = checked;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
        } else {
            let NuevoPacienteCopy = Object.assign({}, this.state.NuevoPaciente);     
            NuevoPacienteCopy.HistoriaClinica.EstadoDeTejidosBlandos[name] = value;                         
            this.setState({NuevoPaciente:NuevoPacienteCopy});
        }
    }
    render(){
        return(
            <form onSubmit={this.addPaciente} id="FormularioPacientes">
            <legend id="TITULOFORMULARIO">Nuevo Paciente</legend>
            {this.MensajeFunction()}
                <div className="col-sm-12">
                    <div className="row">
                        <FichaPersonal 
                            handleChange={this.handleChangePaciente} 
                            ObraSocial={this.state.ObraSocial} 
                            NuevoPaciente={this.state.NuevoPaciente}
                        />
                        <Columna1 
                            handleChange={this.handleChangeColumna123} 
                            NuevoPaciente={this.state.NuevoPaciente}
                        />
                        <Columna2 
                            handleChange={this.handleChangeColumna123} 
                            NuevoPaciente={this.state.NuevoPaciente}
                        />
                        <Columna3 
                            handleChange={this.handleChangeColumna123} 
                            handleChangeColumna3={this.handleChangeColumna3} 
                            NuevoPaciente={this.state.NuevoPaciente}
                        />
                    </div>
                </div>              
            </form>
        )
    }
}

export default AltaPaciente;
