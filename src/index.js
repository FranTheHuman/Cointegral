// Express
const express = require('express');
const app = express();

// Modulos 
const path = require('path');
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');

// Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Client/Views'));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret: 'thefluxporter',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(connectFlash());

// ROUTES 
const routes = require('./routes/routes')(app, passport);

// Static Files (React)
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// PASSPORT CONFIG
 const pass = require('./config/passport')(passport);

// Server And DB
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const DB = 'mongodb://localhost:27017/odontologia';
        // Database
mongoose.connect(DB,{ useNewUrlParser: true }, (err, res) => {
    if(err) { throw err; console.log('Error on Database connection,' + err)}
    console.log('Database Connected')
        // Server
    app.listen(port, ()=>{console.log(`Server listen on port ${port}`)});
})

