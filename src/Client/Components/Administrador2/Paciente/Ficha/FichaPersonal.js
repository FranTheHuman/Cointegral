import React from 'react';

const FICHAPERSONAL = (props) => (
    <div className="col-sm-4">
        <div id="DatosPaciente" className="card">
            <h1 className="card-title text-center" id="NombrePaciente">{`${props.Paciente.Nombre} ${props.Paciente.Apellido}`}</h1>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                                <div>
                                    <div>
                                        <strong>Dni </strong><p>{props.Paciente.Documento}</p>
                                        <strong>Telefono </strong><p>{props.Paciente.Telefono}</p>
                                        <strong>Email </strong><p>{props.Paciente.Email}</p>
                                        <strong>Domicilio </strong><p>{props.Paciente.Domicilio}</p>
                                        <strong>Fecha de Nacimiento </strong><p>
                                        {
                                            new Date(props.Paciente.FechaNac).getUTCDate()+"/"+new Date(props.Paciente.FechaNac).getMonth()+"/"+new Date(props.Paciente.FechaNac).getUTCFullYear()
                                        }
                                        </p>                                            
                                    </div>
                                </div>              
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <div>
                                <strong>Obra Social </strong><p>{props.ObraSocial}</p>
                                <strong>NºAfiliado </strong><p>{props.Paciente.NºAfil}</p>                                        
                                <strong>Estado Civil </strong><p>{props.Paciente.EstadoCivil}</p>
                                <strong>Fecha de Alta </strong><p>
                                {
                                     new Date(props.Paciente.FechaAlta).getUTCDate()+"/"+new Date(props.Paciente.FechaAlta).getMonth()+"/"+new Date(props.Paciente.FechaAlta).getUTCFullYear()
                                }</p>
                                <form className="form-inline">
                                    <div className="form-group mb-2">
                                        <a href={`/EditPaciente/${props.id}`}><i className="fas fa-edit"></i></a>                                               
                                    </div>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <a href="" data-toggle="modal" data-target="#MODALHISTORIACLINICA"><i className="fas fa-clipboard"></i></a>
                                    </div>
                                    <div className="form-group mb-2">
                                        <a href="" data-toggle="modal" data-target="#MODALHISTORIACLINICA"><i className="fas fa-tooth"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div>                              
                    </div>
                </div>  
            </div>
        </div>
    </div>
)

export default FICHAPERSONAL;