import React, { Component } from 'react';

class Especialistas extends Component {
    render() {
        return(
        <div className="dropdown" id="SeleccionarDoctor">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Especialista
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="SeleccionarDoctor-Doctores">
                <a className="dropdown-item" href="#">Maria Viale</a>
                <a className="dropdown-item" href="#">Gabriela Heredia</a>
                <a className="dropdown-item" href="#">Liliana Romano</a>
                <a className="dropdown-item" href="#">Gimena Gomez</a>
                <a className="dropdown-item" href="#">Julieta Mora</a>
                <a className="dropdown-item" href="#">Rodrigo Ferraro</a>
            </div>
        </div> 
        )
    }
}

export default Especialistas;