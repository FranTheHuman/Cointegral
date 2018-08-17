import React, { Component } from 'react';

class ModalHistorialDiente extends Component {
    render() {
        return(
            <div className="modal fade" id="HISTORIALDIENTE" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODALFICHAPACIENTE">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">HISTORIAL DIENTE</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Caras</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>30/04/18</th>
                                        <td>Vestibular Mesial</td>
                                        <td>Infeccion pulpar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default ModalHistorialDiente;