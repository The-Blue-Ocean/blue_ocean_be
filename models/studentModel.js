// Import mongoose
const mongoose = require('mongoose');

// Declare schema and assign schema class
const Schema = mongoose.Schema;

// Create Scheme instance and add Schema properties
const StudentSchema = new Schema({
    username: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: false
    },

    rank: {
        type: String,
        required: false
    },

    ets: {
        type: Date,
        required: false
    },

    leave: {
        type: Boolean,
        required: false
    },

    appointments: {
        type: String,
        required: false
    },

    issues: {
        type: String,
        required: false
    },

    currentTasks: {
        type: String,
        required: false
    },

    cohort: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
});

module.exports = mongoose.model("student", StudentSchema);