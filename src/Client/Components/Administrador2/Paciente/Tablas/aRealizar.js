import React from 'react';

const AREALIZAR = (props) =>  (
            <div className="col-sm-7"> 
                <div id="TABLA"> 
                    <h1>A realizar</h1>
                    <table className="table table-bordered table-dark text-center">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Pieza</th>
                                <th scope="col">Caras</th>
                                <th scope="col">Tratamiento</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.Paciente.Pieza11.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>11</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })                               
                            }
                            {
                                props.Paciente.Pieza12.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>12</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                                                        {
                                props.Paciente.Pieza13.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>13</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                                                        {
                                props.Paciente.Pieza14.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>14</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                                                        {
                                props.Paciente.Pieza15.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>15</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                                                        {
                                props.Paciente.Pieza16.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>16</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                                                        {
                                props.Paciente.Pieza17.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>17</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                                                        {
                                props.Paciente.Pieza18.map(p => {
                                    if(p.Estado = "A realizar"){
                                        return (
                                            <tr>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>18</td>
                                                <td>
                                                {p.Caras.PzComplet == true ? "Pieza Completa" : null}
                                                {
                                                    (() => { //BUSCAR COMO MEJORAR ESTE CODIGO RANCIO 
                                                        if(p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Mesial - Distal - Oclusal - Palatina - Lingual";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Oclusal - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Distal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == true && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Mesial - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Distal - Oclusal - Palatina - Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Oclusal";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == false){
                                                            return "Distal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Distal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == true && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Distal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Oclusal - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == false && p.Caras.Vestibular == true){
                                                            return "Palatina - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == true){
                                                            return "Lingual - Vestibular";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Palatina";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == true && p.Caras.Palatina == false && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Oclusal - Lingual";
                                                        } else if (p.Caras.Mesial == false && p.Caras.Distal == false && p.Caras.Oclusal  == false && p.Caras.Palatina == true && p.Caras.Lingual == true && p.Caras.Vestibular == false){
                                                            return "Palatina - Lingual";
                                                        } else {
                                                            return "Paja seguir";
                                                        }                                                   
                                                    })()
                                                } 
                                                </td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1">Anular</button>
                                                <button type="button" className="btn btn-primary">Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

export default AREALIZAR;
