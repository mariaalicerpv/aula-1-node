var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<center><h2>boa tarde!</h2></center>');
}).listen(80);
