import React, { Component } from 'react';

class ModalTurnos extends Component {
    render() {
        return(
            <div className="modal fade" id="exampleModalTurnos" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODAL">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Turno</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group"> 
                                <h5>Buscar Paciente</h5>
                                <input placeholder="Nombre" type="text" id="Nombre" className="form-control" name="Nombre" />
                                <input type="text" placeholder="DNI" className="form-control mt-1" />
                                <button className="btn btn-success btn-block mt-1">
                                        Buscar
                                </button>   
                            </div>
                            <div className="form-group">
                                <p className="form-control">Resultado</p>
                            </div>
                        </div>
                        <div className="modal-footer"> 
                            <button type="button" className="btn btn-success">Guardar Turno</button>
                            <button type="button" className="btn btn-danger">Bloquear Espacio</button>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}

export default ModalTurnos;











