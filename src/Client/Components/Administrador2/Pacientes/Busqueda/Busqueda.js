import React from 'react';
const BusqedaPaciente = (props) => (
            <div>
                <form onSubmit={props.search} id="BusquedaPacientes" className="form-inline">
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Dni" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Nombre" aria-label="Search"  name="NombreBuscar" value={props.NombreBuscar} onChange={props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Apellido" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Palabra clave" aria-label="Search" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
export default BusqedaPaciente;