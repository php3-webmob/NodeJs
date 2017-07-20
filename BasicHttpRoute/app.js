var express = require('express');
var app = express();


//  GET Request
app.get('/index', function (req, res) {
    res.send("GET Request");
});
//  Same Route but POST Request
app.post('/index', function (req, res) {
    res.send("POST Request");
});
//  Put Request
app.put('/put', function (req, res) {
    res.send("PUT Request");
});
//  Delete Request
app.delete('/delete', function (req, res) {
    res.send("DELETE Request");
});

app.listen('8080');