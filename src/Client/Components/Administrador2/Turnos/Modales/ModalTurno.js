import React from 'react';

const ModalTurnos = (props) => (
            <div className="modal fade" id="exampleModalTurnos" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODAL">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Turno</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group"> 
                                <h5>Buscar Paciente</h5>
                                <input placeholder="Nombre/Apellido/Dni" type="text" id="Nombre" className="form-control" name="ParametroBusqueda" value={props.ParametroBusqueda} onChange={props.handleChange}/> 
                            </div>
                            <div className="form-group">
                                <input placeholder="Duracion" type="number" name="Duracion" className="form-control" step="15" min="15" max="120" value={props.Duracion} onChange={props.handleChange2}/>                          
                            </div>
                                <div className="form-group"> 
                                    <button className="btn btn-success btn-block mt-1" onClick={()=>props.searchPaciente()}>
                                            Buscar
                                    </button>   
                                </div>
                            <div className="form-group">
                                <input placeholder="Nombre/Apellido/Dni" className="form-control" value={`${props.PacienteResultado.Personal.Nombre} ${props.PacienteResultado.Personal.Apellido}`} disabled/>                          
                            </div>
                            <div className="form-group">
                                <input    className="form-control" value={props.PacienteResultado.Personal.Documento} disabled/>                          
                            </div>
                        </div>
                        <div className="modal-footer"> 
                            <button type="button" className="btn btn-success" onClick={props.saveTurno}>Guardar Turno</button> 
                        </div>
                    </div>
                </div>
            </div>     
        )

export default ModalTurnos;











