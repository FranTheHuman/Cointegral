import React, { Component } from 'react';

class ModalOdontogramaTratamientos extends Component {
    render() {
        return(
            <div className="modal fade" id="ModalTratamientos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="MODALFICHAPACIENTE">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Situacion Actual</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Caries.png" alt=""/> Lesion de Caries</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/InfeccionPulpar.png" alt=""/> Infeccion Pulpar</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Fracturas.png" alt=""/> Fractura</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Extraccion.png" alt=""/> Extraccion</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Ausente.png" alt=""/> Ausente</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Restauracion.png" alt=""/> Restauracion</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Endodoncias.png" alt=""/> Endodoncia</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Corona.png" alt=""/> Corona</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Implante.png" alt=""/> Implante</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/PernoMuñon.png" alt=""/> Perno muñon</a>
                                    <a href="#" className="list-group-item list-group-item-action" id="MODALFICHAPACIENTE" data-toggle="modal" data-target="#MODALODONTOGRAMACARA"><img src="images/odontograma/Rojos/Otro.png" alt=""/> Otro</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalOdontogramaTratamientos;