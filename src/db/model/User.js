const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({  
        username: String,
        password: String,
        create_at: {
            type: Date,
            default: Date.now 
        },
        last_login: {
            type: Date,
            default: Date.now
        },
        Tipo: {
            type: Number,
            default: 1
        }
})
// Metodo para guardar la contraseña encriptada
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
// Metodo para validar la contraseña ingresada con la encripada ya guardada
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);