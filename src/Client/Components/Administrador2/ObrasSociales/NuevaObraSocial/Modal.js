import React, {Component} from 'react';

const  ModalAltaObraSocial = (props) => (
    <div className="modal fade" id="ModalAltaObraSocial" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content" id="MODAL">
            {props.MensajeFunction()}
                <form onSubmit={props.addObraSocial}>
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Nueva Obra Social</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group"> 
                            <input value={props.Nombre} onChange={props.handleChange} placeholder="Obra Social" type="text" id="ObraSocial" className="form-control" name="Nombre"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                    <button type="submit" className="btn btn-success btn-block mt-1">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>  
)
 
  
export default ModalAltaObraSocial;
 
