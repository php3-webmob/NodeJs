var express = require('express');
var Route = require('./index');

var app = express();

//
app.use(Route);

app.listen('3000');