import React, { Component } from 'react';
import ModalAltaObraSocial from './NuevaObraSocial/Modal';
import BotonAbrir from './NuevaObraSocial/BotonAbrir';
import TablaObraSocial from './Tabla/Tabla';
class ObrasSociales extends Component {
    render(){
        return(
            <div>
                <BotonAbrir/>
                <ModalAltaObraSocial/>
                <TablaObraSocial/>
            </div>
        )
    }
}

export default ObrasSociales;
