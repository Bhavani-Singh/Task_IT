const express = require('express');
const path = require('path');
const port = 8000;


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


//accessing the static folder for css, js and images
app.use(express.static('assets'));

//creating the array for practice

let todo=[
    {
        id: 1,
        category: "personal",
        dueDate: "2023-06-15",
        description: "buy vegetables",
        done: true
    },

    {
        id: 2,
        category: "office",
        dueDate: "2023-06-15",
        description: "submit the documents",
        done: true
    },

    {
        id: 3,
        category: "school",
        dueDate: "2023-06-15",
        description: "complete the assignment",
        done: false
    },
];

app.get('/', function(req, res){
    res.render('home',{
        title: "TASK IT",
        todo_list: todo
    });
});


app.listen(port, function(err){
    if(err){
        console.log('Error occured while starting the server: ',port);
        return;
    }

    console.log('The server is running Successfully on the port: ', port);
})