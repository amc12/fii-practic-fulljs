'use strict';

// Module dependencies.
const express = require('express');
const app = express();
const port = 3000;

// Default route 
app.get('/', (req, res) => {
	res.send('Hello LUME');
});

// Start the app by listening on 3000
app.listen(port, function() {
    console.log('FiiPractic app started on port ' + port);
});

