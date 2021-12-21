// Import students model
const Student = require('../models/studentModel');

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
exports.listOneStudent = (req,res) => {
    Student.find({ _id:req.params.id }, (err, student) => {
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

// Query for deleting an entry from the students colleciton
<<<<<<< HEAD
exports.deleteStudent = async (req, res) => {
    await Student.deleteOne({ _id: req.params.id }, (err) => {
=======
exports.deleteStudent = async (req,res) => {
    await Student.deleteOne({ "_id" : ObjectId(`req.params.id`) }, (err) => {
>>>>>>> 1bc92a05d9d4bbb8a12f4697e65a1ed05106cefb
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json({ message: "Student successfully deleted" })
    });
};