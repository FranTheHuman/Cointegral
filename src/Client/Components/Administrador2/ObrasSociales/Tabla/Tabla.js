

import React, {Component} from 'react';

class TablaObraSocial extends Component{
    render() {
        return(
            <div class="container-fluid">
                <table id="TablaObrasSociales" class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">OBRA SOCIAL</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>PARTICULAR</td> 
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>OSPAT</td> 
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>OSFATUN</td> 
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>OSPECOR</td> 
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>PREVENCIÓN SALUD</td> 
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>PAMI</td> 
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>OPDEA</td> 
                        </tr> 
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TablaObraSocial;