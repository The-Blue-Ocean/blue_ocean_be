// Import admin model
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
    Admin.find({ email: req.headers.role }, (err, admin) => {
        if (err) {
            res.status(500).send(err);
        };

        try {
            const authorization = admin[0].isAdmin

            if (authorization) {
                Admin.find({}, (err, admin) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    return res.set('content-type', 'application/json').status(200).json(admin);
                });
            } else {
                return res.set('content-type', 'application/json').status(200).json(admin);
            }

        } catch (error) {
            return res.json({ message: 'You need to login!' })
        }
    });
};

// Query for getting information for a particular admin
exports.checkAdmin = (req, res) => {
    // console.log(req.headers.role)

    Admin.find({ email: req.headers.role }, (err, admin) => {
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

// Query for updating admin info
exports.updateAdmin = (req, res) => {
    let filter = { _id: req.params.id };
    let update = req.body;
    Admin.findOneAndUpdate(filter, update, { new: true }, (err, admin) => {
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