import React, { Component } from 'react';

class AREALIZAR extends Component {
    render(){
        return(
            <div className="col-sm-7"> 
                <div id="TABLA"> 
                    <h1>A realizar</h1>
                    <table className="table table-bordered table-dark text-center">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Pieza</th>
                                <th scope="col">Caras</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>30/07/18</td>
                                <td>18</td>
                                <td>Vestibular Mesial</td>
                                <td>Caries</td>
                                <td>
                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                <button type="button" className="btn btn-primary">Realizado</button>
                                </td>
                            </tr>
                            <tr>
                                <td>30/07/18</td>
                                <td>13</td>
                                <td>Vestibular Oclusal</td>
                                <td>Corona</td>
                                <td>
                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                <button type="button" className="btn btn-primary">Realizado</button>         
                                </td>                     
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AREALIZAR;
