import React from 'react';
import { NavLink } from 'react-router-dom';

const Navegacion = () => {
    return(
        <nav id="navegacion" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/Home">COINTEGRAL</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/Home">Inicio <span className="sr-only">(current)</span></a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pacientes
                        </a>
                        <div id="dropdownmenu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/NuevoPaciente">Nuevo</a>
                            <a className="dropdown-item" href="/Pacientes">Pacientes</a>
                        </div>
                    </li>    
                    <a className="nav-item nav-link" href="/Turnos">Turnos</a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Datos Varios
                        </a>
                        <div id="dropdownmenu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/Odontologos">Odontologos/as</a>
                            <a className="dropdown-item" href="/ObrasSociales">Obras Sociales</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sesion
                        </a>
                        <div id="dropdownmenu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/Odontologos">Usuario</a>
                            <a className="dropdown-item"href="/logout">Cerrar Sistema</a>
                        </div>
                    </li>   
                </div>
            </div>
        </nav>
    );
};

export default Navegacion; 