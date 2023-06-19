const express = require('express');
const path = require('path');
const port = 8000;

//database
const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

//accessing the static folder for css, js and images
app.use(express.static('assets'));


//rendering the home page
app.get('/', function (req, res) {
    Todo.find({})
        .then(todos => {
            return res.render('home', {
                title: "TASK IT",
                todo_list: todos
            });
        })
        .catch(error => {
            console.log('Error in fetching todos from db:', error);
        })

});


//creating the task
app.post('/create-task', function (req, res) {
    Todo.create({
        category: req.body.category,
        date: req.body.dueDate,
        description: req.body.description
    })
        .then(newTask => {
            console.log("New Task:", newTask);
            return res.redirect('back');
        })
        .catch(err => {
            console.log('Error in creating a task:', err);
            return res.redirect('back');
        });

});


//deleting the task
app.get('/delete-task', function (req, res) {
    let id = req.query.id;

    // Find the contact in the database using id and delete
    Todo.findByIdAndDelete(id)
        .then(() => {
            return res.redirect('back');
        })
        .catch(err => {
            console.log('Error in deleting an object from the database:', err);
            //return res.status(500).send('Internal Server Error');
            return res.redirect('back');
        });

});


app.listen(port, function (err) {
    if (err) {
        console.log('Error occured while starting the server: ', port);
        return;
    }

    console.log('The server is running Successfully on the port: ', port);
})