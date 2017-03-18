'use strict';

// Module dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serveStatic = require('serve-static');
const db = require('./app/connection');
const app = express();
const port = 3000;

// Set views path, template engine and default layout
app.use('/lib', serveStatic(path.normalize(__dirname) + '/bower_components'));
app.use(serveStatic(path.normalize(__dirname) + '/public'));

// add request body data under ".body"
app.use(bodyParser.json());

// Add routes in the application
require('./app/routes/index')(app);

// Default route 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

// Start the app by listening on 3000
app.listen(port, function() {
    console.log('FiiPractic app started on port ' + port);
});
