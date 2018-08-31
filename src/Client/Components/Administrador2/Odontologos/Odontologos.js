import React, { Component } from 'react';
import ModalAltaOdontologos from './/NuevoOdontologo/Modal';
import BotonAbrir from './NuevoOdontologo/BotonAbrir';
import TablaOdontologos from './Tabla/Tabla';
import OS from './OdontologoSeleccionado/OS';
import {ValidarNombres, ValidarDNI} from "../../../../public/js/Validacion/index";
class Odontologos extends Component {
    constructor() {
        super();
        this.state = {
            Odontologo: [],
            Nombre: '',
            Apellido: '',
            Documento: '',
            Telefono: '',
            Email: '',
            Domicilio: '',
            Especialidad: 'Odontología General', 
            OdontologoSeleccionado: [
                { _id: "", Nombre: "", Apellido: "", Documento: null, Telefono: null, Email: "", Domicilio: "", Especialidad: "", FechaAlta: ""}
            ],
            ErrorVarialbe: null
        };  
    }
    fetchOdontologos = () => { 
        fetch('/api/Odontologos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Odontologo: data}); 
            } );
    } 
    componentDidMount = () => {
        this.fetchOdontologos(); 
    }
    addOdontologo =(event) =>{
        if(ValidarNombres(this.state.Nombre) == false || ValidarNombres(this.state.Apellido) == false || ValidarDNI(this.state.Documento) == false) { 
            this.setState({ErrorVarialbe: true}); event.preventDefault(); return null; 
        } else {
        fetch('/api/Odontologos', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({ Nombre: '' , Apellido: '', Documento: 0, Telefono: 0, Email: '', Domicilio: '', Especialidad:''});
                    this.setState({ErrorVarialbe: null});
                    this.fetchOdontologos();
                })
                .catch(err => console.log(err));
        event.preventDefault();
        }
    }
    handleChange = (e) => {
        const  { name, value }  = e.target;
        this.setState({
            [name]: value
        })  
    } 
    TraerDatosDeOdontologo = (id) => {
        fetch(`/api/Odontologo/${id}`)  
            .then(res => res.json())
            .then(data => {this.setState({OdontologoSeleccionado: data});})
            .catch(err => console.log(err));
    } 
    // FUNCION PARA MOSTREAR UNA MENSAJE DE ERROR SI LA CARGA TUVO UN PROBLEMA O DE SUCCESS SI LA CARGA FUE SATISFACTORIA
    MensajeFunction = () => {
        if(this.state.ErrorVarialbe) {
            return (
                <div className="alert alert-danger" role="alert">
                    Un Error ah ocurrido en la carga del especialista, Verifique que los datos ingresados sean los correctos :c
                </div>
            )
        } else if(this.state.ErrorVarialbe == false) {
            return (
                <div className="alert alert-success" role="alert">
                    Especialista cargado correctamente UwU
                </div>
            )
        } else return null
    }
    render(){
        return(
            <div>
                <OS OS={this.state.OdontologoSeleccionado}/>
                <ModalAltaOdontologos addOdontologo={this.addOdontologo} handleChange={this.handleChange} state={this.state} MensajeFunction={this.MensajeFunction}/>
                <BotonAbrir/>
                <TablaOdontologos Odontologo={this.state.Odontologo} TraerDatosDeOdontologo={this.TraerDatosDeOdontologo}/>
            </div>
        )
    }
}

export default Odontologos;
