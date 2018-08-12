import React, { Component } from 'react';

import Mensaje from './Mensaje/Mensaje.js';
import Turnos from './Turnos/Turnos';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            Turnos: [],
            Pacientes: []       
        };  
        this.fetchTurnos = this.fetchTurnos.bind(this);
        this.TipoMensaje = this.TipoMensaje.bind(this);
        this.editTurnos = this.editTurnos.bind(this);
    }
    fetchTurnos() { 
        fetch('/api/Turnos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Turnos: data}); 
            } );
    } 
    editTurnos(id) {
        fetch(`/api/TurnosConfirmar/${id}`, {
                method: 'PUT',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }  
            })
        .then(this.fetchTurnos())
    }
    TipoMensaje(){
        let contador = 0;
        this.state.Turnos.map(turnos => { //RECORREMOS LOS TURNOS BUSCANDO TURNOS DEL DIA DE HOY
            const turno = new Date(turnos.FechaTurno).setHours(0,0,0,0); // DIA DEL TURNO
            const hoy = new Date().setHours(0,0,0,0);           
            if (turno == hoy) { // SI el turno y el dia de hoy son iguales
                if (turno.Asistio == false) { // SI el turno aun no esta confirmado
                    contador++;
                }
            }             
        })
        if(contador > 0){ // si el contador aumento 
            return true
        } else return false
    }
    componentWillMount(){
        this.fetchTurnos();
    }
    render(){
        return(
            <div>
                <Mensaje TipoMensaje={this.TipoMensaje}/>
                <Turnos Turnos={this.state.Turnos} editTurnos={this.editTurnos}/>
            </div>
        )
    }
}

export default Home;
