//require the HTTP module
var http = require('http');

//port we are going to listen on - make sure your port does not conflict with any others you are using
var PORT = 7000;
var otherPORT = 7500;

//Create a generic fucntion to handle requests and responses
function handleRequest(request, response) {

        response.end("It works! Path hit: " + request.url + " You look nice today, for once...");
   
}

function handleRequest2(request, response) {

        response.end("It works! Path hit: " + request.url + " You did bad and you should feel bad");
   
}

//Create server using node
//We then pass it the handleRequest function to provide it the functionality that it needs to oricess a request
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log("Server is listening on http://localhost:%s", PORT);
    
});

server2.listen(otherPORT, function() {
console.log("Server2 is listening on http://localhost:%s", otherPORT);
});