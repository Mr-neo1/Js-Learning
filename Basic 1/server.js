const http = require("http");

const server = http.createServer((req, resp) => {
   console.log("Request received");
   
   resp.writeHead(200, { "content-type": "text/html"});
   resp.write("<h1> Wow this is a response from the first server</h1>");
   resp.write('<h2> Ok nice work </h2>');
   resp.write("<button> Click me </button>")
   resp.end('ok bye bye');
});

server.listen(9896, () => {
   console.log('Server is running on port 9896');
});