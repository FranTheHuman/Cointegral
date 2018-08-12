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
                                    <td><a href="#">{`${turno.Paciente.Personal.Nombre} ${turno.Paciente.Personal.Apellido}`}</a></td>
                                    <td>{turno.FechaTurno.substring(11, 16)}</td>
                                    <td>{`${turno.Especialista.Nombre} ${turno.Especialista.Apellido}`}</td>
                                    <td id="Botones">
                                        <a href={props.editTurnos(turno._id)} className="btn btn-success btn-sm mr-1">Confirmar</a>
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

{/* <tr>
                    <th scope="row">1</th>
                    <td><a href="#">Federico Gimenez</a></td>
                    <td>9:00</td>
                    <td><a href="#">Maria Viale</a></td>
                    <td>
                        <button type="button" className="btn btn-success btn-sm mr-1">Confirmar</button>
                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><a href="#">Juan Saad</a></td>
                    <td>10:30</td>
                    <td><a href="#">Gabriela Heredia</a></td>
                    <td id="Botones">
                        <button type="button" className="btn btn-success btn-sm mr-1">Confirmar</button>
                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td><a href="#">Larry Diaz</a></td>
                    <td>12:00</td>
                    <td><a href="#">Maria Viale</a></td>
                    <td id="Botones">
                        <button type="button" className="btn btn-success btn-sm mr-1">Confirmar</button>
                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                        <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                    </td>
                </tr> */}