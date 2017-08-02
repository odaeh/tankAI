var express = require('express');
//- compile and host
//- Open cmd and type in: lsc -c ./public/robot/myrobot.ls && node server

var fs = require("fs");
var app = express();
var path = require('path');
var open = require("open");

// set the static files location /public
app.use(express.static(__dirname + '/public'));

//endpoint for init
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/stage0.html'));
});

var getRobots = function (){
    var bots = []; 
    fs.readdir('./public/robot/', (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach(file => {
            if (path.extname(file) === ".js"){
               bots.push('/robot/' + path.basename(file));
               console.log("Filename: " + path.basename(file));
            }  
        });
        connect()
        // Send list of robots to client:
        app.get('/robots', function(req, res) {
        res.send(JSON.stringify(bots));
        });
        return bots;
    });
}; 

var connect = function (){
     var listener = app.listen(8081);

    console.log('magic happens on: http://localhost:', listener.address().port);

    open("http://localhost:" + listener.address().port);
}

var bots = getRobots();
