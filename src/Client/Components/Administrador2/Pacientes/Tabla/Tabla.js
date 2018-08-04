import React, { Component } from 'react';

class TablaPacientes extends Component {
    render() {
        return(
            <div class="container-fluid">
                <table id="TablaPacientes" class="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">PACIENTE</th>
                    <th scope="col">DNI</th>
                    <th scope="col">OBRA SOCIAL</th>
                    <th scope="col">TELEFONO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td><a href="#">Facundo Sotto</a></td>
                    <td>31548895</td>
                    <td>OSPAT</td>
                    <td>3624825478</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td><a href="#">Joaquin Caballero</a></td>
                    <td>32548777</td>
                    <td>OSFATUN</td>
                    <td>3324855278</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td><a href="#">Martina Chamello</a></td>
                    <td>31566623</td>
                    <td>OSPAT</td>
                    <td>3534828898</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td><a href="#">Federico Gimenez</a></td>
                    <td>31166895</td>
                    <td>OSPAT</td>
                    <td>3624826666</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td><a href="#">Juan Saad</a></td>
                    <td>31243392</td>
                    <td>OSFATUN</td>
                    <td>3334888978</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td><a href="#">Larry Diaz</a></td>
                    <td>31338225</td>
                    <td>OSPECOR</td>
                    <td>3534825478</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td><a href="#">Marta Gonzales</a></td>
                    <td>41212295</td>
                    <td>PREVENCIÓN SALUD</td>
                    <td>3624823328</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td><a href="#">Antonella Monesterolo</a></td>
                    <td>31541182</td>
                    <td>PAMI</td>
                    <td>3324638278</td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td><a href="#">Lautaro Martinez</a></td>
                    <td>41421158</td>
                    <td>OPDEA</td>
                    <td>3534821617</td>
                    </tr>
                    <tr>
                    <th scope="row">10</th>
                    <td><a href="#">Lautaro Martinez</a></td>
                    <td>41421158</td>
                    <td>OPDEA</td>
                    <td>3534821617</td>
                    </tr>
                    <tr>
                    <th scope="row">11</th>
                    <td><a href="#">Lautaro Martinez</a></td>
                    <td>41421158</td>
                    <td>OPDEA</td>
                    <td>3534821617</td>
                    </tr>
                </tbody>
                </table>
          </div>
        )
    }
}

export default TablaPacientes;