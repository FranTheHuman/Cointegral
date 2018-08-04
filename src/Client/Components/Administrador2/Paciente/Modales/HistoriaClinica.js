import React, { Component } from 'react';

class MODALHISTORIACLINICA extends Component {
    render() {
        return(
            <div className="modal fade" id="MODALHISTORIACLINICA" role="dialog" aria-labelledby="historiaclinicaLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODALFICHAPACIENTE">
                        <div className="modal-header">
                            <h5 className="modal-title" id="historiaclinicaLabel">Historia Clinica</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body"> 
                            <div className="card">
                                <ul className="list-group">
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Medico de Cabecera: </strong> Dr. Francisco Echevarria</li>
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Servicio de Urgencia?: </strong> Si</li>
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Cual?: </strong> Emi</li>
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Hospitalizacion en los ultimos años?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Razon de la hospitalizacion: </strong> </li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Bajo Tratamiento medico por enfermedad?: </strong> Si</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Alergias: </strong> Mani - Tomates</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Afecciones: </strong> Problemas cardiacos - Diabetes</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Medicamentos: </strong> Metformina - Tiazolidinedionas </li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Fuma?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Cuanto?: </strong> </li>  
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Bebe?: </strong> Si</li>  
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Cuanto?: </strong> A medida</li>  
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Embarazada?: </strong> No</li>  
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Tiempo de Embarazo: </strong> </li>  
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Problemas Radiantes?: </strong> No</li>  
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Otros: </strong> </li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Observaciones: </strong> El paciente se ah mostrado inquieto .</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Dificultad para hablar?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Dificultad para Masticar?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Dificultad para Abrir la Boca?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Movilidad en los dientes: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Sangran las encias?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Pus en la Boca?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿En donde hay Pus?: </strong> </li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de Higiene Bucal: </strong> Muy buena</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de la Lengua: </strong> Muy buena</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de los Carillos: </strong>  Muy buena</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Presenta Sarro?: </strong> No</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de los Labios: </strong>  Muy buena</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de el Piso De la Boca: </strong>  Muy buena</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado GfngivoPeropdontal: </strong> </li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Cantidad de Dientes: </strong> 32</li> 
                                    <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Enfermedad Periodental: </strong> Ninguna</li>  
                                </ul>
                            </div>              
                        </div>
                        <div className="modal-footer"> 
                            <button type="button" className="btn btn-primary"><i className="fas fa-edit"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MODALHISTORIACLINICA;