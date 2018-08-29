import React, { Component } from 'react';
import BusqedaPaciente from './Busqueda/Busqueda';
import TablaPacientes from './Tabla/Tabla';
class Pacientes extends Component {

    constructor() {
        super();
        this.state = {
            Paciente: [],
            ObraSocial: [],
            ParametroBuscar: ''
        };  
    }
    fetchPacientes = () => { 
        fetch('/api/Pacientes')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Paciente: data}); 
            } );
    }
    fetchObraSociales = () => { 
        fetch('/api/ObraSocial')  
            .then(res => res.json())
            .then(data => { 
                this.setState({ObraSocial: data}); 
            } );
    }
    search = (e) => {  
        fetch(`/api/Pacientes/${this.state.ParametroBuscar}`)  
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
            ParametroBuscar: value
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
                <BusqedaPaciente handleChange={this.handleChange} ParametroBuscar={this.state.ParametroBuscar} search={this.search}/>
                <TablaPacientes  Paciente={this.state.Paciente} ObraSocial={this.state.ObraSocial} NombreObraSocial={this.NombreObraSocial}/>
            </div>
        )
    }
}

export default Pacientes;
