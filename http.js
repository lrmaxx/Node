const http = require('http');

const server = http.createServer((req ,res) => {
    res.write('hello welcome to server')
    console.log(req.listenerCount);
    res.end();
})

server.listen(3000);