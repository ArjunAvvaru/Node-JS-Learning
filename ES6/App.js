var http = require("http");

var requestListner = function(req, res){
    res.writeHead(200);
        res.end("<h1Welcome to Pefa Systems></h1>")
};

var server = http.createServer(requestListner);

server.listen("3000");