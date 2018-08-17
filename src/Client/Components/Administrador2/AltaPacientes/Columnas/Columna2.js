import React from 'react';

const Columna2 = (props) => (
    <div className="col-sm-3"> 
        {/*------------------------------------*/} 
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Bebe?</span>
                </div>
                <input type="checkbox" className="form-control" id="bebeBool" value={props.NuevoPaciente.HistoriaClinica.BebeBool} onChange={props.handleChange} name="BebeBool"/>                                             
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.BebeBool == true ?
            <div className="form-group"> 
                <input type="text" id="fumaCant" className="form-control" value={props.NuevoPaciente.HistoriaClinica.BebeCuanto} onChange={props.handleChange} name="BebeCuanto"/>
            </div>
            :
            <div className="form-group"> 
                <input placeholder="¿Cuanto bebe por dia?" type="text" id="fumaCant" className="form-control" value="" name="BebeCuanto" disabled/>
            </div>           
        }
        {/*------------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Embarazada?</span>
                </div>
                <input type="checkbox" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EmbarazadaBool} onChange={props.handleChange} name="EmbarazadaBool" id="EmbarazadaBool"/>                                             
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.EmbarazadaBool == true ?
            <div className="form-group"> 
                <input type="text" id="EmbarazoTiempo" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EmbarazadaTiempo} onChange={props.handleChange} name="EmbarazadaTiempo"/>
            </div>
            : 
            <div className="form-group"> 
                <input placeholder="Tiempo de embarazo en meses" type="text" id="EmbarazoTiempo" className="form-control" value="" onChange={props.handleChange} name="EmbarazadaTiempo" disabled/>
            </div>
        }
        {/*------------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Problemas Radiantes?</span>
                </div>
                <input type="checkbox" className="form-control" id="ProblemaRadiante" value={props.NuevoPaciente.HistoriaClinica.ProblemaRadiante} onChange={props.handleChange} name="ProblemaRadiante"/>                                             
            </div>
        </div>
        {/*------------------------------------*/}
        <div className="form-group"> 
            <input placeholder="Observaciones" type="text" id="Observaciones" className="form-control" value={props.NuevoPaciente.HistoriaClinica.Observaciones} onChange={props.handleChange} name="Observaciones"/>
        </div>
        {/*------------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Dificultad para hablar?</span>
                </div>
                <input type="checkbox" className="form-control" value={props.NuevoPaciente.HistoriaClinica.DificultadHablar} onChange={props.handleChange} id="DifHablar" name="DificultadHablar"/>                                             
            </div>
        </div>
        {/*------------------------------------*/}
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Dificultad para Masticar?</span>
                </div>
                <input type="checkbox" className="form-control" value={props.NuevoPaciente.HistoriaClinica.DificultadMasticar} onChange={props.handleChange} name="DificultadMasticar" id="DifMast"/>                                             
            </div>
        </div>
        {/*------------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Movilidad en los dientes?</span>
                </div>
                <input type="checkbox" className="form-control" onChange={props.handleChange} name="MovilidadEnDientes" value={props.NuevoPaciente.HistoriaClinica.MovilidadEnDientes} id="MovDient"/>                                             
            </div>
        </div>
        {/*------------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Dificultad para Abrir la Boca?</span>
                </div>
                <input type="checkbox" className="form-control" onChange={props.handleChange} name="DificultadAbrirBoca" id="DifAbrBoca" value={props.NuevoPaciente.HistoriaClinica.DificultadAbrirBoca}/>                                             
            </div>
        </div>
        {/*------------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Sangran las encias?</span>
                </div>
                <input type="checkbox" className="form-control" name="EnciasSangrantes" onChange={props.handleChange} value={props.NuevoPaciente.HistoriaClinica.EnciasSangrantes} id="SangranEncias"/>                                             
            </div>
        </div>
    </div>
)

export default Columna2;