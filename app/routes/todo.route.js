module.exports = (app) => {
    const todo = require('../controllers/todo.controller');

    // Create a new task
    app.post('/todo', todo.create);
}