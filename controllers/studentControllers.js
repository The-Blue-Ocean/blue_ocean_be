// Import students model
const Student = require('../models/studentModel');

// DEFINE CONTROLLER FUNCTIONS

// Query for getting all student information
exports.listAllStudents = (req,res) => {
    Student.find({}, (err, student) => {
        if (err) {
            res.status(500).send(err);
        };
        res.set('content-type', 'application/json').status(200).json(student);
    });
};

exports.createNewStudent = (req,res) => {
    let newStudent = new Student (req,res);
    newStudent.save((err,student) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(201).json(student);
    });
};

exports.deleteStudent = async (req,res) => {
    await Student.deleteOne({ _id:req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json({ message: "Student successfully deleted"})
    });
};