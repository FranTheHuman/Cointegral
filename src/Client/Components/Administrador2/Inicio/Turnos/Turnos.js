import React from 'react';

const Turnos = (props) => (
    <div className="container-fluid">
        <table id="TABLAINICIO" className="table table-dark mt-0 table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Horario</th>
                    <th scope="col">Especialista</th> 
                </tr>
            </thead>
            <tbody>
                {
                props.Turnos.map((turno, i) => {
                    const turnoDia = new Date(turno.FechaTurno).setHours(0,0,0,0); 
                    const hoy = new Date().setHours(0,0,0,0);  
                    if (turnoDia == hoy){
                        if (turno.Asistio == null) {
                            return(
                                <tr key={turno._id}>
                                    <th scope="row"></th> 
                                    <td><a href={`/Paciente/${turno.Paciente._id}`}>{`${turno.Paciente.Personal.Nombre} ${turno.Paciente.Personal.Apellido}`}</a></td>
                                    <td>{turno.FechaTurno.toString().substring(11, 16)}</td>
                                    <td>{`${turno.Especialista.Nombre} ${turno.Especialista.Apellido}`}</td>
                                    <td id="Botones">
                                        <a onClick={()=>props.editTurnos(turno._id)} className="btn btn-success btn-sm mr-1">Confirmar</a>
                                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                                    </td>
                                </tr>
                            )
                        }
                    }
                })
                }             
            </tbody>
        </table>
    </div>
)

export default Turnos;

