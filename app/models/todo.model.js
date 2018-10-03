
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: String,
    description: String,
    date: Date
});

module.exports = mongoose.model('Todo', todoSchema);  
