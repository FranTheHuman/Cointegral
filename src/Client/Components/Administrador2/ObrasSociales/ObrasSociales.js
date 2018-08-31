import React, { Component } from 'react';
import ModalAltaObraSocial from './NuevaObraSocial/Modal';
import BotonAbrir from './NuevaObraSocial/BotonAbrir';
import TablaObraSocial from './Tabla/Tabla';
import {ValidarNombres} from '../../../../public/js/Validacion/index';
class ObrasSociales extends Component {
    constructor() {
        super();
        this.state = {
            ObraSocial: [],
            Nombre: '',
            ErrorVarialbe: null
        }; 
    }
    fetchObraSociales = () => { 
        fetch('/api/ObraSocial')  
            .then(res => res.json())
            .then(data => { 
                this.setState({ObraSocial: data}); 
            } );
    }
    componentDidMount(){
        this.fetchObraSociales();
    }
    addObraSocial = (event) => {
        if(ValidarNombres(this.state.Nombre) == false) { 
            this.setState({ErrorVarialbe: true}); event.preventDefault(); return null; 
        } else {
            fetch('/api/ObraSocial', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => { 
                    this.setState({ Nombre: '' });
                    this.setState({ErrorVarialbe: null});
                    this.fetchObraSociales();
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
                <BotonAbrir/>
                <ModalAltaObraSocial handleChange={this.handleChange} addObraSocial={this.addObraSocial} Nombre={this.state.Nombre} MensajeFunction={this.MensajeFunction}/>
                <TablaObraSocial ObraSocial={this.state.ObraSocial}/>
            </div>
        )
    }
}
export default ObrasSociales;
