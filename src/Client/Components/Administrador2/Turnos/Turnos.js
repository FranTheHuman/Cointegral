import React, { Component } from 'react';
import Especialistas from './Especialistas/Especialistas';
import ModalTurno from './Modales/ModalTurno';
import ModalDesbloqueo from './Modales/ModalDesbloqueo';
import TablaTurnos from './Tabla/Tabla';
class Turnos extends Component {
    constructor() {
        super();
        this.state = {
            Odontologo: [],       
        }; 
        this.fetchOdontologos = this.fetchOdontologos.bind(this);     
    }

    fetchOdontologos() { 
        fetch('/api/Odontologos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Odontologo: data}); 
            } );
    } 
    componentDidMount(){
        this.fetchOdontologos(); 
    }
    render(){
        return(
            <div>
                <Especialistas Odontologo={this.state.Odontologo}/>
                <ModalTurno/>
                <ModalDesbloqueo/>
                <TablaTurnos/>
            </div>
        )
    }
}

export default Turnos;
