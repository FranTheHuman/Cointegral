import React from 'react';

const Especialistas = (props) => (
        <div className="dropdown" id="SeleccionarDoctor">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Especialista
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="SeleccionarDoctor-Doctores">
                {
                    props.Odontologos.map(odontologo => {
                        return (
                            <a key={odontologo._id} className="dropdown-item" href="#">{`${odontologo.Nombre} ${odontologo.Apellido}`}</a>
                        )
                    })                     
                }
            </div>
        </div> 
)
export default Especialistas;