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

    describe("--> given username, email, name, rank, ets, leave, cohort", () => {
        // should save the info to the database
        test("should respond with a 201 status code", async () => {
            const response = await supertest(app).post("/api/add-student").send({
                username: "superTest",
                email: "testing@test.com",
                name: "Test App Js",
                rank: "Superior",
                ets: "2022-02-12T06:00:00.000Z",
                leave: "true",
                cohort: "MCSP 10"
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
                cohort: "MCSP 12"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

        test("response has a _id", async () => {
            const response = await supertest(app).post("/api/add-student").send({
                username: "superTest",
                email: "testing@test.com",
                name: "Test App Js",
                rank: "Superior",
                ets: "2022-02-12T06:00:00.000Z",
                leave: "true",
                cohort: "MCSP 09"
            })
            expect(response.body._id).toBeDefined()
        })
    })

    describe("--> when username, email, name, rank, ets, leave, or cohort not provided", () => {
        test("should respond with a status code of 500", async () => {
            const bodyData = [
                { username: "superTest" },
                { email: "testing@test.com" },
                { name: "Test App Js" },
                {}
            ]

            // Loop over bodyData
            for (const body of bodyData) {
                const response = await supertest(app).post("/api/add-student").send(body)
                expect(response.statusCode).toBe(500)
            }
        })
    })
})

describe("GET /api/students", () => {

    describe("--> get all students from database", () => {
        // should save the info to the database
        test("should respond with a 201 status code", async () => {
            const response = await supertest(app).get("/api/students")
            expect(response.statusCode).toBe(200)
        })
    })
})

describe("POST /api/add-admin", () => {

    describe("--> given username, email, name", () => {
        // should save the info to the database
        test("should respond with a 201 status code", async () => {
            const response = await supertest(app).post("/api/add-admin").send({
                username: "SuperTest",
                email: "supertest@adminmail.com",
                name: "Super Admin Test"
            })
            expect(response.statusCode).toBe(201)
        })

        test("should specify json in the content type header", async () => {
            const response = await supertest(app).post("/api/add-admin").send({
                username: "SuperTest",
                email: "supertest@adminmail.com",
                name: "Super Admin Test"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

        test("response has a _id", async () => {
            const response = await supertest(app).post("/api/add-admin").send({
                username: "SuperTest",
                email: "supertest@adminmail.com",
                name: "Super Admin Test"
            })
            expect(response.body._id).toBeDefined()
        })
    })

    describe("--> when username, email, or name not provided", () => {
        test("should respond with a status code of 500", async () => {
            const bodyData = [
                { username: "superTest" },
                { email: "testing@test.com" },
                { name: "Super Admin Test" },
                {}
            ]

            // Loop over bodyData
            for (const body of bodyData) {
                const response = await supertest(app).post("/api/add-admin").send(body)
                expect(response.statusCode).toBe(500)
            }
        })
    })
})

describe("GET /api/admins", () => {

    describe("--> get all admin accounts from database", () => {
        // should save the info to the database
        test("should respond with a 201 status code", async () => {
            const response = await supertest(app).get("/api/admins")
            expect(response.statusCode).toBe(200)
        })
    })
})