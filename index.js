var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

http.listen(3001, function() {
    console.log('listening on localhost:3001');
});