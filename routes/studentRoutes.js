// Create app function
const allRoutes = (app) => {
    const studentList = require('../controllers/studentControllers');
    const adminList = require('../controllers/adminControllers');


    // Student routes
    // GET request for /api/students endpoint for all students
    app.route('/api/students').get(studentList.listAllStudents);

    // GET request for /api/students/:id endpoint for a student by their id
    app.route('/api/students/:id').get(studentList.listOneStudent);



    // Admin routes
    // GET request for /api/admins endpoint for all students
    app.route('/api/admins').get(adminList.listAllAdmins);

    // GET request for /api/admins/:id endpoint for an admin by their id
    // app.route('/api/admins/:id').get(adminList.listOneAdmin);
}


module.exports = allRoutes;