var fs = require('fs');

console.log('Executed Before file reading');
//async method for reading file.......
// fs.readFile('./file','utf8',function(err,data){
// console.log(data);
// });

// sync method for wrinting file...
var data= fs.writeFileSync('./file','this is writable text','utf8');
console.log(data);
console.log("executed ater reading file");
