import React, { Component } from 'react';

class BusqedaPaciente extends Component {
    render() {
        return(
            <div>
                <form id="BusquedaPacientes" className="form-inline">
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Dni" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <input class="form-control mr-sm-2" type="search" placeholder="Nombre" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Apellido" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Palabra clave" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <button classNames="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BusqedaPaciente;