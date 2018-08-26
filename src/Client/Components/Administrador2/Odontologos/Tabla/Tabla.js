import React from 'react';

const  TablaOdontologos = (props) => (
    <div className="container-fluid">
        <table id="TablaOdontologos" className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ODONTOLOGO/A</th>
                    <th scope="col">ESPECIALIDAD</th>
                    <th scope="col">DNI</th>
                    <th scope="col">TELEFONO</th> 
                </tr>
            </thead>
            <tbody>
                {
                    props.Odontologo.map((odontologo, i) => {
                        return (
                            <tr key={odontologo._id}> 
                                <td>{i+1}</td>
                                <td><a data-toggle="modal" data-target="#ModalOdontologo" href="#" onClick={()=>props.TraerDatosDeOdontologo(odontologo._id)}>{`${odontologo.Nombre} ${odontologo.Apellido}`}</a></td>
                                <td>{odontologo.Especialidad}</td>
                                <td>{odontologo.Documento}</td>
                                <td>{odontologo.Telefono}</td>
                            </tr>
                        )
                    }) 
                }                                 
            </tbody>
        </table>
    </div>
)


export default TablaOdontologos;