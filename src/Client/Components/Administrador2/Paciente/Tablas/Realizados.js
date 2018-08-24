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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                props.Paciente.Pieza17.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>17</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza17")}>Confirmar</button>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
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
                            {
                                props.Paciente.Pieza26.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>26</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza26")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza27.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>27</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza27")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza28.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>28</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza28")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza31.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>31</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza31")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza32.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>32</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza32")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }     
                            {
                                props.Paciente.Pieza33.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>33</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza33")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza34.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>34</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza34")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza35.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>35</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza35")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza36.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>36</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza36")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza37.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>37</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza37")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza38.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>38</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza38")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza41.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>41</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza41")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza42.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>42</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza42")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza43.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>43</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza43")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza44.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>44</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza44")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza45.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>45</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza45")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza46.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>46</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza46")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza47.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>47</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza47")}>Confirmar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }    
                            {
                                props.Paciente.Pieza48.map(p => {
                                    if(p.Estado.Realizado == true){
                                        return (
                                            <tr key={p._id}>
                                                <td>{p.Fecha.toString().substring(0, 10)}</td>
                                                <td>48</td>
                                                <td>{p.Caras.PzComplet == true ? "Pieza Completa" : props.CarasString(p.Caras)}</td>
                                                {props.Tratamientos.map(t => {if(t._id == p.Tratamiento){return(<td key={t._id}>{t.Nombre}</td>)}})}
                                                <td> 
                                                <button type="button" className="btn btn-success" onClick={()=>props.ConfirmarTratamiento("Pieza48")}>Confirmar</button>
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