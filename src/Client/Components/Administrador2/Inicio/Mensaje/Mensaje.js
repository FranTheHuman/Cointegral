import React from 'react';

const Mensaje = (props) => (
    <div>
    {
        props.TipoMensaje() == true ? // Si la funcion da true es porque hay turnos
        <div  id="alerta" className="alert alert-warning text-center" role="alert">
            <h4 className="alert-heading">Hay turnos para el dia de hoy!</h4>
        </div>
        :    
        <div  id="alerta" className="alert alert-primary text-center" role="alert">
            <h4 className="alert-heading">No hay turnos para el dia de hoy...</h4>
        </div>
    } 
    </div>
)
                    
export default Mensaje;




