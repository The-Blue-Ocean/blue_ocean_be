// Import students model
const Students = require('../models/studentModel');

// DEFINE CONTROLLER FUNCTIONS

// Query for getting all student information
exports.listAllStudents = (req,res) => {
    Students.find({}, (err, student) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(student);
    });
};