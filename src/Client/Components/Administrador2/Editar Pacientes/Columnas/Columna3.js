import React from 'react';

const Columna3 = (props) => (
    <div className="col-sm-3">   
        {/*------------------------------------*/}                              
         <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Pus en la Boca?</span>
                </div>
                <input type="checkbox" className="form-control " value={props.NuevoPaciente.HistoriaClinica.PusBoca} name="PusBoca" id="PusBool" onChange={props.handleChange}/>                                             
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.PusBoca == true ?
            <div className="form-group">
                <input placeholder="¿En donde hay Pus?" type="text" id="PusLugar" className="form-control" value={props.NuevoPaciente.HistoriaClinica.PusDonde} onChange={props.handleChange} name="PusDonde"/>
            </div>
            :
            <div className="form-group">
                <input placeholder="¿En donde hay Pus?" type="text" id="PusLugar" className="form-control" value="" onChange={props.handleChange} name="PusDonde" disabled/>
            </div>
        }
        {/*------------------------------------*/}  
        <div className="form-group"> 
             <input placeholder="Estado de Higiene Bucal" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoHigieneBucal} onChange={props.handleChange} name="EstadoHigieneBucal"/>
        </div>
        {/*------------------------------------*/}  
        <div className="form-group"> 
            <input placeholder="Estado de la Lengua" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.Lengua} onChange={props.handleChangeColumna3} name="Lengua"/>
        </div>
        {/*------------------------------------*/}    
        <div className="form-group"> 
            <input placeholder="Estado de los Carillos" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.Carillos} onChange={props.handleChangeColumna3} name="Carillos"/>
        </div>  
        {/*------------------------------------*/}  
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Presenta Sarro?</span>
                </div>
                <input type="checkbox" className="form-control" name="PresentaSarro" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.PresentaSarro} onChange={props.handleChangeColumna3} id="SarroBool"/>                                             
            </div>
        </div>
        {/*------------------------------------*/}  
        <div className="form-group"> 
            <input placeholder="Estado de los Labios" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.Labios} onChange={props.handleChangeColumna3} name="Labios"/>
        </div> 
        {/*------------------------------------*/}   
        <div className="form-group"> 
            <input placeholder="Estado de el Piso De la Boca" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.PisoDeBoca} onChange={props.handleChangeColumna3} name="PisoDeBoca"/>
        </div>  
        {/*------------------------------------*/}  
        <div className="form-group">
            <input placeholder="Estado GfngivoPeropdontal" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.EstadoGfngivoPeropdontal} onChange={props.handleChangeColumna3} name="EstadoGfngivoPeropdontal"/>
        </div>  
        {/*------------------------------------*/}  
        <div className="form-group"> 
            <input placeholder="Cantidad de Dientes" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.CantidadDientes} onChange={props.handleChangeColumna3} name="CantidadDientes"/>
        </div>  
        {/*------------------------------------*/}  
        <div className="form-group"> 
            <input placeholder="Enfermedad Periodental" type="text" id="EstadoBucal" className="form-control" value={props.NuevoPaciente.HistoriaClinica.EstadoDeTejidosBlandos.EnfermedadPeriodental} onChange={props.handleChangeColumna3} name="EnfermedadPeriodental"/>
        </div>   
    </div>
)

export default Columna3;