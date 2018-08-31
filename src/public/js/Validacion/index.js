module.exports = {
    ValidarNombres(string) {
        var espacio_blanco = /[a-z]/i; 
        if( string == null || string.length < 1 || string.length > 30 || !isNaN(string) || !espacio_blanco.test(string)) {
            return false;
        } else {
            return true;
        }
    },
    ValidarNumero(numero) {
        if(isNaN(numero) || numero == null || numero < 0) {
            return false;
        } else {
            return true;
        }
    }, 
    ValidarDNI(dni) { // FORMATO: 41411125 
        if(isNaN(dni) || dni > 99999999 || dni <= 19999999) {
            return false;
        } else {
            return true;
        }
    },
    ValidarEstadoCivil (estado) {
        if (estado == "Casado" || estado == "Casada" || estado == "Soltero" || estado == "Soltera" || estado == "Viudo" || estado == "Viuda") {
            return true;
        } else {
            return false;
        }
    }
}
