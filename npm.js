import uc from upperCase;
var http = require('http');
var uc = require('upper-case');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'});
    res.write(uc.upperCase("Hello World"));
    res.end();
}).listen(8082);