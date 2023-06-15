const express = require('express');
const port = 8000;
const app = express();

app.get('/', function(req, res){
    res.end('<h1>Hello Todo!</h1>');
})

app.listen(port, function(err){
    if(err){
        console.log('Error occured while starting the server: ',port);
        return;
    }

    console.log('The server is running Successfully on the port: ', port);
})