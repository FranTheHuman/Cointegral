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
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>11</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza11")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza11")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza12.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>12</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza12")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza12")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza13.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>13</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza13")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza13")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza14.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>14</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza14")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza14")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza15.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>15</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza15")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza15")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza16.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>16</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza16")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza16")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza17.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>17</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza17")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza17")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza18.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>18</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza18")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza18")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza21.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>21</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza21")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza21")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza22.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>22</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza22")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza22")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza23.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>23</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza23")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza23")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza24.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>24</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza24")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza24")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza25.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>25</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza25")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza25")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza26.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>26</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza16")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza26")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza27.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>27</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza27")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza27")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza28.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>28</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza28")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza28")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza31.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>31</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza31")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza31")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza32.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>32</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza32")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza32")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza33.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>33</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza33")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza33")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza34.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>34</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza34")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza34")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza35.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>35</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza35")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza35")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza36.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>36</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza36")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza36")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza37.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>37</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza37")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza37")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza38.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>38</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza38")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza38")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza41.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>41</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza41")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza41")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            {
                                props.Paciente.Pieza42.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>42</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza42")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza42")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza43.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>43</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza43")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza43")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza44.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>44</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza44")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza44")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza45.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>45</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza45")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza45")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza46.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>46</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza46")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza46")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza47.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>47</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza47")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza47")}>Realizado</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            } 
                            {
                                props.Paciente.Pieza48.map(p => {
                                    if(p.Estado.ARealizar == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.substring(0, 10)}</td>
                                                <td>48</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                <td>{props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(t.Nombre)}})}</td>
                                                <td>
                                                <button type="button" className="btn btn-danger mr-1" onClick={()=>props.AnularTratamiento("Pieza48")}>Anular</button>
                                                <button type="button" className="btn btn-primary" onClick={()=>props.PasarTratamientoArealizado("Pieza48")}>Realizado</button>
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
