const supertest = require('supertest');
const app = require('../app');
const User = require('../models/User');
const mongoose = require('mongoose');

const request = supertest(app);

var id = "";

const user = {
    firstname : "admin",
    lastname : "admin",
    dateofbirth : "1999-12-12",
    address : "admin",
    phone : "1234567890",
    role:"admin",
    username: "admin",
    password: "admin",
    email: "admin@gmail.com"
}

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request.get('/');
        expect(response.statusCode).toBe(404);
    });
    });

describe('Test the user routes', () => {
    test('It should response the GET method', async () => {
        const response = await request.get('/user/user');
        expect(response.statusCode).toBe(200);
    });
    });

describe ('Test the user register', () => {
    test('It should response the post method', async () => {
        const response = await request.post('/user/register')
        .send(user)
        .expect(201)
        
    });
    });

describe('Test the user login', () => {
    test('It should response the post method', async () => {
        const response = await request.post('/user/login')
        
        .send(user)
        .expect(200)
        id =  response.userid;

        expect(response.statusCode).toBe(200);
    });



describe("test the user delete", () => {
    test("It should response the delete method", async () => {
        const response = await request.delete(`/user/user/${id}`)
        .expect(500)
    });
    });

describe("test the user update", () => {
    test("It should response the update method", async () => {
        const response = await request.put(`/user/user/${id}`)
        .send(user)
        .expect(500)
    });

});
// get one user by id
describe("test the user get by id", () => {
    test("It should response the get by id method", async () => {
        const response = await request.get(`/user/user/${id}`)
        .expect(404)
    });
});

// get one user by username
describe("test the user get by username", () => {
    test("It should response the get by username method", async () => {
        const response = await request.get(`/user/user/${user.username}`)
        .expect(404)
    });
});

// get one user by email
describe("test the user get by email", () => {
    test("It should response the get by email method", async () => {
        const response = await request.get(`/user/user/${user.email}`)
        .expect(404)
    });
});
// get profile
describe("test the user get profile", () => {
    test("It should response the get profile method", async () => {
        const response = await request.get(`/user/profile`)
        .expect(500)
    });

});
// get all users
describe("test the user get all", () => {
    test("It should response the get all method", async () => {
        const response = await request.get(`/user/all`)
        .expect(500)
    });

// get all users by role
describe("test the user get all by role", () => {
    test("It should response the get all by role method", async () => {
        const response = await request.get(`/user/all/${user.role}`)
        .expect(404)
    });





    

    });
    });
    });