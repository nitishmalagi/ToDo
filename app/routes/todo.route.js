module.exports = (app) => {
    const todo = require('../controllers/todo.controller');

    // Create a new task
    app.post('/todo', todo.create);

    app.get('/todo', todo.findAll);

    // Update a Note with noteId
    app.put('/todo/:todoId', todo.update);

    // Delete a Note with noteId
    app.delete('/todo/:todoId', todo.delete);
}