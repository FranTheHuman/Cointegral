import React, {Component} from 'react';

class TablaOdontologos extends Component{
    render() {
        return(
            <div className="container-fluid">
                <table id="TablaOdontologos" className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ODONTOLOGO/A</th>
                            <th scope="col">ESPECIALIDAD</th>
                            <th scope="col">DNI</th>
                            <th scope="col">TELEFONO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><a href="#">Maria Viale</a></td>
                            <td>Odontología General</td>
                            <td>37411166</td>
                            <td>3624825478</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><a href="#">Gabriela Heredia</a></td>
                            <td>Implantes dentales</td>
                            <td>3155789</td>
                            <td>3524825478</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><a href="#">Liliana Romano</a></td>
                            <td>Endodoncia</td>
                            <td>3532289</td>
                            <td>3334771298</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td><a href="#">Gimena Gomez</a></td>
                            <td>Ortodoncia</td>
                            <td>3222271</td>
                            <td>3624826666</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td><a href="#">Julieta Mora</a></td>
                            <td>Prótesis dentales</td>
                            <td>3772981</td>
                            <td>3334888978</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td><a href="#">Rodrigo Ferraro</a></td>
                            <td>Odontología Estética</td>
                            <td>3115279</td>
                            <td>3534825478</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td><a href="#">Esteban Miranda</a></td>
                            <td>Odontopediatría</td>
                            <td>3112211</td>
                            <td>3534825478</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td><a href="#">Agustina Fisore</a></td>
                            <td>Urgencias</td>
                            <td>4022289</td>
                            <td>3534825478</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TablaOdontologos;