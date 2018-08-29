import React from 'react';

const Odontologoseleccionado= (props) => (
    <div className="modal fade" id="ModalOdontologo" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content" id="MODALODONTOLOGOS">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Especialista: {props.OS[0].Nombre} {props.OS[0].Apellido}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div className="modal-body">  
                        <h5>{props.OS[0].Especialidad}</h5>
                        <p>Documento: {props.OS[0].Documento}</p>
                        <p>Telefono: {props.OS[0].Telefono}</p> 
                        <p>Email: {props.OS[0].Email}</p> 
                        <p>Domicilio: {props.OS[0].Domicilio}</p>   
                    </div>
                    <div className="modal-footer">
                        <p>Fecha de Alta al sistema: {props.OS[0].FechaAlta.toString().substring(0, 10)}</p> 
                    </div>
            </div>
        </div>
    </div>   
)


export default Odontologoseleccionado;