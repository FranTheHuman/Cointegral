import React from 'react';

const REALIZADOS = (props) => (
            <div className="col-sm-5"> 
                <div id="TABLA2"> 
                    <h1>Realizados</h1>
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
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>11</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza11")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                                                        {
                                props.Paciente.Pieza12.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>12</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza12")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza13.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>13</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza13")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza14.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>14</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza14")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza15.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>15</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza15")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza16.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>16</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza16")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza18.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>18</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza18")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }                             
                                                        {
                                props.Paciente.Pieza21.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>21</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza21")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza22.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>22</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza22")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza23.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>23</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza23")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza24.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>24</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza24")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                                                        {
                                props.Paciente.Pieza25.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>25</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza25")}>Confirmar</button>
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

export default REALIZADOS;