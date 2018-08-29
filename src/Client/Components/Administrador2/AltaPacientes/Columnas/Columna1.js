import React from 'react';

const Columna1 = (props) => (  
    <div className="col-sm-3"> 
        <div className="form-group">
            <input placeholder="Medico de Cabecera" type="text" className="form-control" value={props.NuevoPaciente.HistoriaClinica.MedicoCabecera} onChange={props.handleChange} name="MedicoCabecera" />
        </div>
        {/*-----------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Servicio de Urgencia?</span>
                </div>
                <input type="checkbox"  className="form-control" value={props.NuevoPaciente.HistoriaClinica.ServUrgenciaBool} onChange={props.handleChange} name="ServUrgenciaBool"  id="servUrgBool"/>                                            
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.ServUrgenciaBool == true ?
            <div className="form-group"> 
                 <input placeholder="Servicio de urgencia" type="text" id="Alergias" className="form-control" value={props.NuevoPaciente.HistoriaClinica.ServUrgen} onChange={props.handleChange} name="ServUrgen" />
            </div> 
            :
            <div className="form-group"> 
                 <input placeholder="Servicio de urgencia" type="text" id="Alergias" className="form-control" value="" onChange={props.handleChange} name="ServUrgen" disabled/>
            </div>             
        }
        {/*-----------------------------------*/}
        <div className="form-group"> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Hospitalizacion?</span>
                </div>
                <input type="checkbox" className="form-control" name="HospitalizacionBool" id="HospitBool" value={props.NuevoPaciente.HistoriaClinica.HospitalizacionBool} onChange={props.handleChange}/>                                             
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.HospitalizacionBool == true ?
            <div className="form-group">
                <input placeholder="Razon de la hospitalizacion" type="text" id="Hospit" className="form-control" value={props.NuevoPaciente.HistoriaClinica.HospitalizacionRazon} onChange={props.handleChange} name="HospitalizacionRazon"/>
            </div>
            :
            <div className="form-group">
                <input placeholder="Razon de la hospitalizacion" type="text" id="Hospit" className="form-control" value="" onChange={props.handleChange} name="HospitalizacionRazon" disabled/>
            </div>           
        }
        {/*-----------------------------------*/}        
        <div className="form-group">  
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Bajo Trat. medico por enfermedad?</span>
                </div>
                <input type="checkbox" className="form-control" name="TratamientoMedicoBool" id="BajoTratEnfBool" value={props.NuevoPaciente.HistoriaClinica.TratamientoMedicoBool} onChange={props.handleChange}/>                                             
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.TratamientoMedicoBool == true ?
            <div className="form-group">
                <input placeholder="Razon de tratamiento medico" type="text" id="Hospit" className="form-control" value={props.NuevoPaciente.HistoriaClinica.TratamientoMedicoRazon} onChange={props.handleChange} name="TratamientoMedicoBool"/>
            </div>
            :
            <div className="form-group">
                <input placeholder="Razon de tratamiento medico" type="text" id="Hospit" className="form-control" value="" onChange={props.handleChange} name="TratamientoMedicoBool" disabled/>
            </div>           
        }    
        {/*-----------------------------------*/}   
        <div className="form-group"> 
            <input placeholder="Alergias" type="text" id="Alergias" className="form-control" value={props.NuevoPaciente.HistoriaClinica.Alergias} onChange={props.handleChange} name="Alergias" />
        </div>
        {/*-----------------------------------*/}   
        <div className="form-group"> 
            <input placeholder="Afecciones" type="text" id="Afecciones" className="form-control" value={props.NuevoPaciente.HistoriaClinica.Afecciones} onChange={props.handleChange} name="Afecciones" />
        </div>
        {/*-----------------------------------*/} 
        <div className="form-group"> 
            <input placeholder="Medicamentos" type="text" id="Medicamentos" className="form-control" value={props.NuevoPaciente.HistoriaClinica.Medicamentos} onChange={props.handleChange} name="Medicamentos" />
        </div>
        {/*-----------------------------------*/} 
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">¿Fuma?</span>
                </div>
                <input type="checkbox" className="form-control" name="fumaBool" id="fumaBool" value={props.NuevoPaciente.HistoriaClinica.fumaBool} onChange={props.handleChange}/>                                             
            </div>
        </div>
        {
            props.NuevoPaciente.HistoriaClinica.fumaBool == true ?
            <div className="form-group"> 
                <input placeholder="¿Cuanto fuma por dia?" type="text" id="fumaCant" className="form-control" value={props.NuevoPaciente.HistoriaClinica.FumaCuanto} onChange={props.handleChange} name="FumaCuanto"/>
            </div>
            :
            <div className="form-group">
                <input placeholder="¿Cuanto fuma por dia?" type="text" id="fumaCant" className="form-control" value="" onChange={props.handleChange} name="FumaCuanto" disabled/>
            </div>           
        } 
    </div>
)

export default Columna1;