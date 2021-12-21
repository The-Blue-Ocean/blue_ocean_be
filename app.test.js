import app from './server'
import supertest from 'supertest'
const mongoose = require('mongoose')

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

describe("POST /api/add-student", () => {

    describe("given username, email, name, rank, ets, leave, cohort", () => {
        // should save the info to the database
        test("should respond with a 201 status code", async () => {
            const response = await supertest(app).post("/api/add-student").send({
                username: "superTest",
                email: "testing@test.com",
                name: "Test App Js",
                rank: "Superior",
                ets: "2022-02-12T06:00:00.000Z",
                leave: "true",
                cohort: "MCSP 09"
            })
            expect(response.statusCode).toBe(201)
        })

        test("should specify json in the content type header", async () => {
            const response = await supertest(app).post("/api/add-student").send({
                username: "superTest",
                email: "testing@test.com",
                name: "Test App Js",
                rank: "Superior",
                ets: "2022-02-12T06:00:00.000Z",
                leave: "true",
                cohort: "MCSP 09"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
    })

    describe("when username, email, name, rank, ets, leave, cohort not provided", () => {
        // should respond with a status code of 400
    })
})