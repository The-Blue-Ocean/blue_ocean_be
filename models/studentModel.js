// Import mongoose
const mongoose = require('mongoose');

// Declare schema and assign schema class
const Schema = mongoose.Schema;

// Create Scheme instance and add Schema properties
const StudentSchema = new Schema({
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
    },

    rank: {
        type: String,
        required: true
    },

    ets: {
        type: Date,
        required: true
    },

    leave: {
        type: Boolean,
        required: true
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
    }
});

module.exports = mongoose.model("student", StudentSchema);