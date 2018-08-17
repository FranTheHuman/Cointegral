import React from 'react';
 
const  TablaPacientes = (props) => (
            <div className="container-fluid">
                <table id="TablaPacientes" className="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">PACIENTE</th>
                        <th scope="col">DNI</th>
                        <th scope="col">OBRA SOCIAL</th>
                        <th scope="col">TELEFONO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.Paciente.map((paciente, i) => {
                                return (
                                    <tr key={paciente._id}> 
                                        <td>{i+1}</td> 
                                        <td><a href={`/Paciente/${paciente._id}`}>{`${paciente.Personal.Nombre} ${paciente.Personal.Apellido}`}</a></td>
                                        <td>{paciente.Personal.Documento}</td>
                                        {
                                        props.ObraSocial.map(obrasocial => {
                                            return (
                                                paciente.Personal.ObraSocial == obrasocial._id &&
                                                <td key={obrasocial._id}>{obrasocial.Nombre}</td>
                                            )
                                        })                                       
                                        }
                                        <td>{paciente.Personal.Telefono}</td>
                                    </tr>
                                )
                            })
                        }                      
                    </tbody>
                </table>
          </div>       
)
        
export default TablaPacientes;