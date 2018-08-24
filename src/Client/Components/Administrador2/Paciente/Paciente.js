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
                                   Pieza11: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza12: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza13: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza14: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza15: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza16: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza17: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza18: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza21: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza22: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza23: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza24: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza25: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza26: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza27: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza28: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza31: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza32: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza33: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza34: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza35: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza36: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza37: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza38: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza41: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza42: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza43: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza44: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza45: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                   Pieza46: [ { _id: "", Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza47: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ], Pieza48: [ { Fecha: "", Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: false, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" } ],
                                }
                }
            ],
            ObraSocial: [{Nombre: ""}],
            Tratamientos: [ {_id: "", Nombre: "",} ],
            PiezaSeleccionada: "",
            Nuevo: { Fecha: new Date(), Caras: { PzComplet: false, Mesial: false, Distal: false, Palatina: false, Lingual: false, Vestibular: false}, Estado: {ARealizar: true, Realizado: false, Confirmado: false}, Tratamiento: "", Observaciones: "" },
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
            if (t.Estado.Confirmado != true) { // Si encuentra un tratamiento no confirmado  
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
                this.fetchPaciente(this.props.match.params.id);
        } else {
            e.preventDefault();
            this.setState({ErrorVarialbe:true})
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
    // DEFINIR IMAGEN DE CARAS
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
            let estado = Pieza[contador-1].Estado; // SE OBTIENE EL ESTADO DEL ULTIMO OBJETO DE LA PIEZA
            let tratamiento = Pieza[contador-1].Tratamiento; // SE OBTIENE EL TRATAMIENTO DEL ULTIMO OBJETO DE LA PIEZA
            // COMPROBAMOS LOS ESTADOS DE LA PIEZA PARA REALIZAR DETERMINAR LOS TRATAMIENTOS
            if (estado.ARealizar == true){
                var nombre = "";
                this.state.Tratamientos.forEach(t => {
                    if (t._id == tratamiento){
                        nombre = t.Nombre;  
                    }  
                }); 
                return `/images/odontograma/tratamientos/${nombre}.png`;
            } 
            else if (estado.Realizado == true){
                var nombre = "";
                this.state.Tratamientos.map(t => {
                    if(t._id == tratamiento){
                        nombre = t.Nombre;   
                    }      
                })
                return `/images/odontograma/Azul/tratamientos/${nombre}.png`;
            } else {
                return `/images/odontograma/normal.png`;
            }
        }
    }
    // DEFINIR IMAGEN DE LAS CARAS
    TratamientoImgPieza = (pieza) => {
        let Pieza = this.state.Paciente[0].Odontograma[pieza];
        let contador = 0;
        // RECORREMOS LA PIEZA PARA VER CUAANTOS OBJETOS TIENE
        Pieza.forEach(element => {contador++;});
        // SI EL CONTADOR SIGUE EN CERO QUE DEVUELVA LA IMAGEN NORMAL
        if(contador == 0){
            return `/images/odontograma/normal.png`;
        } else { //SI NO QUE CONTINUE EL CODIGO
            const estado = Pieza[contador-1].Estado; // SE OBTIENE EL ESTADO DEL ULTIMO OBJETO DE LA PIEZA
            const Caras = Pieza[contador-1].Caras; // SE OBTIENE LAS CARAS DEL ULTIMO OBJETO DE LA PIEZA
            // COMPROBAMOS LOS ESTADOS DE LA PIEZA PARA REALIZAR DETERMINAR LOS TRATAMIENTOS
            if (estado.ARealizar == true){
                if(Caras.PzComplet == true){return `/images/odontograma/rojos/OdontogramaRojo5.png`;}
                // Una sola pieza seleccionada
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/uno solo/OdontogramaRojo1.png`;}           
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/uno solo/OdontogramaRojo25.png`;}
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/uno solo/OdontogramaRojo24.png`;}
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/uno solo/OdontogramaRojo23.png`;}
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/uno solo/OdontogramaRojo26.png`;}
                // Dos piezas seleccionadas 
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/dos/OdontogramaRojo8.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/dos/OdontogramaRojo7.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/dos/OdontogramaRojo2.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/dos/OdontogramaRojo6.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/dos/OdontogramaRojo10.png`;} 
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/dos/OdontogramaRojo28.png`;} 
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/dos/OdontogramaRojo27.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/dos/OdontogramaRojo11.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/dos/OdontogramaRojo9.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/dos/OdontogramaRojo14.png`;}
                // Tres piezas seleccionadas
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/rojos/tres/OdontogramaRojo13.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/tres/OdontogramaRojo3.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/tres/OdontogramaRojo30.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/tres/OdontogramaRojo18.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/tres/OdontogramaRojo15.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/tres/OdontogramaRojo12.png`;} 
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/tres/OdontogramaRojo16.png`;} 
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/tres/OdontogramaRojo17.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/tres/OdontogramaRojo29.png`;} 
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/tres/OdontogramaRojo14.png`;}                               
                // Cuatro piezas seleccionadas
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/Todos menos uno/OdontogramaRojo21.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaRojo22.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaRojo4.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaRojo20.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaRojo19.png`;}                 
            } 
            else if (estado.Realizado == true){
                if(Caras.PzComplet == true){return `/images/odontograma/azul/OdontogramaAzulPzCompleta.png`;}
                // Una sola pieza seleccionada
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/uno solo/OdontogramaAzul1.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/uno solo/OdontogramaAzul25.png`;}
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/uno solo/OdontogramaAzul24.png`;}
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/uno solo/OdontogramaAzul23.png`;}
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/uno solo/OdontogramaAzul26.png`;}
                // Dos piezas seleccionadas 
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/dos/OdontogramaAzul8.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/dos/OdontogramaAzul7.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/dos/OdontogramaAzul2.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/dos/OdontogramaAzul6.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/dos/OdontogramaAzul10.png`;} 
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/dos/OdontogramaAzul28.png`;} 
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/dos/OdontogramaAzul27.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/dos/OdontogramaAzul11.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/dos/OdontogramaAzul9.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/azul/dos/OdontogramaAzul14.png`;}  
                // Tres piezas seleccionadas
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `/images/odontograma/azul/tres/OdontogramaAzul13.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/tres/OdontogramaAzul3.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/tres/OdontogramaAzul30.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/tres/OdontogramaAzul18.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/tres/OdontogramaAzul15.png`;} 
                if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/azul/tres/OdontogramaAzul12.png`;} 
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/azul/tres/OdontogramaAzul16.png`;} 
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/azul/tres/OdontogramaAzul17.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/azul/tres/OdontogramaAzul29.png`;} 
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/azul/tres/OdontogramaAzul14.png`;} 
                // Cuatro piezas seleccionadas
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `/images/odontograma/rojos/Todos menos uno/OdontogramaAzul21.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaAzul22.png`;}
                if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaAzul4.png`;}
                if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaAzul20.png`;}
                if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `/images/odontograma/rojos/Todos menos uno/OdontogramaAzul19.png`;}   
            } else {
                return `/images/odontograma/normal.png`;
            }
        }
    }
    // UNCION PARA RENDERIZAR LAS CARAS DE CADA TRATAMIENTO
    CarasString = (Caras) => {
        if(Caras.PzComplet == true){return `Pieza Completa`;}
        // Una sola pieza seleccionada
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `Mesial`;}      
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `Distal`;}
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `Palatina`;}
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `Lingual`;}
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `Vestibular`;}
        // Dos piezas seleccionadas 
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == false){return `Mesial - Distal`;}
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `Mesial - Palatina`;}
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `Mesial - Lingual`;}
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `Mesial - Vestibular`;}
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `Distal - Palatina`;} 
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `Distal - Lingual`;} 
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `Distal - Vestibular`;} 
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `Palatina - Lingual`;} 
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `Palatina - Vestibular`;} 
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `Lingual - Vestibular`;}
        // Tres piezas seleccionadas
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == false){return `Mesial - Distal - Palatina`;}
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == false){return `Mesial - Distal - Lingual`;}
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == false && Caras.Vestibular == true){return `Mesial - Distal - Vestibular`;}
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `Distal - Palatina - Lingual`;}
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `Distal - Palatina - Vestibular`;} 
        if(Caras.Mesial == false && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `Palatina - Lingual - Vestibular`;} 
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `Mesial - Palatina - Vestibular`;} 
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `Mesial - Palatina - Lingual`;}
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `Distal - Lingual - Vestibular`;} 
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `Distal - Lingual - Vestibular`;}           
        // Cuatro piezas seleccionadas
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == false){return `Mesial - Distal - Palatina - Lingual`;}
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == false && Caras.Vestibular == true){return `Mesial - Distal - Palatina - Vestibular`;}
        if(Caras.Mesial == true && Caras.Distal == true && Caras.Palatina == false && Caras.Lingual == true && Caras.Vestibular == true){return `Mesial - Distal - Lingual - Vestibular`;}
        if(Caras.Mesial == true && Caras.Distal == false && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `Mesial - Palatina - Lingual - Vestibular`;}
        if(Caras.Mesial == false && Caras.Distal == true && Caras.Palatina == true && Caras.Lingual == true && Caras.Vestibular == true){return `Distal - Palatina - Lingual - Vestibular`;}                                              
    }
    // FUNCION PARA PASAR DE ESTADO A REALIAR A REALIZADO
    PasarTratamientoArealizado = (pieza) => {
        let contador = 0;
        let error = false;
        // COPIAMOS LOS DATOS DEL PACIENTE
        let PacienteCopy = Object.assign({}, this.state.Paciente);   
        // OBTENEMOS LA PIEZA QUE NECESITAMOS CAMBIAR DE ESTADO  
        const Pieza = PacienteCopy[0].Odontograma[pieza];
        // RECORREMOS LA PIEZA PARA SABER LA CANTIDAD DE TRATAMIENTOS REALIZADOS
        Pieza.forEach(element => {contador++;});
        // OBTENEMOS EL ESTADO DE EL ULTIMO TRATAMIENTO
        const estado = Pieza[contador-1].Estado;  
        // SI EL TRATAMIENTO ES A REALIZAR LO CAMBIAMOS A REALIZADO
        if(estado.ARealizar == true){
            Pieza[contador-1].Estado.ARealizar = false;
            Pieza[contador-1].Estado.Realizado = true;
        } else return (
            error == true,
            console.log("Error")
        );
        // HACEMOS QUE LA PIEZA ORIGINAL AHORA TENGA EL ESTADO DEL ULTIMO TRATAMIENTO CAMBIADO
        PacienteCopy[0].Odontograma[pieza] = Pieza;
        // ACTUALIZAMOS EL STATE
        this.setState({Paciente:PacienteCopy});
        // EDITAMOS EL PACIENTE
        if(error == true){
            this.setState({ErrorVarialbe:true});
        } else {
            fetch(`/api/Paciente/${this.props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.Paciente[0]),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(err => { console.log(err); });
        } 
        this.fetchPaciente(this.props.match.params.id);
    }
    // FUNCION PARA ANULAR EL TRATAMIENTO DE UNA PIEZA
    AnularTratamiento = (pieza) => {
         // COPIAMOS LOS DATOS DEL PACIENTE
         let PacienteCopy = Object.assign({}, this.state.Paciente);   
         // OBTENEMOS LA PIEZA QUE NECESITAMOS ELIMINAR SU ULTIMO TRATAMIENTO
         const Pieza = PacienteCopy[0].Odontograma[pieza];
         // ELIMINAMOS EL ULTIMO ELEMENTO DEL ARRAY
         Pieza.pop();
         // HACEMOS QUE LA PIEZA ORIGINAL AHORA TENGA EL ESTADO DEL ULTIMO TRATAMIENTO CAMBIADO
        PacienteCopy[0].Odontograma[pieza] = Pieza;
        // ACTUALIZAMOS EL STATE
        this.setState({Paciente:PacienteCopy});
        // EDITAMOS EL PACIENTE
        if(error == true){
            this.setState({ErrorVarialbe:true});
        } else {
            fetch(`/api/Paciente/${this.props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.Paciente[0]),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(err => { console.log(err); });
        } 
        this.fetchPaciente(this.props.match.params.id);
    }
    // FUNCION PARA CONFIRMAR TRATAMIENTOS 
    ConfirmarTratamiento = (pieza) => {
        let contador = 0;
        let error = false;
        // COPIAMOS LOS DATOS DEL PACIENTE
        let PacienteCopy = Object.assign({}, this.state.Paciente);   
        // OBTENEMOS LA PIEZA QUE NECESITAMOS CAMBIAR DE ESTADO  
        const Pieza = PacienteCopy[0].Odontograma[pieza];
        // RECORREMOS LA PIEZA PARA SABER LA CANTIDAD DE TRATAMIENTOS REALIZADOS
        Pieza.forEach(element => {contador++;});
        // OBTENEMOS EL ESTADO DE EL ULTIMO TRATAMIENTO
        const estado = Pieza[contador-1].Estado;  
        // SI EL TRATAMIENTO ES A REALIZAR LO CAMBIAMOS A REALIZADO
        if(estado.Realizado == true){
            Pieza[contador-1].Estado.Realizado = false;
            Pieza[contador-1].Estado.Confirmado = true;
        } else return (
            error == true,
            console.log("Error")
        );
        // HACEMOS QUE LA PIEZA ORIGINAL AHORA TENGA EL ESTADO DEL ULTIMO TRATAMIENTO CAMBIADO
        PacienteCopy[0].Odontograma[pieza] = Pieza;
        // ACTUALIZAMOS EL STATE
        this.setState({Paciente:PacienteCopy});
        // EDITAMOS EL PACIENTE
        if(error == true){
            this.setState({ErrorVarialbe:true});
        } else {
            fetch(`/api/Paciente/${this.props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.Paciente[0]),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(err => { console.log(err); });
        } 
        this.fetchPaciente(this.props.match.params.id);
    }
    render(){
        return(
            <div>
                {this.MensajeFunction()}
                <MODALHISTORIACLINICA 
                    Paciente={this.state.Paciente[0].HistoriaClinica}
                />
                <MODALHISTORIADIENTE
                    Paciente={this.state.Paciente[0]}
                    PiezaSeleccionada={this.state.PiezaSeleccionada}
                    Tratamientos={this.state.Tratamientos} 
                    PiezaSeleccionada={this.state.PiezaSeleccionada}
                    CarasString={this.CarasString}
                />
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
                    TratamientoImgPieza={this.TratamientoImgPieza}
                />
                </div>
                {/* <TABLAS/> */}
                <div className="col-sm-12">
                    <div className="row">
                        <AREALIZAR 
                            Paciente={this.state.Paciente[0].Odontograma} 
                            Tratamientos={this.state.Tratamientos}
                            CarasString={this.CarasString}
                            TablaArealizar={this.TablaArealizar}
                            PasarTratamientoArealizado={this.PasarTratamientoArealizado}
                            AnularTratamiento={this.AnularTratamiento}
                        />
                        <REALIZADOS
                            Paciente={this.state.Paciente[0].Odontograma} 
                            Tratamientos={this.state.Tratamientos}
                            CarasString={this.CarasString}
                            ConfirmarTratamiento={this.ConfirmarTratamiento}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Paciente;
