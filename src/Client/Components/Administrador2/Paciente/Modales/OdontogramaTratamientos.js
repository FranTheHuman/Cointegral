import React from 'react';

const ModalOdontogramaTratamientos = (props) => {
        return(
        <div className="modal fade" id="ModalTratamientos" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog" role="document">
               <div className="modal-content" id="MODALFICHAPACIENTE">
                   <div className="modal-header">
                       <h5 className="modal-title" id="exampleModalLabel">Situacion Actual</h5>
                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                   </div> 
                   <div className="modal-body">
                           <div className="list-group">
                            {
                                props.Tratamientos.map(tratamiento => {               
                                    return(
                                        <a key={tratamiento._id} onClick={()=>props.handleChangeTratamientos(tratamiento._id)} className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src={`/images/odontograma/tratamientos/${tratamiento.Nombre}.png`}/> {tratamiento.Nombre}</a>
                                    )
                                })
                            }                                                        
                           </div>
                   </div>
               </div>
           </div>
       </div>
    ) 
}
    



export default ModalOdontogramaTratamientos;