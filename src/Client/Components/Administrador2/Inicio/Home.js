import React, { Component } from 'react';

import Mensaje from './Mensaje/Mensaje.js';
import Turnos from './Turnos/Turnos';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Turnos: [],
            Pacientes: []       
        };   
    }
    // FUNCION PARA OBTENER TODOS LOS TURNOS
    fetchTurnos = () => { 
        fetch('/api/Turnos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Turnos: data}); 
            } );
    } 
    // FUNCION PARA CONFIRMAR EL TURNO
    ConfirmarTurno = (id) => {
        fetch(`/api/TurnosConfirmar/${id}`, {
                method: 'PUT',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }  
            })
        .then(this.fetchTurnos())
    }
    // FUNCION PARA SETEAR LA ASUCENCIA ANUNCIADA : TRUE
    AusenciaAnunciada = (id) => {
        fetch(`api/TurnosAusenciaAnunciada/${id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }  
        })
    .then(this.fetchTurnos())
    }
    // FUNCION PARA SETEAR LA ASUCENCIA ANUNCIADA : FALSE
    AusenciaNoAnunciada = (id) => {
        fetch(`api/TurnosAusenciaAnunciada/${id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }  
        })
    .then(this.fetchTurnos())
    }
    TipoMensaje = () => {
        let contador = 0;
        const hoyDia = new Date().getDate();
        const hoyMes = new Date().getMonth();
        const hoyAño = new Date().getFullYear(); 
        this.state.Turnos.map(turno => { //RECORREMOS LOS TURNOS BUSCANDO TURNOS DEL DIA DE HOY
            const turnoDia = new Date(turno.FechaTurno).getDate();  
            const turnoMes = new Date(turno.FechaTurno).getMonth();
            const turnoAño = new Date(turno.FechaTurno).getFullYear();
            if (hoyDia == turnoDia && hoyMes == turnoMes && hoyAño == turnoAño) { // SI el turno y el dia de hoy son iguales
                if (turno.Asistio == null) { // SI el turno aun no esta ni en false ni en true
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
                <Turnos 
                    Turnos={this.state.Turnos} 
                    ConfirmarTurno={this.ConfirmarTurno} 
                    SetIdPaciente={this.props.SetIdPaciente}
                    AusenciaAnunciada={this.AusenciaAnunciada}
                    AusenciaNoAnunciada={this.AusenciaNoAnunciada}
                />
            </div>
        )
    }
}

export default Home;
