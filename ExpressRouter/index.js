var express = require('express');

//  Use Express Router
var route = express.Router();

//  Define Home Route
route.get('/', function (req, res) {
    res.send("Index Route is here");
});

//  Module is exporting
module.exports = route;