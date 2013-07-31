var http = require('http');

console.log(http)

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello Http');
});

server.listen(8080);

console.log(server);
