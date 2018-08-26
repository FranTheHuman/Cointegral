import React from 'react';

const TablaTurnos = (props) => {
    const TurnosOcupados = {color: 'white'};
    return(
        <div className="container-fluid">
            <table id="TABLA" className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col"><a onClick={()=>props.VolverSemana()}><i className="fas fa-caret-left"></i></a></th>
                        <th scope="col">Lunes {props.Dias.Lunes}</th>
                        <th scope="col">Martes {props.Dias.Martes}</th>
                        <th scope="col">Miercoles {props.Dias.Miercoles}</th>
                        <th scope="col">Jueves {props.Dias.Jueves}</th>
                        <th scope="col">Viernes {props.Dias.Viernes}</th>
                        <th scope="col"><a onClick={()=>props.PasarSemana()} ><i className="fas fa-caret-right"></i></a></th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">8:00</th>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-danger"><a href="" data-toggle="modal" data-target="#exampleModalDESBLOQUEO"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-danger"><a href="" data-toggle="modal" data-target="#exampleModalDESBLOQUEO"><i className="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">8:15</th>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-danger"><a href="" data-toggle="modal" data-target="#exampleModalDESBLOQUEO"><i className="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">8:30</th>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-danger"><a href="" data-toggle="modal" data-target="#exampleModalDESBLOQUEO"><i className="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">8:45</th>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">9:00</th> 
                        <td><a href="" style={TurnosOcupados}>Antonella Monesterolo</a></td>
                        <td><a href="" style={TurnosOcupados}>Martina Chamello</a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                        <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>
                    </tr>
                    {/* <tr>
                        <th scope="row">9:15</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">9:30</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td><a href="" style="color: rgb(255, 255, 255);">Federico Gimenez</a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">9:45</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">10:00</th>
                        <td><a href="" style="color: rgb(255, 255, 255);">Lautaro Martinez</a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">10:15</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">10:30</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">10:45</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">11:00</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">11:15</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">11:30</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">11:45</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">12:00</th>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href="" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">12:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">12:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">12:45</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">13:00</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">13:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">13:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">13:45</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">14:00</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">14:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">14:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">14:45</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">15:00</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">15:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">15:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">15:45</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">16:00</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">16:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">16:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">16:45</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">17:00</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">17:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">17:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">17:45</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">18:00</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">18:15</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>
                    <tr>
                        <th scope="row">18:30</th>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                        <td class="bg-success"><a href=""><i class="fas fa-plus-circle"></i></a></td>
                    </tr>            */}
                </tbody>
            </table>
        </div>
    )    
}

export default TablaTurnos;