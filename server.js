// Require express and cors
const express = require('express');
const cors = require('cors')

// Import DB connection
require('dotenv').config()
require('./db_config/db');

// Create express app
const app = express();
app.use(cors())

// Use middleware for json
app.use(express.json());

// Import routes
const routes = require('./routes/allRoutes');
routes(app);

module.exports = app