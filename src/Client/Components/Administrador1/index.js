import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RenderDom from 'react-dom';
/*******************
Importar Componentes
********************/
import Navegacion from './Navegacion/Navegacion'; 
import Home from './Inicio/Home';
import BajaPacientes from './BajaPacientes/BajaPaciente';
/************************
Aplicacion Administrador 1
*************************/
class Administrador2 extends Component {
    constructor(){
      super();
      this.state = {   
          User: [
            {
              "Tipo": 0,
              "_id": "",
              "create_at": "",
              "last_login": "",
              "username": "",
              "password": "",
              "__v": 0
            }
        ]
      };
      this.IsAdminNav = this.IsAdminNav.bind(this);
    }
/********************************************************
FUNCION PARA OBTENER LOS DATOS DEL USUARIO - PETICION GET
*********************************************************/
fetchUser() { 
    fetch('/api/user') 
        .then(res => res.json())
        .then(data => { 
            this.setState({
              User: data
            });
            console.log(this.state.User[0].Tipo)
        } );
}
/****************************************
FUNCION PARA COMPROBAR EL TIPO DE USUARIO
****************************************/
IsAdminNav(){
    if (this.state.User[0].Tipo  == 1) { return console.log("NO OK"); }
    else if (this.state.User[0].Tipo == 2) { return console.log("OK"); }
    else { return console.log("NO OK 2");}
}
/********************************************************************
FUNCION EN EL MOMENTO EN EL QUE SE MONTA EL COMPONENTE
********************************************************************/
componentDidMount() {     
  this.fetchUser(); 
  this.IsAdminNav(); 
} 

render() {
    return (
      <BrowserRouter>
        <div> 
          <Navegacion/>   
          <Switch>   
            <Route path="/Home" component={Home} exact/>
            {/* Sesion */} 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Administrador2;