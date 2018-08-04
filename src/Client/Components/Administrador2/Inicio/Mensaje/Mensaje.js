import React, { Component } from 'react';

class Mensaje extends Component {
    render(){
        return(
            <div id="alerta" className="alert alert-warning text-center" role="alert">
                <h4 className="alert-heading">Hay turnos para el dia de hoy!</h4>
            </div>          
        )
    }
}

export default Mensaje;
