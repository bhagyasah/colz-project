
var http = require('http');
var server = http.createServer(engine);
server.listen(8080,function(){
  console.log("server was hited by a requst")
})

function engine(req,res){
  res.writeHead(200,{'Content-Type':'text/plain','BlahBlah':'from redirector server'});
  res.end("hey  this is a server sending resose for body"+req.url);
}

