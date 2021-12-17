// Import mongoose
const mongoose = require('mongoose');

// Declare schema and assign schema class
const Schema = mongoose.Schema;

// Create Scheme instance and add Schema properties
const AdminSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    hash: {
        type: String,
        required: false
    },

    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("admin", AdminSchema);