// Create app function
const allRoutes = (app) => {
    const studentList = require('../controllers/studentControllers');
    const adminList = require('../controllers/adminControllers');
    const addStudent = require('../controllers/studentControllers');
    const deleteStudent = require('../controllers/studentControllers');
    const addAdmin = require('../controllers/adminControllers');

    // ### Student routes ###
    // GET request for /students endpoint for all students
    app.route('/api/students').get(studentList.listAllStudents);

    // Post request to add student
    app.route('/api/add-student').post(addStudent.createNewStudent)

    // Delete students
    app.route('/api/del-student/:id').delete(deleteStudent.deleteStudent)

    // GET request for /api/students/:id endpoint for a student by their id
    app.route('/api/students/:id').get(studentList.listOneStudent);


    // ### Admin routes ###
    // GET request for /api/admins endpoint for all students
    app.route('/api/admins').get(adminList.listAllAdmins);

    // Post request to add admin
    app.route('/api/add-admin').post(addAdmin.createNewAdmin)

    // GET request for /api/admins/:id endpoint for an admin by their id
    app.route('/api/admins/:id').get(adminList.listOneAdmin);
}


module.exports = allRoutes;