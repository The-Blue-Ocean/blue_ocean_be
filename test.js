const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');

beforeEach((done) => {
    mongoose.connect(process.env.DB_CONNECTION, 
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => done());
});
  
afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
    });
});
// FINISH WRITING THIS TEST LATER TODAY

test("GET /api/students", async () => {
    await supertest(app).get("/api/students")
    .expect(200).then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(5);
  
        // Check data
        expect(response.body[0]._id).toBe(students[0]._id);
        expect(response.body[0].title).toBe(students[0].name);
        expect(response.body[0].content).toBe(students[0].email);
    });
});