import React, { Component } from 'react';
import Especialistas from './Especialistas/Especialistas';
import ModalTurno from './Modales/ModalTurno';
import ModalDesbloqueo from './Modales/ModalDesbloqueo';
import TablaTurnos from './Tabla/Tabla';
class Turnos extends Component {
    render(){
        return(
            <div>
                <Especialistas/>
                <ModalTurno/>
                <ModalDesbloqueo/>
                <TablaTurnos/>
            </div>
        )
    }
}

export default Turnos;
