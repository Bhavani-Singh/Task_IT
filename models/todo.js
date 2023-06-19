const mongoose = require('mongoose');

//creating schema
const todoSchema = new mongoose.Schema({
    category:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
});

const TodoList = mongoose.model('Todo', todoSchema);
module.exports = TodoList;