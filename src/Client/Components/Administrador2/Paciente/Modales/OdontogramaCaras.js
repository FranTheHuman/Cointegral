import React from 'react';

const ModalOdontogramaCaras = (props) => (
    <div className="modal fade bd-example-modal-lg" id="MODALODONTOGRAMACARA" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content" id="MODALFICHAPACIENTE">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Caras</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={props.EditOdontograma}>
                <div className="modal-body">                   
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={props.Nuevo.Caras.PzComplet} name="PzComplet" onChange={props.handleChangeNuevoCaras}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Pz. Completa </label>
                        </div>
                       {
                           props.Nuevo.Caras.PzComplet == true ?
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="" disabled />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2"> Mesial</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="" disabled/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3"> Distal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="" disabled/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox4"> Oclusal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="" disabled/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox5"> Palatina</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="" disabled/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox6"> Lingual</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="" disabled/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox7"> Vestibular</label>
                                </div>
                            </div>    
                            :
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value={props.Nuevo.Caras.Mesial} name="Mesial" onChange={props.handleChangeNuevoCaras} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2"> Mesial</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value={props.Nuevo.Caras.Distal} name="Distal" onChange={props.handleChangeNuevoCaras} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox3"> Distal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value={props.Nuevo.Caras.Oclusal} name="Oclusal" onChange={props.handleChangeNuevoCaras} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox4"> Oclusal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value={props.Nuevo.Caras.Palatina} name="Palatina" onChange={props.handleChangeNuevoCaras} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox5"> Palatina</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value={props.Nuevo.Caras.Lingual} name="Lingual" onChange={props.handleChangeNuevoCaras} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox6"> Lingual</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value={props.Nuevo.Caras.Vestibular} name="Vestibular" onChange={props.handleChangeNuevoCaras} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox7"> Vestibular</label>
                                </div>
                            </div> 
                       }                  
                </div>
                <div className="modal-footer">
                    <label htmlFor="Observaciones-name" className="col-form-label">Observaciones:</label>
                    <input type="text" className="form-control" id="Observaciones-name" value={props.Nuevo.Observaciones} name="Observaciones" onChange={props.handleChangeNuevo}/>
                    <button type="submit" className="btn btn-primary">Listo</button>
                </div>
                </form>
            </div>
        </div>
    </div>
)

export default ModalOdontogramaCaras;