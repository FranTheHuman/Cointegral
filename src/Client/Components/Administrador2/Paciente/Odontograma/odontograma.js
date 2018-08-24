import React from 'react';
let contador = 0;
const ODONTOGRAMA = (props) => (
        <div className="col-sm-8">
            <div className="row" id="odontograma-UWU">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" id="Arriba">
                            <div className="row ml-4 mt-1">
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza18")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza18" ? `/images/odontograma/NumerosSeleccionados/18.png` : "/images/odontograma/Numeros/18.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza17")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza17" ? `/images/odontograma/NumerosSeleccionados/17.png` : "/images/odontograma/Numeros/17.png"} alt="" /></a>  
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza16")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza16" ? `/images/odontograma/NumerosSeleccionados/16.png` : "/images/odontograma/Numeros/16.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza15")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza15" ? `/images/odontograma/NumerosSeleccionados/15.png` : "/images/odontograma/Numeros/15.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza14")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza14" ? `/images/odontograma/NumerosSeleccionados/14.png` : "/images/odontograma/Numeros/14.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza13")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza13" ? `/images/odontograma/NumerosSeleccionados/13.png` : "/images/odontograma/Numeros/13.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza12")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza12" ? `/images/odontograma/NumerosSeleccionados/12.png` : "/images/odontograma/Numeros/12.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza11")} ><img className="ml-2" src={props.PiezaSeleccionada == "Pieza11" ? `/images/odontograma/NumerosSeleccionados/11.png` : "/images/odontograma/Numeros/11.png"} alt="" /></a>
                            </div>
                            <div className="row ml-4">
                                <img className="ml-2" src={props.TratamientoImg("Pieza18")} alt="" /> 
                                <img className="ml-2" src={props.TratamientoImg("Pieza17")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza16")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza15")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza14")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza13")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza12")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza11")} alt="" />
                            </div>
                            <div className="row ml-4 mt-1">
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza18")} src={props.TratamientoImgPieza("Pieza18")} alt="" />
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza17")} src={props.TratamientoImgPieza("Pieza17")} alt="" /> 
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza16")} src={props.TratamientoImgPieza("Pieza16")} alt="" />  
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza15")} src={props.TratamientoImgPieza("Pieza15")} alt="" /> 
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza14")} src={props.TratamientoImgPieza("Pieza14")} alt="" /> 
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza13")} src={props.TratamientoImgPieza("Pieza13")} alt="" />
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza12")} src={props.TratamientoImgPieza("Pieza12")} alt="" />
                                <img data-toggle="modal" data-target="#ModalTratamientos" data-whatever="@mdo" className="ml-2" onClick={()=>props.handleChangePiezas("Pieza11")} src={props.TratamientoImgPieza("Pieza11")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" id="Arriba">
                            <div className="row ml-4 mt-1">
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza21")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza21" ? `/images/odontograma/NumerosSeleccionados/21.png` : "/images/odontograma/Numeros/21.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza22")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza22" ? `/images/odontograma/NumerosSeleccionados/22.png` : "/images/odontograma/Numeros/22.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza23")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza23" ? `/images/odontograma/NumerosSeleccionados/23.png` : "/images/odontograma/Numeros/23.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza24")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza24" ? `/images/odontograma/NumerosSeleccionados/24.png` : "/images/odontograma/Numeros/24.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza25")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza25" ? `/images/odontograma/NumerosSeleccionados/25.png` : "/images/odontograma/Numeros/25.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza26")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza26" ? `/images/odontograma/NumerosSeleccionados/26.png` : "/images/odontograma/Numeros/26.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza27")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza27" ? `/images/odontograma/NumerosSeleccionados/27.png` : "/images/odontograma/Numeros/27.png"} alt="" /></a>
                                <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza28")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza28" ? `/images/odontograma/NumerosSeleccionados/28.png` : "/images/odontograma/Numeros/28.png"} alt="" /></a>
                            </div>                        
                            <div className="row ml-4">
                                <img className="ml-2" src={props.TratamientoImg("Pieza21")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza22")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza23")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza24")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza25")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza26")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza27")} alt="" />
                                <img className="ml-2" src={props.TratamientoImg("Pieza28")} alt="" />
                            </div>
                            <div className="row ml-4 mt-1">
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza21")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza21")} alt="" /></a> 
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza22")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza22")} alt="" /></a> 
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza23")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza23")} alt="" /></a>  
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza24")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza24")} alt="" /></a> 
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza25")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza25")} alt="" /></a>  
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza26")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza26")} alt="" /></a> 
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza27")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza27")} alt="" /></a>
                                <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza28")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza28")} alt="" /></a>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ODONTOGRAMA DIENTES ABAJO */}
            <div className="col-sm-12">
                <div className="row" id="odontograma-UWU">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body" id="Arriba">
                                <div className="row ml-4 mt-1">
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza48")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza48" ? `/images/odontograma/NumerosSeleccionados/48.png` : "/images/odontograma/Numeros/48.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza47")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza47" ? `/images/odontograma/NumerosSeleccionados/47.png` : "/images/odontograma/Numeros/47.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza46")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza46" ? `/images/odontograma/NumerosSeleccionados/46.png` : "/images/odontograma/Numeros/46.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza45")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza45" ? `/images/odontograma/NumerosSeleccionados/45.png` : "/images/odontograma/Numeros/45.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza44")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza44" ? `/images/odontograma/NumerosSeleccionados/44.png` : "/images/odontograma/Numeros/44.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza43")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza43" ? `/images/odontograma/NumerosSeleccionados/43.png` : "/images/odontograma/Numeros/43.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza42")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza42" ? `/images/odontograma/NumerosSeleccionados/42.png` : "/images/odontograma/Numeros/42.png"}  alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza41")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza41" ? `/images/odontograma/NumerosSeleccionados/41.png` : "/images/odontograma/Numeros/41.png"}  alt="" /></a>
                                </div>
                                <div className="row ml-4">
                                    <img className="ml-2" src={props.TratamientoImg("Pieza48")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza47")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza46")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza45")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza44")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza43")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza42")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza41")} alt="" /> 
                                </div>
                                <div className="row ml-4 mt-1">
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza48")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza48")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza47")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza47")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza46")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza46")} alt="" /></a>  
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza45")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza45")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza44")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza44")} alt="" /></a>  
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza43")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza43")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza42")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza42")} alt="" /></a>
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza41")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza41")} alt="" /></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body" id="Arriba">
                                <div className="row ml-4 mt-1">
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza31")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza31" ? `/images/odontograma/NumerosSeleccionados/31.png` : "/images/odontograma/Numeros/31.png"} alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza32")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza32" ? `/images/odontograma/NumerosSeleccionados/32.png` : "/images/odontograma/Numeros/32.png"} alt="" /></a>  
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza33")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza33" ? `/images/odontograma/NumerosSeleccionados/33.png` : "/images/odontograma/Numeros/33.png"} alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza34")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza34" ? `/images/odontograma/NumerosSeleccionados/34.png` : "/images/odontograma/Numeros/34.png"} alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza35")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza35" ? `/images/odontograma/NumerosSeleccionados/35.png` : "/images/odontograma/Numeros/35.png"} alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza36")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza36" ? `/images/odontograma/NumerosSeleccionados/36.png` : "/images/odontograma/Numeros/36.png"} alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza37")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza37" ? `/images/odontograma/NumerosSeleccionados/37.png` : "/images/odontograma/Numeros/37.png"} alt="" /></a>
                                    <a href="" data-toggle="modal" data-target="#HISTORIALDIENTE" onClick={()=>props.handleChangePiezas("Pieza38")}><img className="ml-2" src={props.PiezaSeleccionada == "Pieza38" ? `/images/odontograma/NumerosSeleccionados/38.png` : "/images/odontograma/Numeros/38.png"} alt="" /></a>
                                </div>
                                <div className="row ml-4">
                                    <img className="ml-2" src={props.TratamientoImg("Pieza31")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza32")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza33")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza34")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza35")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza36")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza37")} alt="" />
                                    <img className="ml-2" src={props.TratamientoImg("Pieza38")} alt="" />
                                </div>
                                <div className="row ml-4 mt-1">
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza31")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza31")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza32")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza32")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza33")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza33")} alt="" /></a>  
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza34")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza34")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza35")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza35")} alt=""/></a>  
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza36")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza36")} alt="" /></a> 
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza37")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza37")} alt="" /></a>
                                    <a data-toggle="modal" data-target="#ModalTratamientos" onClick={()=>props.handleChangePiezas("Pieza38")} data-whatever="@mdo"><img className="ml-2" src={props.TratamientoImgPieza("Pieza38")} alt="" /></a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)

export default ODONTOGRAMA;