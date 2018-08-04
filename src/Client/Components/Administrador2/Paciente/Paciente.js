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
    render(){
        return(
            <div>
                <MODALHISTORIACLINICA/>
                <MODALHISTORIADIENTE/>
                <MODALTRATAMIENTOS/>
                <MODALCARAS />
                {/* <MODALES/> */}
                <div className="row"> 
                <FICHAPERSONAL/>
                <ODONTOGRAMA/>
                </div>
                {/* <TABLAS/> */}
                <div className="col-sm-12">
                    <div className="row">
                        <AREALIZAR/>
                        <REALIZADOS/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Paciente;
