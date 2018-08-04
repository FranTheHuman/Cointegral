import React, { Component } from 'react';

class ModalOdontogramaCaras extends Component {
    render() {
        return(
            <div className="modal fade bd-example-modal-lg" id="MODALODONTOGRAMACARA" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" id="MODALFICHAPACIENTE">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Caras</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Pz. Completa </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2"> Mesial</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                    <label className="form-check-label" for="inlineCheckbox3"> Distal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option3"/>
                                    <label className="form-check-label" for="inlineCheckbox4"> Oclusal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3"/>
                                    <label className="form-check-label" for="inlineCheckbox5"> Palatina</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3"/>
                                    <label className="form-check-label" for="inlineCheckbox6"> Lingual</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option3"/>
                                    <label className="form-check-label" for="inlineCheckbox7"> Vestibular</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <label for="Observaciones-name" className="col-form-label">Estado:</label>
                            <input type="text" className="form-control" id="Observaciones-name"/>
                            <button type="button" class="btn btn-primary">Listo</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalOdontogramaCaras;