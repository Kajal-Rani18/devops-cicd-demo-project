const http = require('http');
const { getMessage } = require('./app');

http.createServer((req, res) => {
    res.end(getMessage());
}).listen(3000);
