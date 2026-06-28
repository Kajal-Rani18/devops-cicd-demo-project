const http = require('http');

http.createServer((req,res)=>{
    res.end('Hello from Jenkins CI/CD\nStage1. Version 2 deployed automatically\nStage2. Testing of the Webhook');
}).listen(3000);


