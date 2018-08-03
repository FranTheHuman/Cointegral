import React, { Component } from 'react';

/************************
Importar administradores
*************************/
import Administrador2 from './Components/Administrador2/index';
import Administrador1 from './Components/Administrador1/index';
/*******************
Componente principal de la Aplicacion
********************/
class App extends Component {
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
    this.IsAdmin = this.IsAdmin.bind(this);
  }
/*********************************************
FUNCION PARA OBTENER LOS DATOS DEL USUARIO
****************************************/
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
/*********************************************
FUNCION PARA CUANDO EL COMPONENTE SE MONTE TENGA LOS DATOS DEL USUARIO
****************************************/
componentDidMount() {     
  this.fetchUser();
} 
/*********************************************
FUNCION PARA VER QUE NAVEGACION RENDERIZAR
****************************************/
IsAdmin(){
    if (this.state.User[0].Tipo  == 2) { return <Administrador2/> }
    else if (this.state.User[0].Tipo == 1) { return <Administrador1/> }
    else { return console.log("HOLA x2");}
}
/*********************************************
RENDERIZAR DISEÑO
****************************************/ 
  render() {
    return(
    <div>
      {this.IsAdmin()}
    </div>
    );
  }
}

export default App;