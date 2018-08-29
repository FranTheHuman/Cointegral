import React, { Component } from 'react';
import ModalAltaObraSocial from './NuevaObraSocial/Modal';
import BotonAbrir from './NuevaObraSocial/BotonAbrir';
import TablaObraSocial from './Tabla/Tabla';
class ObrasSociales extends Component {
    constructor() {
        super();
        this.state = {
            ObraSocial: [],
            Nombre: ''
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
                    this.fetchObraSociales();
                })
                .catch(err => console.log(err));
        event.preventDefault();
    }
    handleChange = (e) => {
        const  { name, value }  = e.target;
        this.setState({
            [name]: value
        })  
    }
    render(){
        return(
            <div>
                <BotonAbrir/>
                <ModalAltaObraSocial handleChange={this.handleChange} addObraSocial={this.addObraSocial} Nombre={this.state.Nombre}/>
                <TablaObraSocial ObraSocial={this.state.ObraSocial}/>
            </div>
        )
    }
}
export default ObrasSociales;
