var fs = require('fs');

console.log('begin');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

fs.readFile('README.md', 'utf-8', function(err, data) {
    process.nextTick(() => {
        console.log('new tick');
    })
    console.log('readFile');
    if (err) {
        console.log(err);
    } else {
        // setTimeout(() => {
        //     console.log('timeout');
        // }, 0);
    
        // setImmediate(() => {
        //     console.log('immediate')
        // });
    }
    console.log('readFile OK');
});

process.nextTick(() => {
    console.log('nextTick');
});

setImmediate(() => {
    console.log('setImmediate');
});

console.log('normal');