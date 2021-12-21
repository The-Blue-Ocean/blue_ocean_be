// Require express and cors
const express = require('express');

// Import DB connection
require('dotenv').config()
require('./db_config/db');

// Create express app
const app = express();

// Define port to run express app
const port = process.env.PORT || 4000;

// Use middleware for json and cors
app.use(express.json());

// Import student routes
const routes = require('./routes/studentRoutes');
routes(app);

// // Import admin routes
// const adminRoutes = require('./routes/adminRoutes');
// adminRoutes(app);

// Listen to the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app