const http = require('http');

http.createServer((req,res)=>{
    res.end('Hello from Jenkins CI/CD\nStage1. Version 2 deployed automatically');
}).listen(3000);


