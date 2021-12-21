// Create app function
const allRoutes = (app) => {
    const studentList = require('../controllers/studentControllers');
    const adminList = require('../controllers/adminControllers');
    const addStudent = require('../controllers/studentControllers');
    const deleteStudent = require('../controllers/studentControllers');

    // Student routes
    // GET request for /students endpoint for all students
    app.route('/api/students').get(studentList.listAllStudents);

    // Post request to add student
    app.route('/api/add-student').post(addStudent.createNewStudent)

    // Delete students
    app.route('/api/delStudent/:id').delete(deleteStudent.deleteStudent)

    // Admin routes
    // GET request for /admins endpoint for all students
    app.route('/api/admins').get(adminList.listAllAdmins);
}


module.exports = allRoutes;