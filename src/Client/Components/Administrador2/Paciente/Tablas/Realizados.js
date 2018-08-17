import React, { Component } from 'react';

class REALIZADOS extends Component {
    render(){
        return(
            <div className="col-sm-5"> 
                <div id="TABLA2"> 
                    <h1>Realizados</h1>
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
                                <td>35</td>
                                <td>Lingual Mesial Distal Oclusal</td>
                                <td>Caries</td>
                                <td>
                                <button type="button" className="btn btn-success">Confirmar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>                
                </div>
            </div> 
        )
    }
}

export default REALIZADOS;