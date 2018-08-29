import React from 'react';

const Bloque = (props) => {
    const TurnosOcupados = {color: 'white'};
    let turnirijillo = [];
    if(props.EspecialistaSeleccionado._id == ""){ // Si la propiedad especialista id no tiene id, es porque no se seleciono ninguno. 
        return  (<td className="bg-dark"></td>);
    } else { // si se selecciono un especialista 
        props.Turnos.map(turno => { // recorremos los turnos
            if( turno.Especialista._id == props.EspecialistaSeleccionado[0]._id ) { // el turno con el mismo especialista
                if(turno.FechaTurno == `${new Date().getFullYear()}-0${props.Mes+1}-${props.DiaNum}T${props.Horario}:00.000Z`){ // el turno con el mismo horario
                    turnirijillo.push(turno);
                } 
            } 
        })   
        if(turnirijillo.length != 0){
            return  (<td><a href={`/Paciente/${turnirijillo[0]._id}`} style={TurnosOcupados}>{`${turnirijillo[0].Paciente.Personal.Nombre}`} {`${turnirijillo[0].Paciente.Personal.Apellido}`}</a></td>)
        } else {
            return(<td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos" onClick={()=>props.HandleChangeHorario(`${props.Horario}`, `${props.Dia}`)}><i className="fas fa-plus-circle"></i></a></td>);
        }
        
        
    }
   









}
export default Bloque;

//     const TurnosOcupados = {color: 'white'};
//     if(props.EspecialistaSeleccionado._id == ""){ // SI NO HAY UN ESPECIALISTA SELECCIONADO NO DEVUELVO NADA EN LA TABLA
//         return  <td className="bg-dark"></td>
//     } else {
//         if(props.EspecialistaSeleccionado[0].Turnos.length == 0){  // SI EN LOS TURNOS DEL ESPECIALISTA SELECCIONADO NO HAY NADA QUE TODOS DEN LA POSIBILIDAD DE NUEVO TURNO
//             return  <td className="bg-success"><a href=""  data-toggle="modal" data-target="#exampleModalTurnos" onClick={()=>props.HandleChangeHorario(`${props.Horario}`, `${props.dia}`)}><i className="fas fa-plus-circle"></i></a></td>
//         } else {
//             let turnirijillo = {};
//                  props.Turnos.map(turno2 => {
//                      if( props.turno2.Especialista._id == props.EspecialistaSeleccionado ) {
//                 //         if(turno2.FechaTurno == `${new Date().getFullYear()}-${props.Mes}-${props.DiaNum[props.dia]}T${props.Horario}:00.000Z`){
//                         turnirijillo == turno2;
//                         } 
//                 //  } else { {`${turno2.Paciente.Personal.Nombre} ${turno2.Paciente.Personal.Apellido}`}
//                 //         return  (
//                 //             <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos" onClick={()=>props.HandleChangeHorario(`${props.Horario}`, `${props.dia}`)}><i className="fas fa-plus-circle"></i></a></td>
//                 //         )
//                     //  }  
//                  })          
//              console.log(turnirijillo);
//              if(turnirijillo._id != null){
//                 return  (<td><a href="" style={TurnosOcupados}>Hola</a></td>)
//              } 
//              else {
//                 return  (<td><a href="" style={TurnosOcupados}>Hola :C</a></td>)
//              }
//             // return  <td><a href="" style={TurnosOcupados}>{`${turnirijillo.Paciente.Personal.Nombre} ${turnirijillo.Paciente.Personal.Apellido}`}</a></td>
//             // return <td><a href="" style={TurnosOcupados}>Antonella Monesterolo</a></td>
//         } 
//     }

// {/* <td className="bg-danger"><a href="#" data-toggle="modal" data-target="#exampleModalDESBLOQUEO" onClick={()=>props.HandleChangeHorario(`${props.Horario}`, `${props.dia}`)}><i className="fas fa-plus-circle"></i></a></td> */}
// // <td><a href="" style={TurnosOcupados}>Antonella Monesterolo</a></td>



