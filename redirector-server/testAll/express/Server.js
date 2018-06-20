var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send('hello there from express');
});

app.listen(8080,function(){
  console.log('server started at 8080');
});

