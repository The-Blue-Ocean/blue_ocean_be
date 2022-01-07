// Create app function
const allRoutes = (app) => {
    const studentList = require('../controllers/studentControllers');
    const adminList = require('../controllers/adminControllers');
    const addStudent = require('../controllers/studentControllers');
    const addAdmin = require('../controllers/adminControllers');
    const updateStudent = require('../controllers/studentControllers');
    const updateAdmin = require('../controllers/adminControllers')
    const deleteStudent = require('../controllers/studentControllers');
    const deleteAdmin = require('../controllers/adminControllers');

    // ### Student routes ###
    // GET request for /students endpoint for all students
    app.route('/api/students').get(studentList.listAllStudents);

    // GET request for /api/students/:id endpoint for a student by their id
    app.route('/api/student').get(studentList.listOneStudent);

    // Post request to add student
    app.route('/api/add-student').post(addStudent.createNewStudent)

    // Patch request to update student
    app.route('/api/update-student/:id').patch(updateStudent.updateStudent)

    // Delete students
    app.route('/api/del-student/:id').delete(deleteStudent.deleteStudent)


    // ### Admin routes ###
    // GET request for /api/admins endpoint for all admins
    app.route('/api/admins').get(adminList.listAllAdmins);

    // Post request to add admin
    app.route('/api/add-admin').post(addAdmin.createNewAdmin)

    // Patch request to update admin
    app.route('/api/update-admin/:id').patch(updateAdmin.updateAdmin)

    // GET request for all admin if admin acount or specific admin
    app.route('/api/admin').get(adminList.listAdminInfo);

    // Get admin by email
    // app.route('/api/adminEmail').get(listOneAdminEmail.listOneAdminEmail);

    // Delete admin
    app.route('/api/del-admin/:id').delete(deleteAdmin.deleteAdmin)
}


module.exports = allRoutes;