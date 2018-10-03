
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// parse requests 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todoapp", { useNewUrlParser: true })
    .then(() => console.log('Successfully established DB connection'))
    .catch((err) => {
        console.log('Could not establish DB connection', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({ message: "ToDo landing page" })
})

require('./app/routes/todo.route.js')(app);

app.listen(3000, () => {
    console.log('ToDo app live on port 3000');
});
