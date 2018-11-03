const path = require('path');
var fs = require('fs');

var str = path.join(__dirname, "./test.txt");
fs.readFile(str, function(err, data) {
    if (err) {
       console.log(err.stack) ;
       return ;
    }
    console.log(data.toString());
});

console.log(str)