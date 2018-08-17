import React from 'react';

const MODALHISTORIACLINICA = (props) => (

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
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Medico de Cabecera: </strong>{props.Paciente.MedicoCabecera}</li>
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Servicio de Urgencia?: </strong>{props.Paciente.ServUrgenciaBool == true ? "Si" : "No"}</li>
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Cual?: </strong>{props.Paciente.ServUrgen}</li>
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Hospitalizacion en los ultimos años?: </strong>{props.Paciente.HospitalizacionBool == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Razon de la hospitalizacion: </strong>{props.Paciente.HospitalizacionRazon}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Bajo Tratamiento medico por enfermedad?: </strong>{props.Paciente.TratamientoMedicoBool == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Razon de tratamiento medico: </strong>{props.Paciente.TratamientoMedicoRazon}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Alergias: </strong>{props.Paciente.Alergias}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Afecciones: </strong>{props.Paciente.Afecciones}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Medicamentos: </strong>{props.Paciente.Medicamentos}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Fuma?: </strong>{props.Paciente.FumaBool == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Cuanto por dia?: </strong>{props.Paciente.FumaCuanto}</li>  
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Bebe?: </strong>{props.Paciente.BebeBool == true ? "Si" : "No"}</li>  
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Cuanto por dia?: </strong>{props.Paciente.BebeCuanto}</li>  
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Embarazada?: </strong>{props.Paciente.EmbarazadaBool == true ? "Si" : "No"}</li>  
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Tiempo de Embarazo: </strong>{props.Paciente.EmbarazadaTiempo}</li>  
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Problemas Radiantes?: </strong>{props.Paciente.ProblemaRadiante == true ? "Si" : "No"}</li>  
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Otros: </strong>{props.Paciente.Otros}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Observaciones: </strong>{props.Paciente.Observaciones}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Dificultad para hablar?: </strong>{props.Paciente.DificultadHablar == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Dificultad para Masticar?: </strong>{props.Paciente.DificultadMasticar == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Dificultad para Abrir la Boca?: </strong>{props.Paciente.DificultadAbrirBoca == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Movilidad en los dientes: </strong>{props.Paciente.MovilidadEnDientes == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Sangran las encias?: </strong>{props.Paciente.EnciasSangrantes == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Pus en la Boca?: </strong>{props.Paciente.PusBoca == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿En donde hay Pus?: </strong>{props.Paciente.PusDonde}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de Higiene Bucal: </strong>{props.Paciente.EstadoHigieneBucal}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de la Lengua: </strong>{props.Paciente.EstadoDeTejidosBlandos.Lengua}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de los Carillos: </strong>{props.Paciente.EstadoDeTejidosBlandos.Carillos}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>¿Presenta Sarro?: </strong>{props.Paciente.EstadoDeTejidosBlandos.PresentaSarro == true ? "Si" : "No"}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de los Labios: </strong>{props.Paciente.EstadoDeTejidosBlandos.Labios}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado de el Piso De la Boca: </strong>{props.Paciente.EstadoDeTejidosBlandos.PisoDeBoca}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Estado GfngivoPeropdontal: </strong>{props.Paciente.EstadoDeTejidosBlandos.EstadoGfngivoPeropdontal}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Cantidad de Dientes: </strong>{props.Paciente.EstadoDeTejidosBlandos.CantidadDientes}</li> 
                            <li className="list-group-item" id="MODALFICHAPACIENTE"><strong>Enfermedad Periodental: </strong>{props.Paciente.EstadoDeTejidosBlandos.EnfermedadPeriodental}</li>  
                        </ul>
                    </div>              
                </div>
            </div>
        </div>
    </div>

)


export default MODALHISTORIACLINICA;