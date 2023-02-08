var fs=require("fs");

var rs= fs.createReadStream('./demo.txt');
//event= action performed on an action
rs.on('open', function(stream) {
    console.log('The file is open')
})