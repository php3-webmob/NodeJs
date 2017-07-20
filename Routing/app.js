var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('WebTech');
});


app.get('/test/:age', function (req, res) {
    res.send(req.params);
});

app.route('/routes')
    .get(function (req,res) {
        res.send('GET');
    })
    .post(function (req,res) {
        res.send('POST');
    });

app.listen('8080');