var fs = require('fs');

console.log('begin');


fs.readFile('README.md', 'utf-8', function(err, data) {
    console.log('readFile');
    if (err) {
        console.log(err);
    } else {
        setTimeout(() => {
            console.log('timeout');
        }, 0);
    
        setImmediate(() => {
            console.log('immediate')
        });
    }
});


setTimeout(function() {
    console.log('timeout1');
}, 0);

setImmediate(() => {
    console.log('immediate1');
});

console.log('end');