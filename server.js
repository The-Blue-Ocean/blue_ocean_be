// Require express and cors
const express = require('express');
const cors = require('cors')

// require dotenv
require('dotenv').config()
// Require decoder
// const decoderFirebase = require('./middleware')

// Import DB connection
require('./db_config/db');


// Create express app
const app = express();
app.use(cors())

// Check Token middleware
// app.use(decoderFirebase.decodeToken)

// Use middleware for json
app.use(express.json());

// Import routes
const routes = require('./routes/allRoutes');

routes(app);

module.exports = app