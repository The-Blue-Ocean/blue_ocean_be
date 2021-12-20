// Create app function
const allRoutes = (app) => {
    const studentList = require('../controllers/studentControllers');
    const adminList = require('../controllers/adminControllers');

    // Student routes

    // GET request for /students endpoint for all students
    app.route('/api/students').get(studentList.listAllStudents);

    // Admin routes
    // GET request for /admins endpoint for all students
    app.route('/api/admins').get(adminList.listAllAdmins);
}


module.exports = allRoutes;