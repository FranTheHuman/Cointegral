import React from 'react';

const FichaPersonal = (props) => (
    <div className="col-sm-3">
        {/* <!-- INPUT INFO PERSONAL--> */}
        <div className="form-group"> 
            <input type="text" className="form-control" value={props.NuevoPaciente.Personal.Nombre} onChange={props.handleChange} name="Nombre"/>
        </div>
        <div className="form-group"> 
            <input placeholder="Apellido" type="text" className="form-control" value={props.NuevoPaciente.Personal.Apellido} onChange={props.handleChange} name="Apellido" />
        </div>
        <div className="form-group"> 
            <input placeholder="Dni" type="text" className="form-control" value={props.NuevoPaciente.Personal.Documento} onChange={props.handleChange} name="Documento" maxLength="8"/>
        </div>
        <div className="form-group"> 
            <input placeholder="Telefono" type="tel" className="form-control" value={props.NuevoPaciente.Personal.Telefono} onChange={props.handleChange} name="Telefono"/>
            <small id="emailHelp" className="form-text text-muted">*Debe contener 10 caracteres para un celular y 7 para un fijo</small>
        </div>
        <div className="form-group"> 
            <input placeholder="Email" type="email" className="form-control" value={props.NuevoPaciente.Personal.Email} onChange={props.handleChange} name="Email" />
        </div>
        <div className="form-group"> 
            <input placeholder="Domicilio" type="text" className="form-control" value={props.NuevoPaciente.Personal.Domicilio} onChange={props.handleChange} name="Domicilio" />
        </div>
        <div className="form-group"> 
            <input placeholder="Fecha de Nacimiento" type="date" className="form-control"  value={props.NuevoPaciente.Personal.FechaNac} onChange={props.handleChange} name="FechaNac" max={new Date()} />
        </div>
        <div className="form-group"> 
            <select name="ObraSocial" className="btn btn-white dropdown-toggle" onChange={props.handleChange}>
                {   
                    props.ObraSocial.map(obrasocial => {
                        return (
                            <option key={obrasocial._id} value={obrasocial._id}>{obrasocial.Nombre}</option>
                        )
                    })
                    
                } 
            </select>
        </div> 
        <div className="form-group">
            <input placeholder="Nº Afiliado" type="text" className="form-control" value={props.NuevoPaciente.Personal.NºAfil} onChange={props.handleChange} name="NºAfil"/>
        </div>
        <div className="form-group"> 
            <input placeholder="Estado Civil" type="text" className="form-control" value={props.NuevoPaciente.Personal.EstadoCivil} onChange={props.handleChange} name="EstadoCivil"/>
        </div>
        <button type="submit" className="btn btn-success btn-block mt-1">
            Listo
        </button> 
    </div>
)

export default FichaPersonal;