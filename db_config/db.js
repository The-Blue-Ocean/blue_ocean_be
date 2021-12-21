// Export mongoose
const mongoose = require('mongoose');

// Import dotenv to mask connection string
require('dotenv/config');

//assign the MongoDB connection string to a constant
var uri = process.env.DB_CONNECTION;

//declare and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connect to MongoDB Atlas using the mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established");
},
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });