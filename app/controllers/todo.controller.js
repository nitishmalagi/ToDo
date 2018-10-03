
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
