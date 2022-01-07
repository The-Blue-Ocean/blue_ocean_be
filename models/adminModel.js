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
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
});

module.exports = mongoose.model("admin", AdminSchema);