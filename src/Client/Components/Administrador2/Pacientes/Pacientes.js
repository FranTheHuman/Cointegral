import React, { Component } from 'react';
import BusqedaPaciente from './Busqueda/Busqueda';
import TablaPacientes from './Tabla/Tabla';
class Pacientes extends Component {
    render(){
        return(
            <div>
                <BusqedaPaciente/>
                <TablaPacientes/>
            </div>
        )
    }
}

export default Pacientes;
