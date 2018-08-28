import React, { Component } from 'react';
import Especialistas from './Especialistas/Especialistas';
import ModalTurno from './Modales/ModalTurno';
import ModalDesbloqueo from './Modales/ModalDesbloqueo';
import TablaTurnos from './Tabla/Tabla';
class Turnos extends Component {
    constructor() {
        super();
        this.state = {
            // Especialistas
            Odontologos: [ { _id: "", Nombre: "", Apellido: "", Turnos: [] }],   
            // Horas y fechas 
            Dias: { Lunes: 0 , Martes: 0, Miercoles: 0, Jueves: 0, Viernes: 0 },
            Mes: 0,
            // Nuevo Turno
            ParametroBusqueda: "",
            PacienteResultado: [ { _id: "", Personal: { } } ],
            nuevoTurno : { Paciente: "", FechaTurno: "", Especialista: "",  Duracion: "15" },
            // Turnos
            Turnos: [ { _id: "", Asistio: null, AusenciaAnunciada: null, Paciente: { _id:"", Personal: { Nombre: "", Apellido: "" } }, FechaTurno: "", Especialista: { _id: "" }, Duracion: 15 } ], 
            Pacientes: [ { _id: "", Personal: { Nombre: "", Apellido: "" } } ],
            EspecialistaSeleccionado: { _id: "", Nombre: "Especialista", Apellido: "", Turnos: [], Especialidad: "", Telefono: "", Documento: "", Email: "", Domicilio: "" },
            BloqueBloquado: null
        };     
    }
    // Obtener todos los odontologos
    fetchOdontologos = () => { 
        fetch('/api/Odontologos')  
            .then(res => res.json())
            .then(data => { 
                this.setState({Odontologos: data}); 
            } );
    } 
    // Buscar Paciente
    searchPaciente = () => { 
        if(this.state.ParametroBusqueda != ""){
            fetch(`/api/Pacientes/${this.state.ParametroBusqueda}`)  
            .then(res => res.json())
            .then(data => { 
                this.setState({PacienteResultado: data});
                const NuevoTurnoCopy = Object.assign({}, this.state.nuevoTurno);
                NuevoTurnoCopy.Paciente = data[0]._id; 
                this.setState({nuevoTurno: NuevoTurnoCopy});
                console.log("nuevoTurno",this.state.nuevoTurno )
            } );
        } else {
            console.log("Ingrese un paciente a buscar")
        }
    } 
    // Guardar turno
    saveTurno = (event) => {
        if(this.state.nuevoTurno.Paciente != "" && this.state.nuevoTurno.Especialista != ""){
            fetch('/api/Turnos', {
                method: 'POST',
                body: JSON.stringify(this.state.nuevoTurno),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({NuevoPaciente: { Paciente: "", FechaTurno: "", Especialista: "",  Duracion: 15 }}); 
                })
                .catch(err => {
                    console.log(err); 
                });
        }     
    event.preventDefault();
    } 
    // Funcion para capturar el horario al abrir el modal de nuevo turno
    HandleChangeHorario = (horario, dia) => {
        const mes = this.state.Mes + 1;
        let FechaFinal = "";
        if(mes != 10 || mes != 11 || mes != 12){
            FechaFinal = `${new Date().getFullYear()}-0${mes}-${this.state.Dias[dia]}T${horario}:00.000Z`;
        } else {
            FechaFinal = `${new Date().getFullYear()}-${mes}-${this.state.Dias[dia]}T${horario}:00.000Z`;
        }

        
        console.log("FechaFinal:", FechaFinal);
        this.state.nuevoTurno.FechaTurno = FechaFinal; 
        console.log("nuevoTurno",this.state.nuevoTurno )
    }
    // Funcion para setear el ParametroBusqueda de busqueda
    handleChangeParametroBusqueda = (e) => {
        const  { value }  = e.target;
        this.setState({
            ParametroBusqueda: value
        })  
    }  
    // Funcion para setear la duracion del turno
    handleChangeDuracion = (e) => {
        const Duracion = this.state.nuevoTurno.Duracion;
        const  { value }  = e.target;  
        if (Duracion == 0 || Duracion == 15 || Duracion == 30 || Duracion == 45 || Duracion == 60 || Duracion == 75 || Duracion == 90 || Duracion == 105){ 
            if (e.target.validity.valid) {
                let nuevoTurnoCopy = Object.assign({}, this.state.nuevoTurno);     
                nuevoTurnoCopy.Duracion=value;                     
                this.setState({nuevoTurno:nuevoTurnoCopy});    
            }
        } else if(Duracion == 120){
            if (e.target.validity.valid) {
                let nuevoTurnoCopy = Object.assign({}, this.state.nuevoTurno);     
                nuevoTurnoCopy.Duracion= 105;                     
                this.setState({nuevoTurno:nuevoTurnoCopy});    
            }
        }  else {
            console.log("UwU")
        }  
    }
    // Funcion para setear el especialista
    handleEspecialista = (e) => {
        const  { name }  = e.target;  
        let EspecialistaCopy = Object.assign({}, this.state.EspecialistaSeleccionado);
        EspecialistaCopy = this.state.Odontologos.filter(especialista => { 
            return especialista._id == name;
        });
        this.state.EspecialistaSeleccionado = EspecialistaCopy;
        console.log(this.state.EspecialistaSeleccionado);

        this.state.nuevoTurno.Especialista = EspecialistaCopy[0]._id; 
        console.log("nuevoTurno",this.state.nuevoTurno )
    }
    // Funcion para setear los dias iniciales 
    SetearDiasInicio = () => {
        let DiasCopy = Object.assign({}, this.state.Dias);     
        // Variables iniciales para obtener la informacion actual.   
        var a = new Date(); // La fecha actual
        var dd = a.getDate(); // El numero de dia.
        var dia = a.getDay(); // El dia. (Lunes, Martes, etc)...  
        var MES = a.getMonth();
        this.state.Mes = MES;
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
    // Funcion para avanzar una semana
    PasarSemana = () => {
        let DiasCopy = Object.assign({}, this.state.Dias); //Copiamos los dias del state 
        let MesCopy =  this.state.Mes; // Copiamos el mes del state
        var a = new Date(); // Creamos una fecha actual 
        var l = new Date(a.getFullYear(), MesCopy, DiasCopy.Lunes); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia lunes del estado
        var m = new Date(a.getFullYear(), MesCopy, DiasCopy.Martes); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia martes del estado 
        var mi= new Date(a.getFullYear(), MesCopy, DiasCopy.Miercoles); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia miercoles del estado
        var j = new Date(a.getFullYear(), MesCopy, DiasCopy.Jueves); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia jueves del estado
        var v = new Date(a.getFullYear(), MesCopy, DiasCopy.Viernes); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia viernes del estado
            if (MesCopy == a.getMonth()){ // Si el mes del state es igual al mes actual 
                /*LUNES*/
                var dd = l.getDate();  // obtengo el numero de dia del dia lunes
                l.setDate(dd + 7); // aumento una semana
                DiasCopy.Lunes = l.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MARTES*/
                var dd = m.getDate();  // obtengo el numero de dia del dia martes
                m.setDate(dd + 7); // aumento una semana
                DiasCopy.Martes = m.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MIERCOLES*/
                var dd = mi.getDate();  // obtengo el numero de dia del dia miercoles
                mi.setDate(dd + 7); // aumento una semana
                DiasCopy.Miercoles = mi.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*JUEVES*/
                var dd = j.getDate();  // obtengo el numero de dia del dia jueves
                j.setDate(dd + 7); // aumento una semana
                DiasCopy.Jueves = j.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*VIERNES*/
                var dd = v.getDate();  // obtengo el numero de dia del dia viernes
                v.setDate(dd + 7); // aumento una semana
                DiasCopy.Viernes = v.getDate(); // cargo el lunes de los dias con la semana aumentada
                this.setState({Dias:DiasCopy}) // guardo los dias en el state
                if(MesCopy != l.getMonth()) { // si el mes copiado es diferente al mes de la semana aumentada
                    MesCopy++; // aumento un mes
                }
                this.setState({Mes:MesCopy});  // lo guardo en el state 
            } else if (MesCopy != a.getMonth()) { // si el mes copiado es diferente al mes actual, es porque la funcion yya se habia llamado y ya se paso el mes
                /*LUNES*/
                var dd = l.getDate();  // obtengo el numero de dia del dia lunes
                l.setDate(dd + 7); // aumento una semana
                DiasCopy.Lunes = l.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MARTES*/
                var dd = m.getDate();  // obtengo el numero de dia del dia martes
                m.setDate(dd + 7); // aumento una semana
                DiasCopy.Martes = m.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MIERCOLES*/
                var dd = mi.getDate();  // obtengo el numero de dia del dia miercoles
                mi.setDate(dd + 7); // aumento una semana
                DiasCopy.Miercoles = mi.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*JUEVES*/
                var dd = j.getDate();  // obtengo el numero de dia del dia jueves
                j.setDate(dd + 7); // aumento una semana
                DiasCopy.Jueves = j.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*VIERNES*/
                var dd = v.getDate();  // obtengo el numero de dia del dia viernes
                v.setDate(dd + 7); // aumento una semana
                DiasCopy.Viernes = v.getDate(); // cargo el lunes de los dias con la semana aumentada
                this.setState({Dias:DiasCopy}) // guardo los dias en el state
                if(MesCopy != l.getMonth()) { // si el mes copiado es diferente al mes de la semana aumentada
                    MesCopy++; // aumento un mes
                    this.setState({Mes:MesCopy});  // lo guardo en el state 
                }
            }     
    }
    // Funcion para retroceder una semana
    VolverSemana = () => {
        let DiasCopy = Object.assign({}, this.state.Dias); //Copiamos los dias del state 
        let MesCopy =  this.state.Mes; // Copiamos el mes del state
        var a = new Date(); // Creamos una fecha actual 
        var l = new Date(a.getFullYear(), MesCopy, DiasCopy.Lunes); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia lunes del estado
        var m = new Date(a.getFullYear(), MesCopy, DiasCopy.Martes); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia martes del estado 
        var mi= new Date(a.getFullYear(), MesCopy, DiasCopy.Miercoles); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia miercoles del estado
        var j = new Date(a.getFullYear(), MesCopy, DiasCopy.Jueves); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia jueves del estado
        var v = new Date(a.getFullYear(), MesCopy, DiasCopy.Viernes); // creamos uan nueva fecha a partir de el año de a, del mes del estado y del dia viernes del estado
            if (MesCopy == a.getMonth()){ // Si el mes del state es igual al mes actual 
                /*LUNES*/
                var dd = l.getDate();  // obtengo el numero de dia del dia lunes
                l.setDate(dd - 7); // resto una semana
                DiasCopy.Lunes = l.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MARTES*/
                var dd = m.getDate();  // obtengo el numero de dia del dia martes
                m.setDate(dd - 7); // resto una semana
                DiasCopy.Martes = m.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MIERCOLES*/
                var dd = mi.getDate();  // obtengo el numero de dia del dia miercoles
                mi.setDate(dd - 7); // resto una semana
                DiasCopy.Miercoles = mi.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*JUEVES*/
                var dd = j.getDate();  // obtengo el numero de dia del dia jueves
                j.setDate(dd - 7); // resto una semana
                DiasCopy.Jueves = j.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*VIERNES*/
                var dd = v.getDate();  // obtengo el numero de dia del dia viernes
                v.setDate(dd - 7); // resto una semana
                DiasCopy.Viernes = v.getDate(); // cargo el lunes de los dias con la semana aumentada
                this.setState({Dias:DiasCopy}) // guardo los dias en el state
                if(MesCopy != l.getMonth()) { // si el mes copiado es diferente al mes de la semana aumentada
                    MesCopy--; // disminuyo un mes
                }
                this.setState({Mes:MesCopy});  // lo guardo en el state 
            } else if (MesCopy != a.getMonth()) { // si el mes copiado es diferente al mes actual, es porque la funcion yya se habia llamado y ya se paso el mes
                /*LUNES*/
                var dd = l.getDate();  // obtengo el numero de dia del dia lunes
                l.setDate(dd - 7); // resto una semana
                DiasCopy.Lunes = l.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MARTES*/
                var dd = m.getDate();  // obtengo el numero de dia del dia martes
                m.setDate(dd - 7); // resto una semana
                DiasCopy.Martes = m.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*MIERCOLES*/
                var dd = mi.getDate();  // obtengo el numero de dia del dia miercoles
                mi.setDate(dd - 7); // resto una semana
                DiasCopy.Miercoles = mi.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*JUEVES*/
                var dd = j.getDate();  // obtengo el numero de dia del dia jueves
                j.setDate(dd - 7); // resto una semana
                DiasCopy.Jueves = j.getDate(); // cargo el lunes de los dias con la semana aumentada
                /*VIERNES*/
                var dd = v.getDate();  // obtengo el numero de dia del dia viernes
                v.setDate(dd - 7); // resto una semana
                DiasCopy.Viernes = v.getDate(); // cargo el lunes de los dias con la semana aumentada
                this.setState({Dias:DiasCopy}) // guardo los dias en el state
                if(MesCopy != l.getMonth()) { // si el mes copiado es diferente al mes de la semana aumentada
                    MesCopy--; // disminuyo un mes
                    this.setState({Mes:MesCopy});  // lo guardo en el state 
                }
            }        
    }

    componentDidMount() {
        this.fetchOdontologos(); 
        this.SetearDiasInicio(); 
    }
    render(){
        return(
            <div>               
                <Especialistas 
                    Odontologos={this.state.Odontologos}
                    handleEspecialista={this.handleEspecialista}
                />
                <ModalTurno
                    searchPaciente={this.searchPaciente}
                    ParametroBusqueda={this.state.ParametroBusqueda}
                    PacienteResultado={this.state.PacienteResultado[0]}
                    handleChange={this.handleChangeParametroBusqueda}
                    handleChange2={this.handleChangeDuracion}
                    Duracion={this.state.nuevoTurno.Duracion}
                    saveTurno={this.saveTurno}
                />
                <ModalDesbloqueo/>
                <TablaTurnos 
                    Dias={this.state.Dias} 
                    PasarSemana={this.PasarSemana} 
                    VolverSemana={this.VolverSemana}
                    EspecialistaSeleccionado={this.state.EspecialistaSeleccionado}
                    Turnos={this.state.Turnos} 
                    HandleChangeHorario={this.HandleChangeHorario}
                />
            </div>
        )
    }
}

export default Turnos;
