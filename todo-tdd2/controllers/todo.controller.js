const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {// we add the parameters almost at the end
    TodoModel.create(req.body); // we add the req.body at the end
    res.status(201);
};
