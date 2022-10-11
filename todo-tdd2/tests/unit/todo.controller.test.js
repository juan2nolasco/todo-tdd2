const TodoController = require('../../controllers/todo.controller');
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http"); // i have to add this package almost at the end
const newTodo = require("../mock-data/new-todo.json"); // this is after making everything related to httpMocks

TodoModel.create = jest.fn();// mock function, this is necessary to be able to spy and see is the function create in being called

let req, res, next;
beforeEach(() => { //PUT THIS CODE WHEN IS NEEDED TO BE USED IN OTHER TESTS
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe('TodoController.createTodo', () => {
    it('should have a createTodo function', () => {// we firts write this one and make the test pass
        expect(typeof TodoController.createTodo).toBe('function');
    });

    it("should call TodoModel.create", () => {// second
        /* let req, res, next;//*** THIS CODE IS GONNA BE REMOVE FROM HERE WHEN NEEDED IN OTHER TESTS
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null; //*****  */
        req.body = newTodo; // of course this is after importing newTodo    
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);// at the beggining this has to be toBeCalled() and after it has to be change for toBeCalledWith()
    });

    it("should return 201 response code", () => {
        req.body = newTodo;
        TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
    });
});