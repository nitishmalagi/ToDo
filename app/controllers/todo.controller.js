
var Todo = require('../models/todo.model');

exports.create = (req, res) => {
    if (!req.body.task) {
        res.status(400).send({
            message: "Title of the task cannot be empty"
        });
    }

    todo = new Todo({
        task: req.body.task,
        description: req.body.description,
        date: new Date()
    });

    todo.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Couldn't save data..!!"
        }));
}

exports.findAll = (req, res) => {
    Todo.find()
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err.message || "Error in retrieval " }));
}

exports.update = (req, res) => {
    if (!req.body.task) {
        res.status(400).send({
            message: "Title of the task cannot be empty"
        });
    }

    Todo.findByIdAndUpdate(req.params.todoId,
        {
            task: req.body.task,
            description: req.body.description
        },
        {
            new: true
        })
        .then(todo => {
            if (!todo) {
                return res.status(404).send({
                    message: "Todo not found with id " + req.params.todoId
                });
            }
            res.send(todo);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "todo not found with id " + req.params.todoId
                });
            }
            return res.status(500).send({
                message: "Error updating todo with id " + req.params.todoId
            });
        });
}

exports.delete = (req, res) => {
    Todo.findByIdAndRemove(req.params.todoId)
        .then(todo => {
            if (!todo) {
                return res.status(404).send({
                    message: "todo not found with id " + req.params.todoId
                });
            }
            res.send({ message: "todo deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "todo not found with id " + req.params.todoId
                });
            }
            return res.status(500).send({
                message: "Could not delete todo with id " + req.params.todoId
            });
        });
};