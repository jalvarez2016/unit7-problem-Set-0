const http = require('http');
const hostName = '127.0.0.1';
const host = 8001;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log("hi");
    res.writeHead(200);
    res.write('Hello World!');
    res.end();
}

server.listen(host, () => {
    console.log(`Server running at http://${hostName}:${host}/`)
})