import React, { Component } from 'react';

class FICHAPERSONAL extends Component {
    render() {
        return(
            <div className="col-sm-4">
                <div id="DatosPaciente" className="card">
                    <h1 className="card-title text-center" id="NombrePaciente">Martina Chamello</h1>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                        <div>
                                            <div>
                                                <strong>Dni </strong><p >31566623</p>
                                                <strong>Telefono </strong><p >3534828898</p>
                                                <strong>Email </strong><p>Martina_Chamello@gmail.com</p>
                                                <strong>Domicilio </strong><p>Buenos Aires 124</p>
                                                <strong>Fecha de Nacimiento </strong><p>11/04/97</p>                                            
                                            </div>
                                        </div>              
                            </div>
                            <div className="col-sm-4">
                                <div>
                                    <div>
                                        <strong>Obra Social </strong><p>Ospat</p>
                                        <strong>NºAfiliado </strong><p>11222557401</p>                                        
                                        <strong>Estado Civil </strong><p>Casada</p>
                                        <strong>Fecha de Alta </strong><p>11/04/18</p>
                                        <form className="form-inline">
                                            <div className="form-group mb-2">
                                                <a href="/EditPaciente"><i className="fas fa-edit"></i></a>                                               
                                            </div>
                                            <div className="form-group mx-sm-3 mb-2">
                                                <a href="" data-toggle="modal" data-target="#MODALHISTORIACLINICA"><i className="fas fa-clipboard"></i></a>
                                            </div>
                                            <div className="form-group mb-2">
                                                <a href="" data-toggle="modal" data-target="#MODALHISTORIACLINICA"><i className="fas fa-tooth"></i></a>
                                            </div>
                                        </form>
                                    </div>
                                </div>                              
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
export default FICHAPERSONAL;