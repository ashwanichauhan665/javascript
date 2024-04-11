const express = require('express');
const app = express();
app.get("",(req,resp)=>{
    resp.send(`<h2><i>Welcome to home page</i></h2>
                <input type="text" placeholder="username" value=${req.query.name} />
                <button>click me</button>
                <a href="/about">Go to about page</a>`);
});
app.get("/about",(req,resp)=>{
    resp.send({
        name:'anil',
        email: 'ashwanin@gmail.com',

    });
});
app.get("/help",(req,resp)=>{
    resp.send("<h1>Welcome, This is Help page</h1>")
})
app.listen(5002);

 
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8081);
