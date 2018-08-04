import React, { Component } from 'react';

class ModalAltaObraSocial extends Component {
    render() {
        return(
            <div className="modal fade" id="ModalAltaObraSocial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODAL">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nueva Obra Social</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group"> 
                                <input placeholder="Obra Social" type="text" id="ObraSocial" className="form-control" name="ObraSocial" maxlength="35"/>
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

export default ModalAltaObraSocial;