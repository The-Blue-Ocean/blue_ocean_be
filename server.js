// Require express and cors
const express = require('express');
const cors = require('cors');

// Import DB connection
require('dotenv/config');
require('./db_config/db');

// Create express app
const app = express();

// Define port to run express app
const port = process.env.PORT || 4000;

// Use middleware for json and cors
app.use(express.json());
app.use(cors());

// Import routes


// Listen to the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});