/**
 * Routes
 * A new directory for routes to server.js
 * this is a manage routes module.
*/

// Settings
const express = require('express');
const router = express.Router(); // Hacemos uso del router.

// Imports routes
const root = require('../routes/root.route'); // Nos traemos toda la capa de red de user
const user = require('../routes/user.route'); // Nos traemos toda la capa de red de user
const message = require('../routes/message.route'); // Nos traemos toda la capa de red de mensajes

// Para añadir las rutas necesitamos el server de express (app).
const routes = function (app) {

    // Declaration of modules used in the routes
    router.use('/', root)
    router.use('/user', user)
    router.use('/message', message)

    // Prefix of router
    app.use('/api', router) // Usamos el server para crear un prefix en las rutas y devolverle el archivo que debe manejar segun sea la ruta.

}

module.exports = routes; // Exportamos nuestra rutas