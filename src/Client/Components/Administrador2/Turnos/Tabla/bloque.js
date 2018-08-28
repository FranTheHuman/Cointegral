import React from 'react';

const Bloque = (props) => {
    
    // if(props.EspecialistaSeleccionado.Turnos == 0){
    //     return  <td className="bg-success"><a href="" ><i className="fas fa-plus-circle"></i></a></td>
    // } else {
    //     props.EspecialistaSeleccionado.Turnos.map(turno1 => {
    //         props.Turnos.map(turno2 => {
    //             if( turno1 == turno2._id ) {
    
    //             } else {
                    return  <td className="bg-success"><a href="" data-toggle="modal" data-target="#exampleModalTurnos" onClick={()=>props.HandleChangeHorario("08:00", "Lunes")}><i className="fas fa-plus-circle"></i></a></td>
    //             }
    //         })
    //     })
    // }
}

// <td><a href="" style={TurnosOcupados}>Antonella Monesterolo</a></td>
export default Bloque;


    // //Funcion para determinar el color del bloque
    // ColorBloque = (horario, dia, mes) => {
    //     const odont = Object.assign({}, this.state.EspecialistaSeleccionado);
    //     if(odont.Turnos.length == 0){
    //        return (<td className="bg-success"><a href="" data-toggle="modal" onClick={props.ColorBloque} data-target="#exampleModalTurnos"><i className="fas fa-plus-circle"></i></a></td>) 
    //     } else {
    //         odont.Turnos.map(especialista => {
    //             console.log("Hola", odont);
    //         })
    //     }

    // } 