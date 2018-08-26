import React, { Component } from 'react';
import Especialistas from './Especialistas/Especialistas';
import ModalTurno from './Modales/ModalTurno';
import ModalDesbloqueo from './Modales/ModalDesbloqueo';
import TablaTurnos from './Tabla/Tabla';
class Turnos extends Component {
    constructor() {
        super();
        this.state = {
            Odontologos: [ { _id: "", Nombre: "", Apellido: "", Documento: null, Telefono: null, Email: "", Domicilio: "", Especialidad: "", FechaAlta: "", Turnos: [] }],   
            Turnos: [ { _id: "", Asistio: null, AusenciaAnunciada: null, Paciente: "", FechaTurno: "", Especialista: { _id: "", Nombre: "", Apellido: ""}} ],
            Dias: { Lunes: 0 , Martes: 0, Miercoles: 0, Jueves: 0, Viernes: 0 }   
        };     
    }
    fetchOdontologos = () => { 
        fetch('/api/Odontologos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Odontologos: data}); 
            } );
    } 
    // Funcion para setear los dias iniciales 
    SetearDiasInicio = () => {
        let DiasCopy = Object.assign({}, this.state.Dias);     
        // Variables iniciales para obtener la informacion actual.   
        var a = new Date(); // La fecha actual
        var dd = a.getDate(); // El numero de dia.
        var dia = a.getDay(); // El dia. (Lunes, Martes, etc)...  
        var b = new Date(); // Otra fecha para la suma de dias 
        if(dia == 0){ // Si es domingo
            //lunes
            b.setDate(dd + 1);
            DiasCopy.Lunes = b.getDate();
            // Martes
            b.setDate(dd + 2);
            DiasCopy.Martes = b.getDate();
            // Miercoles
            b.setDate(dd + 3);
            DiasCopy.Miercoles = b.getDate();
            // Jueves
            b.setDate(dd + 4);
            DiasCopy.Jueves = b.getDate();
            // Viernes 
            b.setDate(dd + 5);
            DiasCopy.Viernes = b.getDate();            
        }
        if(dia == 1){ // Si es lunes 
            //lunes
            DiasCopy.Lunes = dd;
            // Martes
            b.setDate(dd + 1);
            DiasCopy.Martes = b.getDate();
            // Miercoles
            b.setDate(dd + 2);
            DiasCopy.Miercoles = b.getDate();
            // Jueves
            b.setDate(dd + 3);
            DiasCopy.Jueves = b.getDate();
            // Viernes 
            b.setDate(dd + 4);
            DiasCopy.Viernes = b.getDate();   
        }
        if(dia == 2){ // Si es martes 
            //lunes
            b.setDate(dd - 1);
            DiasCopy.Lunes = b.getDate();
            // Martes
            DiasCopy.Martes = dd;
            // Miercoles
            b.setDate(dd + 1);
            DiasCopy.Miercoles = b.getDate();
            // Jueves
            b.setDate(dd + 2);
            DiasCopy.Jueves = b.getDate();
            // Viernes 
            b.setDate(dd + 3);
            DiasCopy.Viernes = b.getDate();  
        }
        if(dia == 3){ // Si es miercoles 
            //lunes
            b.setDate(dd - 2);
            DiasCopy.Lunes = b.getDate();
            // Martes
            b.setDate(dd - 1);
            DiasCopy.Martes = b.getDate();
            // Miercoles
            DiasCopy.Miercoles = dd;
            // Jueves
            b.setDate(dd + 1);
            DiasCopy.Jueves = b.getDate();
            // Viernes 
            b.setDate(dd + 2);
            DiasCopy.Viernes = b.getDate();  
        }
        if(dia == 4){ // Si es jueves 
            //lunes
            b.setDate(dd - 3);
            DiasCopy.Lunes = b.getDate();
            // Martes
            b.setDate(dd - 2);
            DiasCopy.Martes = b.getDate();
            // Miercoles
            b.setDate(dd - 1);
            DiasCopy.Miercoles = b.getDate();
            // Jueves
            DiasCopy.Jueves = dd;
            // Viernes 
            b.setDate(dd + 1);
            DiasCopy.Viernes = b.getDate();  
        }
        if(dia == 5){ // Si es viernes 
            //lunes
            b.setDate(dd - 4);
            DiasCopy.Lunes = b.getDate();
            // Martes
            b.setDate(dd - 3);
            DiasCopy.Martes = b.getDate();
            // Miercoles
            b.setDate(dd - 2);
            DiasCopy.Miercoles = b.getDate();
            // Jueves
            b.setDate(dd - 1);
            DiasCopy.Jueves = b.getDate();
            // Viernes 
            DiasCopy.Viernes = dd;
        }
        if(dia == 6){ // Si es sabado 
            //lunes
            b.setDate(dd + 2);
            DiasCopy.Lunes = b.getDate();
            // Martes
            b.setDate(dd + 3);
            DiasCopy.Martes = b.getDate();
            // Miercoles
            b.setDate(dd + 4);
            DiasCopy.Miercoles = b.getDate();
            // Jueves
            b.setDate(dd + 5);
            DiasCopy.Jueves = b.getDate();
            // Viernes 
            b.setDate(dd + 6);
            DiasCopy.Viernes = b.getDate();                    
        }
        this.setState({Dias:DiasCopy})
    } 
    PasarSemana = () => {
        let DiasCopy = Object.assign({}, this.state.Dias);     
        // Variables iniciales para obtener la informacion actual.   
        var a = new Date(); // La fecha actual
            var l = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Lunes);  
            var dd = l.getDate();  
            l.setDate(dd + 7);
            DiasCopy.Lunes = l.getDate(); 
            // Martes
            var m = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Martes);  
            var dd = m.getDate();  
            m.setDate(dd + 7);
            DiasCopy.Martes = m.getDate(); 
            // Miercoles
            var mi = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Miercoles);  
            var dd = mi.getDate(); 
            mi.setDate(dd + 7);
            DiasCopy.Miercoles = mi.getDate(); 
            // Jueves
            var j = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Jueves);  
            var dd = j.getDate(); 
            j.setDate(dd + 7);
            DiasCopy.Jueves = j.getDate(); 
            // Viernes 
            var v = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Viernes);  
            var dd = v.getDate(); 
            v.setDate(dd + 11);
            DiasCopy.Viernes = v.getDate();      
        this.setState({Dias:DiasCopy})  
    }
    VolverSemana = () => {
        let DiasCopy = Object.assign({}, this.state.Dias);     
        // Variables iniciales para obtener la informacion actual.   
        var a = new Date(); // La fecha actual
            var l = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Lunes);  
            var dd = l.getDate();  
            l.setDate(dd - 7);
            DiasCopy.Lunes = l.getDate(); 
            // Martes
            var m = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Martes);  
            var dd = m.getDate();  
            m.setDate(dd - 7);
            DiasCopy.Martes = m.getDate(); 
            // Miercoles
            var mi = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Miercoles);  
            var dd = mi.getDate(); 
            mi.setDate(dd - 7);
            DiasCopy.Miercoles = mi.getDate(); 
            // Jueves
            var j = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Jueves);  
            var dd = j.getDate(); 
            j.setDate(dd - 7);
            DiasCopy.Jueves = j.getDate(); 
            // Viernes 
            var v = new Date(a.getFullYear(), a.getMonth(), DiasCopy.Viernes);  
            var dd = v.getDate(); 
            v.setDate(dd - 11);
            DiasCopy.Viernes = v.getDate();      
        this.setState({Dias:DiasCopy})          
    }
    componentDidMount() {
        this.fetchOdontologos(); 
        this.SetearDiasInicio(); 
    }
    render(){
        return(
            <div>
                <Especialistas Odontologos={this.state.Odontologos}/>
                <ModalTurno/>
                <ModalDesbloqueo/>
                <TablaTurnos 
                    Dias={this.state.Dias} 
                    PasarSemana={this.PasarSemana} 
                    VolverSemana={this.VolverSemana}
                />
            </div>
        )
    }
}

export default Turnos;
