import React, { Component } from 'react';

class AltaPaciente extends Component {
    render(){
        return(
            <form action="/add" method="POST" id="FormularioPacientes">
            <legend id="TITULOFORMULARIO">Editar Paciente</legend>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-3">
                            {/* <!-- INPUT INFO PERSONAL--> */}
                            <div className="form-group"> 
                                <input placeholder="Nombre" type="text" id="nombre" className="form-control" name="nombre" />
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Apellido" type="text" id="apellido" className="form-control" name="apellido" />
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Dni" type="text" id="dni" className="form-control" name="dni" maxLength="8"/>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Telefono" type="tel" id="telefono" className="form-control" name="telefono" pattern="[0-9]{7-10}"/>
                                <small id="emailHelp" className="form-text text-muted">*Debe contener 10 caracteres para un celular y 7 para un fijo</small>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Email" type="email" id="email" className="form-control" name="email" />
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Domicilio" type="text" id="domicilio" className="form-control" name="domicilio" />
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Fecha de Nacimiento" type="date" id="fechaNacimiento" className="form-control" name="fechaNacimiento" value="2018-07-31" max="2018-07-31" />
                            </div>
                            <div className="form-group"> 
                                <select name="categoria" id="obraSocial" className="btn btn-white dropdown-toggle">
                                    <option value="Ospat">PARTICULAR</option>
                                    <option value="Ospat">OSPAT</option>
                                    <option value="OSFATUN">OSFATUN</option>
                                    <option value="OSPECOR">OSPECOR</option>
                                    <option value="PREVENCIÓNSALUD">PREVENCIÓN SALUD</option>
                                    <option value="PAMI">PAMI</option>
                                    <option value="OPDEA">OPDEA</option>
                                </select>
                            </div> 
                            <div className="form-group">
                                <input placeholder="Nº Afiliado" type="text" id="NºAfiliado" className="form-control" name="NºAfiliado"/>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Estado Civil" type="text" id="EstadoCivil" className="form-control" name="EstadoCivil"/>
                            </div>
                            <button className="btn btn-success btn-block mt-1">
                                Listo
                            </button> 
                        </div>  
                        {/* <!-- INPUT HISTORIA CLINICA COLUMNA 1--> */}
                        <div className="col-sm-3"> 
                            <div className="form-group">
                                <input placeholder="Medico de Cabecera" type="text" id="MedicoCabecera" className="form-control" name="MedicoCabecera" />
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Servicio de Urgencia?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="servUrgBool" id="servUrgBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Servicio de urgencia, ¿Cual?" type="text" id="servUrg" className="form-control" name="servUrg" />
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Hospitalizacion en los ultimos años?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="HospitBool" id="HospitBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group">
                                <input placeholder="Razon de la hospitalizacion" type="text" id="Hospit" className="form-control" name="Hospit"/>
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Bajo Trat. medico por enfermedad?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="BajoTratEnfBool" id="BajoTratEnfBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Alergias" type="text" id="Alergias" className="form-control" name="Alergias" />
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Afecciones" type="text" id="Afecciones" className="form-control" name="Afecciones" />
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Medicamentos" type="text" id="Medicamentos" className="form-control" name="Medicamentos" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Fuma?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="fumaBool" id="fumaBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="¿Cuanto fuma por dia?" type="text" id="fumaCant" className="form-control" name="fumaCant"/>
                            </div>
                        </div>
                        {/* <!-- INPUT HISTORIA CLINICA COLUMNA 2--> */}
                        <div className="col-sm-3">  
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Bebe?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="bebeBool" id="bebeBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="¿Cuanto bebe por dia?" type="text" id="fumaCant" className="form-control" name="fumaCant"/>
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Embarazada?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="EmbarazadaBool" id="EmbarazadaBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Tiempo de embarazo" type="text" id="EmbarazoTiempo" className="form-control" name="EmbarazoTiempo"/>
                            </div>
                            <div className="form-group">
                                <input placeholder="Problemas Radiantes" type="text" id="ProblemasRadiantes" className="form-control" name="ProblemasRadantes"/>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Observaciones" type="text" id="Observaciones" className="form-control" name="Observaciones"/>
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Dificultad para hablar?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="DifHablar" id="DifHablar"/>                                             
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Dificultad para Masticar?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="DifMast" id="DifMast"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Movilidad en los dientes?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="MovDient" id="MovDient"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Dificultad para Abrir la Boca?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="DifAbrBoca" id="DifAbrBoca"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Sangran las encias?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="SangranEncias" id="SangranEncias"/>                                             
                                </div>
                            </div>
                        </div>
                        {/* <!-- INPUT HISTORIA CLINICA COLUMNA 3--> */}
                        <div className="col-sm-3">                                     
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Pus en la Boca?</span>
                                    </div>
                                    <input type="checkbox" className="form-control " name="PusBool" id="PusBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group">
                                <input placeholder="¿En donde hay Pus?" type="text" id="PusLugar" className="form-control" name="PusLugar"/>
                            </div>  
                            <div className="form-group"> 
                                <input placeholder="Estado de Higiene Bucal" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group"> 
                                <input placeholder="Estado de la Lengua" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group"> 
                                <input placeholder="Estado de los Carillos" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">¿Presenta Sarro?</span>
                                    </div>
                                    <input type="checkbox" className="form-control" name="SarroBool" id="SarroBool"/>                                             
                                </div>
                            </div>
                            <div className="form-group"> 
                                <input placeholder="Estado de los Labios" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group"> 
                                <input placeholder="Estado de el Piso De la Boca" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group">
                                <input placeholder="Estado GfngivoPeropdontal" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group"> 
                                <input placeholder="Cantidad de Dientes" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                            <div className="form-group"> 
                                <input placeholder="Enfermedad Periodental" type="text" id="EstadoBucal" className="form-control" name="EstadoBucal"/>
                            </div>  
                        </div>
                    </div>
                </div>              
            </form>
        )
    }
}

export default AltaPaciente;
