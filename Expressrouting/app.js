const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("html"));
app.set('view engine', 'pug');

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/about", function (req, res) {

    res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/blog", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/blog.html"));
});

app.post("/blogSubmit", function (req, res) {
    var object = req.body;
    res.render('details', {object: object})
});

app.listen(8080);