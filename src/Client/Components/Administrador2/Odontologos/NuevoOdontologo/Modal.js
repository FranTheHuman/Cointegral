import React from 'react';

const ModalAltaOdontologos= (props) => (
    <div className="modal fade" id="ModalNuevoOdontologo" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content" id="MODALODONTOLOGOS">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Nuevo Especialista</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {props.MensajeFunction()}
                <form onSubmit={props.addOdontologo}>
                    <div className="modal-body">
                        <div className="form-group"> 
                            <input placeholder="Nombre" type="text" id="text" className="form-control" name="Nombre" value={props.state.Nombre} onChange={props.handleChange}/>
                        </div>
                        <div className="form-group"> 
                            <input placeholder="Apellido" type="text" id="text" className="form-control" name="Apellido" value={props.state.Apellido} onChange={props.handleChange}/>
                        </div>  
                        <div className="form-group"> 
                            <select name="Especialidad" id="especialidad" className="btn btn-white dropdown-toggle" onChange={props.handleChange}>
                                <option value="Odontología General">Odontología General</option> 
                                <option value="Endodoncia">Endodoncia</option>
                                <option value="Ortodoncia">Ortodoncia</option>
                                <option value="Prótesis dentales">Prótesis dentales</option>
                                <option value="Odontología Estética">Odontología Estética</option>
                                <option value="Odontopediatría">Odontopediatría</option>
                                <option value="Urgencia">Urgencia</option>
                            </select>
                        </div> 
                        <div className="form-group"> 
                            <input placeholder="Dni" type="text" id="Dni" className="form-control" name="Documento" maxLength="9" value={props.state.Documento} onChange={props.handleChange}/>
                        </div>
                        <div className="form-group"> 
                            <input placeholder="Domicilio" type="text" id="Dni" className="form-control" name="Domicilio" value={props.state.Domicilio} onChange={props.handleChange}/>
                        </div>
                        <div className="form-group"> 
                            <input placeholder="Email" type="text" id="Email" className="form-control" name="Email" value={props.state.Email} onChange={props.handleChange}/>
                        </div>
                        <div className="form-group"> 
                            <input placeholder="Telefono" type="text" id="Telefono" className="form-control" name="Telefono" value={props.state.Telefono} onChange={props.handleChange}/>
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

 
 
export default ModalAltaOdontologos;