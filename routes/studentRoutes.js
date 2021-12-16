// Create app function
const allStudentRoutes = (app) => {
    const studentList = require('../controllers/studentControllers');

    // Student routes

    // GET request for /students endpoint for all students
    app.route('/students').get(studentList.listAllStudents);
}


module.exports = allStudentRoutes;