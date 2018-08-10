import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*******************
Importar Componentes
********************/
import Navegacion from './Navegacion/Navegacion'; 
import AltaPacientes from './AltaPacientes/AltaPaciente';
import Home from './Inicio/Home';
import ObrasSociales from './ObrasSociales/ObrasSociales';
import Odontologos from './Odontologos/Odontologos';
import Paciente from './Paciente/Paciente';
import EditPaciente from './Editar Pacientes/Edit';
import Pacientes from './Pacientes/Pacientes';
import Turnos from './Turnos/Turnos';
/************************
Aplicacion Administrador 2
*************************/
class Administrador2 extends Component {
    constructor(){
      super();
      this.state = {   
          User: [{}]
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
            <Route path="/NuevoPaciente" component={AltaPacientes} exact/>
            <Route path="/Pacientes" component={Pacientes} exact/>
            <Route path="/Paciente" component={Paciente} exact/>
            <Route path="/EditPaciente" component={EditPaciente} exact/>
            <Route path="/Turnos" component={Turnos} exact/>
            <Route path="/Odontologos" component={Odontologos} exact/>
            <Route path="/ObrasSociales" component={ObrasSociales} exact/> 
            {/* Sesion */} 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Administrador2;