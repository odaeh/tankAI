var express = require('express');
//- compile and host
//- Open cmd and type in: lsc -c ./public/robot/myrobot.ls && node server


var app = express();
var path = require('path');
var open = require("open");

// set the static files location /public
app.use(express.static(__dirname + '/public'));

//endpoint for init
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/stage0.html'));
});

var listener = app.listen(8080);

console.log('magic happens on: http://localhost:', listener.address().port);

open("http://localhost:" + listener.address().port);