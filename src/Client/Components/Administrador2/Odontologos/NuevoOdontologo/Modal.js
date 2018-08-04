import React, { Component } from 'react';

class ModalAltaOdontologos extends Component {
    render() {
        return(
            <div className="modal fade" id="ModalNuevoOdontologo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODALODONTOLOGOS">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nuevo Especialista</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group"> 
                                <input placeholder="Nombre Apellido" type="text" id="text" className="form-control" name="text" maxlength="35"/>
                            </div> 
                            <div className="form-group"> 
                                <select name="especialidad" id="especialidad" className="btn btn-white dropdown-toggle">
                                    <option value="OdontologíaGeneral">Odontología General</option> 
                                    <option value="Endodoncia">Endodoncia</option>
                                    <option value="Ortodoncia">Ortodoncia</option>
                                    <option value="Prótesisdentales">Prótesis dentales</option>
                                    <option value="OdontologíaEstética">Odontología Estética</option>
                                    <option value="Odontopediatría">Odontopediatría</option>
                                    <option value="Urgencia">Urgencia</option>
                                </select>
                            </div> 
                            <div className="form-group"> 
                                <input placeholder="Dni" type="text" id="Dni" className="form-control" name="Dni" maxlength="9"/>
                            </div> 
                            <div className="form-group"> 
                                <input placeholder="Telefono" type="text" id="Telefono" className="form-control" name="Telefono"/>
                            </div> 
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-success btn-block mt-1" data-dismiss="modal">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default ModalAltaOdontologos;