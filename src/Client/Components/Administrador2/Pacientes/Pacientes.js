import React, { Component } from 'react';
import BusqedaPaciente from './Busqueda/Busqueda';
import TablaPacientes from './Tabla/Tabla';
class Pacientes extends Component {

    constructor() {
        super();
        this.state = {
            Paciente: [],
            ObraSocial: [],
            NombreBuscar: '',
            Dni: '',
            Apellido: ''
        }; 
        this.fetchPacientes = this.fetchPacientes.bind(this);  
        this.fetchObraSociales = this.fetchObraSociales.bind(this);  
    }

    fetchPacientes() { 
        fetch('/api/Pacientes')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Paciente: data}); 
            } );
    }
    fetchObraSociales() { 
        fetch('/api/ObraSocial')  
            .then(res => res.json())
            .then(data => { 
                this.setState({ObraSocial: data}); 
            } );
    }
    search = (e) => {  
            fetch(`/api/Pacientes/${this.state.NombreBuscar}`)  
                .then(res => res.json())
                .then(data => { 
                    this.setState({Paciente: data}); 
                } ); 
            e.preventDefault();
    }
    componentDidMount(){
        this.fetchPacientes();
        this.fetchObraSociales();
    }
    handleChange = (e) => {
        const  { value }  = e.target;
        this.setState({
            NombreBuscar: value
        })  
    }
    NombreObraSocial(id, array) {
        array.map(i => {
            if(i._id == id){
                return (i.Nombre);
            } else return "No Datos";
        });
    }

    render(){
        return(
            <div>
                <BusqedaPaciente handleChange={this.handleChange} NombreBuscar={this.state.NombreBuscar} search={this.search}/>
                <TablaPacientes  Paciente={this.state.Paciente} ObraSocial={this.state.ObraSocial} NombreObraSocial={this.NombreObraSocial}/>
            </div>
        )
    }
}

export default Pacientes;
