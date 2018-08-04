import React, { Component } from 'react';

class Turnos extends Component {
    render(){
        return(
            <div className="container-fluid">
                <table id="TABLAINICIO" className="table table-dark mt-0 table-responsive-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Horario</th>
                            <th scope="col">Doctor/a</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><a href="#">Federico Gimenez</a></td>
                            <td>9:00</td>
                            <td><a href="#">Maria Viale</a></td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm mr-1">Confirmar</button>
                                <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                                <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><a href="#">Juan Saad</a></td>
                            <td>10:30</td>
                            <td><a href="#">Gabriela Heredia</a></td>
                            <td id="Botones">
                                <button type="button" className="btn btn-success btn-sm mr-1">Confirmar</button>
                                <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                                <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><a href="#">Larry Diaz</a></td>
                            <td>12:00</td>
                            <td><a href="#">Maria Viale</a></td>
                            <td id="Botones">
                                <button type="button" className="btn btn-success btn-sm mr-1">Confirmar</button>
                                <button type="button" className="btn btn-success btn-sm mr-1">Ausencia Anunciada</button>
                                <button type="button" className="btn btn-success btn-sm mr-1">Ausencia No Anunciada</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Turnos;