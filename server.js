var http = require('http');

var PORT = 8080;
var server = http.createServer(function(request, response) {
    // Set CORS headers
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    if ( request.method === 'OPTIONS' ) {
		response.writeHead(200);
		response.end();
        return;
    }
    console.log('request ', request.url);

});

server.listen(PORT, function() {
    console.log('server is listening on port {8080}')
    
});
