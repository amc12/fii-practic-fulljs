'use strict';

// Module dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./app/connection');
const app = express();
const port = 3000;

// add request body data under ".body"
app.use(bodyParser.json());

// Add routes in the application
require('./app/routes/index')(app);

// Default route 
app.get('/', (req, res) => {
    res.send('Hello LUME');
});

// Start the app by listening on 3000
app.listen(port, function() {
    console.log('FiiPractic app started on port ' + port);
});
