const express = require('express');
const router = express.Router();
const player = require('./playerRoutes');

module.exports = (app) => {

    // Handle for the player routes
    router.use('/', player);

    // Expose them to the rest of the application
    app.use('/', router);

}
