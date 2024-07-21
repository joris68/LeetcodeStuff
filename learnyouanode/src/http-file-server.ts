

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
        res.writeHead(200, { 'content-type': 'text/plain' });
       let readStream =  fs.createReadStream('test/test.txt');
        readStream.pipe(res);
})
server.listen(8000)