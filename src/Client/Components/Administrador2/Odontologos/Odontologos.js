import React, { Component } from 'react';
import ModalAltaOdontologos from './/NuevoOdontologo/Modal';
import BotonAbrir from './NuevoOdontologo/BotonAbrir';
import TablaOdontologos from './Tabla/Tabla';
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
        }; 
        this.fetchOdontologos = this.fetchOdontologos.bind(this);    
        this.handleChange = this.handleChange.bind(this);
        this.addOdontologo = this.addOdontologo.bind(this);
    }

    fetchOdontologos() { 
        fetch('/api/Odontologos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Odontologo: data}); 
            } );
    } 
    componentDidMount(){
        this.fetchOdontologos(); 
    }
    addOdontologo(event){
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
                    console.log(data); 
                    this.setState({ Nombre: '' , Apellido: '', Documento: 0, Telefono: 0, Email: '', Domicilio: '', Especialidad:''});
                    this.fetchOdontologos();
                })
                .catch(err => console.log(err));
        event.preventDefault();
    }
    handleChange(e) {
        const  { name, value }  = e.target;
        this.setState({
            [name]: value
        })  
    }

    render(){
        return(
            <div>
                <ModalAltaOdontologos addOdontologo={this.addOdontologo} handleChange={this.handleChange} state={this.state}/>
                <BotonAbrir/>
                <TablaOdontologos Odontologo={this.state.Odontologo}/>
            </div>
        )
    }
}

export default Odontologos;
