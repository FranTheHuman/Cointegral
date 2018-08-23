import React from 'react';

const ModalHistorialDiente = (props) => (
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
                                        <th scope="col">Tratamiento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.PiezaSeleccionada == "" ? null : 
                                        props.Paciente.Odontograma[props.PiezaSeleccionada].map(p => {
                                            if(p.Estado.Confirmado == true){
                                                return (
                                                    <tr key={p._id}>
                                                        <td>{p.Fecha.substring(0, 10)}</td> 
                                                        <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                        {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})} 
                                                    </tr>
                                                )
                                            }
                                        })                                    
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        )

export default ModalHistorialDiente;