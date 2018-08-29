import React from 'react';
import Bloque from './bloque';
const TablaTurnos = (props) => (
        <div className="container-fluid">
            <table id="TABLA" className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col"><a onClick={()=>props.VolverSemana()}><i className="fas fa-caret-left fa-2x"></i></a></th>
                        <th scope="col">Lunes {props.Dias.Lunes} / {props.Mes + 1}</th>
                        <th scope="col">Martes {props.Dias.Martes} </th>
                        <th scope="col">Miercoles {props.Dias.Miercoles} </th>
                        <th scope="col">Jueves {props.Dias.Jueves} </th>
                        <th scope="col">Viernes {props.Dias.Viernes} </th>
                        <th scope="col"><a onClick={()=>props.PasarSemana()} ><i className="fas fa-caret-right fa-2x"></i></a></th> 
                    </tr>
                </thead> 
                <tbody>
                    <tr> 
                        <th scope="row">8:00</th> 
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:00" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:00" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:00" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:00" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:00" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">8:15</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:15" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:15" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:15" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:15" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:15" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">8:30</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:30" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:30" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:30" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:30" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:30" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">8:45</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:45" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:45" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:45" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:45" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="08:45" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">9:00</th> 
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:00" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:00" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:00" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:00" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:00" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">9:15</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:15" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:15" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:15" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:15" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:15" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">9:30</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:30" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:30" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:30" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:30" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:30" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">9:45</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:45" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:45" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:45" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:45" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="09:45" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">10:00</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:00" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:00" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:00" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:00" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:00" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">10:15</th>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:15" DiaNum={props.Dias.Lunes}     HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Lunes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:15" DiaNum={props.Dias.Martes}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Martes"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:15" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Miercoles"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:15" DiaNum={props.Dias.Jueves}    HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Jueves"/>
                        <Bloque Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:15" DiaNum={props.Dias.Viernes}   HandleChangeHorario={props.HandleChangeHorario} Pacientes={props.Pacientes} Dia="Viernes"/>
                    </tr>
                    <tr>
                        <th scope="row">10:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:30" Dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:30" Dia="Martes" DiaNum={props.Dias.Martes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:30" Dia="Miercoles" DiaNum={props.Dias.Miercoles} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:30" Dia="Jueves" DiaNum={props.Dias.Jueves} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:30" Dia="Viernes" DiaNum={props.Dias.Viernes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">10:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="10:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">11:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">11:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">11:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">11:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="11:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">12:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">12:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">12:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">12:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="12:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">13:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">13:15</th>
                        <Bloque  Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque  Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque  Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque  Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque  Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">13:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">13:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="13:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">14:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">14:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">14:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">14:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="14:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">15:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">15:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">15:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">15:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="15:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">16:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">16:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">16:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">16:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="16:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">17:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">17:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">17:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">17:45</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:45" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:45" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:45" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:45" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="17:45" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">18:00</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:00" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:00" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:00" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:00" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:00" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">18:15</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:15" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:15" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:15" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:15" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:15" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>
                    <tr>
                        <th scope="row">18:30</th>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:30" dia="Lunes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:30" dia="Martes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:30" dia="Miercoles" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:30" dia="Jueves" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                        <Bloque Pacientes={props.Pacientes} Mes={props.Mes} EspecialistaSeleccionado={props.EspecialistaSeleccionado} Turnos={props.Turnos} Horario="18:30" dia="Viernes" DiaNum={props.Dias.Lunes} HandleChangeHorario={props.HandleChangeHorario}/>
                    </tr>            
                </tbody>
            </table>
        </div>
    )    

export default TablaTurnos;