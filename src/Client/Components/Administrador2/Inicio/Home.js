import React, { Component } from 'react';

import Mensaje from './Mensaje/Mensaje.js';
import Turnos from './Turnos/Turnos';
class Home extends Component {
    render(){
        return(
            <div>
                <Mensaje />
                <Turnos />
            </div>
        )
    }
}

export default Home;
