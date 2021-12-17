// Import students model
const Admin = require('../models/adminModel');

// DEFINE CONTROLLER FUNCTIONS

// Query for getting all student information
exports.listAllAdmins = (req,res) => {
    Admin.find({}, (err, admin) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(admin);
    });
};

exports.createNewAdmin = (req,res) => {
    let newAdmin = new Admin (req,res);
    newAdmin.save((err,admin) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(201).json(admin);
    });
};

exports.deleteAdmin = async (req,res) => {
    await Admin.deleteOne({ _id:req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json({ message: "Admin successfully deleted"})
    });
};