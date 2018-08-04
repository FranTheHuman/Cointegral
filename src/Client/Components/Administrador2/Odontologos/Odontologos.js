import React, { Component } from 'react';
import ModalAltaOdontologos from './/NuevoOdontologo/Modal';
import BotonAbrir from './NuevoOdontologo/BotonAbrir';
import TablaOdontologos from './Tabla/Tabla';
class Odontologos extends Component {
    render(){
        return(
            <div>
                <ModalAltaOdontologos/>
                <BotonAbrir/>
                <TablaOdontologos/>
            </div>
        )
    }
}

export default Odontologos;
