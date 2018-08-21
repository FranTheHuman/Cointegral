import React, { Component } from 'react';
import FICHAPERSONAL from './Ficha/FichaPersonal';
import ODONTOGRAMA from './Odontograma/odontograma';
import AREALIZAR from './Tablas/aRealizar';
import REALIZADOS from './Tablas/Realizados';
import MODALHISTORIACLINICA from './Modales/HistoriaClinica';
import MODALHISTORIADIENTE from './Modales/HistorialDiente';
import MODALTRATAMIENTOS from './Modales/OdontogramaTratamientos';
import MODALCARAS from './Modales/OdontogramaCaras';


class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Paciente: [
                {
                    Personal: { Nombre: "", Apellido: "", ObraSocial: "", NºAfil:  "", FechaNac: "", Documento: 0, Telefono: 0, Email: "", Domicilio: "", EstadoCivil: "", FechaAlta: "" }, 
                    HistoriaClinica: { MedicoCabecera: "", ServUrgenciaBool: false, ServUrgen: "", HospitalizacionBool: false, HospitalizacionRazon: "", TratamientoMedicoBool: false, TratamientoMedicoRazon: "", Alergias: "", Afecciones: "", Medicamentos: "", FumaBool: false, FumaCuanto: 0, BebeBool: false, BebeCuanto: 0, EmbarazadaBool:  false, EmbarazadaTiempo: 0, ProblemaRadiante: false, Otros: "", Observaciones: "", DificultadHablar: false, DificultadMasticar: false, DificultadAbrirBoca: false, MovilidadEnDientes: false, EnciasSangrantes: false, PusBoca: false, PusDonde: "", EstadoHigieneBucal: "", 
                               EstadoDeTejidosBlandos: { Lengua: "", Carillos: "", PresentaSarro: false, Labios: "", PisoDeBoca: "", EstadoGfngivoPeropdontal: "", CantidadDientes: "", EnfermedadPeriodental: ""}},
                    Odontograma: { 
                                   Pieza11: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza12: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza13: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza14: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza15: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza16: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza17: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza18: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza21: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza22: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza23: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza24: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza25: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza26: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza27: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza28: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza31: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza32: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza33: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza34: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza35: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza36: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza37: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza38: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza41: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza42: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza43: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza44: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza45: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                   Pieza46: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza47: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ], Pieza48: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "", Tratamiento: "", Observaciones: "" } ],
                                }
                }
            ],
            ObraSocial: [{Nombre: ""}],
            Tratamientos: [ {_id: "", Nombre: "",} ],
            PiezaSeleccionada: "",
            Nuevo: { Fecha: new Date(), Caras: { PzComplet: false, Mesial: false, Distal: false, Oclusal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: "A realizar", Tratamiento: "", Observaciones: "" },
            ParaConsultarHistorialDiente: "",
            ErrorVarialbe: null
        }; 
    }
    // OBTENER PACIENTE
    fetchPaciente = (id) => { 
        fetch(`/api/Paciente/${id}`)  
            .then(res => res.json())
            .then(data => {this.setState({Paciente: data}); console.log(data)})
            .catch(err => console.log(err));
    }
    // EDITAR ODONTOGRAMA
    EditOdontograma = (e) => {
        let contador = 0;
        this.state.Paciente[0].Odontograma[this.state.PiezaSeleccionada].map(t => { // recorre la pieza seleccionada
            if (t.Estado != "Confirmado") { // Si encuentra un tratamiento no confirmado  
                this.setState({ErrorVarialbe:true});
                console.log(t);
            } else {
                contador++;
            }
        })
        if(this.state.Paciente[0].Odontograma[this.state.PiezaSeleccionada].length == contador){
                let PacienteCopy = Object.assign({}, this.state.Paciente);     
                PacienteCopy[0].Odontograma[this.state.PiezaSeleccionada].push(this.state.Nuevo);                        
                this.setState({Paciente:PacienteCopy});
                console.log(this.state.Paciente)
                fetch(`/api/Paciente/${this.props.match.params.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(this.state.Paciente[0]),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json(), this.setState({ErrorVarialbe:false}), console.log(this.state.ErrorVarialbe))
                    .catch(err => { console.log(err); });
        }       
    }
    // ACTUALIZAR STATE DE LAS CARAS DE NUEVO(State)
    handleChangeNuevoCaras = (e) => { 
        const  { name, checked }  = e.target;  
            let NuevoCopy = Object.assign({}, this.state.Nuevo);     
            NuevoCopy.Caras[name] = checked;                         
            this.setState({Nuevo:NuevoCopy});

            if(this.state.Nuevo.Caras.PzComplet == true){
                    let NuevoCopy2 = Object.assign({}, this.state.Nuevo);   
                    NuevoCopy2.Caras.Mesial = false;
                    NuevoCopy2.Caras.Distal = false;
                    NuevoCopy2.Caras.Oclusal = false;
                    NuevoCopy2.Caras.Palatina = false;
                    NuevoCopy2.Caras.Lingual = false;
                    NuevoCopy2.Caras.Vestibular = false;                        
                    this.setState({Nuevo:NuevoCopy2});
            }  

            console.log(`${name} ${checked}  // ${this.state.Nuevo.Caras.Mesial}`);       
    }
    // MENSAJE QUE SE MUESTRA CUANDO SE QUIERE AÑADIR UN TRATAMIENTO A UNA PIEZA QUE AUN POSEE UN TRATAMIENTO SIN CONFIRMAR
    MensajeFunction = () => {
        if(this.state.ErrorVarialbe == true) {
            return (
                <div className="alert alert-danger" role="alert">
                    Verifique que los los tratamientos de la pieza esten confirmados.
                </div>
            )
        } else if(this.state.ErrorVarialbe == false) {
            return (
                <div className="alert alert-success" role="alert">
                    Odontograma Actualizado UwU.
                </div>
            )
        } else return null
    }
    // ACTUALIZAR OBSERVACION DE NUEVO(State)
    handleChangeNuevo = (e) => { 
        const  { value }  = e.target;  
            let NuevoCopy = Object.assign({}, this.state.Nuevo);     
            NuevoCopy.Observaciones = value;                         
            this.setState({Nuevo:NuevoCopy});

            console.log(`${value}  // ${this.state.Nuevo[Observaciones]}`);       
    }
    // OBTENER OBRA SOCIAL
    fetchObraSocial = (id) => { 
        fetch(`/api/ObraSocial/${id}`)  
            .then(res => res.json())
            .then(data => {this.setState({ObraSocial: data});})
            .catch(err => console.log(err));
    }
    // OBTENER TRATAMIENTOS
    fetchTratamientos = () => { 
        fetch(`/api/Tratamientos`)  
            .then(res => res.json())
            .then(data => {this.setState({Tratamientos: data})})
            .catch(err => console.log(err));
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.fetchPaciente(id);
        this.fetchObraSocial(this.state.Paciente[0].Personal.ObraSocial);
        this.fetchTratamientos(); 
    }
    // SELECCIONAR UN DIENTE Y ACTUALIZAR STATE
    handleChangePiezas = (pieza) => { 
        this.setState({
            PiezaSeleccionada: pieza
        })  
    } 
    // SELECCIONAR UN TRATAMIENTO Y ACTUALIZAR STATE
    handleChangeTratamientos = (Tratamiento) => { 
        let NuevoCopy = Object.assign({}, this.state.Nuevo);     
        NuevoCopy.Tratamiento = Tratamiento;                         
        this.setState({Nuevo:NuevoCopy});
    }
    // DEFINIR IMAGEN DE TRATAMIENTO
    TratamientoImg = (pieza) => {
        let Pieza = this.state.Paciente[0].Odontograma[pieza];
        let contador = 0;
        // RECORREMOS LA PIEZA PARA VER CUAANTOS OBJETOS TIENE
        Pieza.forEach(element => {
            contador++;
        });
        // SI EL CONTADOR SIGUE EN CERO QUE DEVUELVA LA IMAGEN NORMAL
        if(contador == 0){
            return `/images/odontograma/normal.png`;
        } else { //SI NO QUE CONTINUE EL CODIGO
            let estado = Pieza[contador-1].Estado // SE OBTIENE EL ESTADO DEL ULTIMO OBJETO DE LA PIEZA
            let tratamiento = Pieza[contador-1].Tratamiento // SE OBTIENE EL TRATAMIENTO DEL ULTIMO OBJETO DE LA PIEZA
            // COMPROBAMOS LOS ESTADOS DE LA PIEZA PARA REALIZAR DETERMINAR LOS TRATAMIENTOS
            if(estado == "A realizar"){
                var nombre = "";
                this.state.Tratamientos.forEach(t => {
                    if (t._id == tratamiento){
                        nombre = t.Nombre;  
                    }  
                }); 
                return `/images/odontograma/tratamientos/${nombre}.png`;
            } 
            else if(estado == "Realizado"){
                var nombre = "";
                this.state.Tratamientos.map(t => {
                    if(t._id == tratamiento){
                        nombre = t.Nombre;   
                    }      
                })
                return `/images/odontograma/Azul/tratamientos/${t.Nombre}.png`;
            } else {
                return `/images/odontograma/normal.png`;
            }
        }
    }
    render(){
        return(
            <div>
                {this.MensajeFunction()}
                <MODALHISTORIACLINICA 
                    Paciente={this.state.Paciente[0].HistoriaClinica}
                />
                <MODALHISTORIADIENTE/>
                <MODALTRATAMIENTOS 
                    Tratamientos={this.state.Tratamientos} 
                    handleChangeTratamientos={this.handleChangeTratamientos}
                />
                <MODALCARAS 
                    EditOdontograma={this.EditOdontograma} 
                    handleChangeNuevoCaras={this.handleChangeNuevoCaras} 
                    Nuevo={this.state.Nuevo} 
                    handleChangeNuevo={this.handleChangeNuevo}
                />
                {/* <MODALES/> */}
                <div className="row"> 
                <FICHAPERSONAL 
                    Paciente={this.state.Paciente[0].Personal} 
                    ObraSocial={this.state.ObraSocial[0].Nombre} 
                    id={this.state.Paciente[0]._id}
                />
                <ODONTOGRAMA 
                    Paciente={this.state.Paciente[0].Odontograma} 
                    handleChangePiezas={this.handleChangePiezas} 
                    TratamientoImg={this.TratamientoImg} 
                    PiezaSeleccionada={this.state.PiezaSeleccionada}
                    Tratamientos={this.state.Tratamientos}
                />
                </div>
                {/* <TABLAS/> */}
                <div className="col-sm-12">
                    <div className="row">
                        <AREALIZAR 
                            Paciente={this.state.Paciente[0].Odontograma} 
                            Tratamientos={this.state.Tratamientos}
                        />
                        <REALIZADOS/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Paciente;
