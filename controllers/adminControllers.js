// Import students model
const Admin = require('../models/adminModel');

// DEFINE CONTROLLER FUNCTIONS

// Query for getting all admin information
exports.listAllAdmins = (req, res) => {
    Admin.find({}, (err, admin) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(admin);
    });
};

// Query for getting information for a particular admin
exports.listOneAdmin = (req, res) => {
    Admin.find({ _id: req.params.id }, (err, admin) => {
        if (err) {
            res.status(500).send(err);
        };
        res.set('content-type', 'application/json').status(200).json(admin);
    });
};

// Query for adding a new entry into the admins collection
exports.createNewAdmin = (req, res) => {
    let newAdmin = new Admin(req.body);
    newAdmin.save((err, admin) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(201).json(admin);
    });
};

// Query for deleting an entry from the admins colleciton
exports.deleteAdmin = async (req, res) => {
    await Admin.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json({ message: "Admin successfully deleted" })
    });
};