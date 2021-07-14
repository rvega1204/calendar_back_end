/**
 * rutas de usuarios / Auth
 * host + /api/auth
 */

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require( 'dotenv' ).config();


//crear server express
const app = express();

//DB
dbConnection();

//CORS
app.use( cors() );

//directorio publico
app.use( express.static('public') );

//lectura y parseo del body
app.use( express.json() );

//rutas
app.use( '/api/auth', require( './routes/auth' ) );
app.use( '/api/events', require( './routes/events' ) );

//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`);
});