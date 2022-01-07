// Import students model
const Student = require('../models/studentModel');
const Admin = require('../models/adminModel');

// DEFINE CONTROLLER FUNCTIONS

// Query for getting all student information
exports.listAllStudents = (req, res) => {
    Student.find({}, (err, student) => {
        if (err) {
            res.status(500).send(err);
        };
        res.set('content-type', 'application/json').status(200).json(student);
    });
};

// Query for getting information for a particular student
exports.listOneStudent = (req, res) => {
    Student.findOne({ email: req.headers.role }, (err, student) => {
        if (err) {
            res.status(500).send(err);
        };
        res.set('content-type', 'application/json').status(200).json(student);
    });
};

// Query for adding a new entry into the students collection
exports.createNewStudent = (req, res) => {
    let newStudent = new Student(req.body);
    newStudent.save((err, student) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(201).json(student);
    });
};

// Query for updating student
exports.updateStudent = (req, res) => {
    let filter = { _id: req.params.id };
    let update = req.body;
    Student.findOneAndUpdate(filter, update, { new: true }, (err, student) => {
        if (err) {
            res.status(500).send(err);
        };
        console.log(`${student}`)
        res.status(201).json(student);
    });
};

// Query for deleting an entry from the students colleciton
exports.deleteStudent = (req, res) => {
    Student.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json({ message: `Student successfully deleted` })
    });
};