// var fs = require('fs');
// var aop = require('@tencent/aop');

// console.log('begin');
// var obj = {
//     async test() {
//         console.log('test');
//     }
// }

// fs.readFile('README.md', 'utf-8', function (err, data) {
//     console.log('readFile');
//     if (err) {
//         console.log(err);
//     } else {
//         setTimeout(() => {
//             console.log('timeout');
//         }, 0);

//         setImmediate(() => {
//             console.log('immediate')
//         });
//     }
// });


// setTimeout(function () {
//     console.log('timeout1');
// }, 0);

// setImmediate(() => {
//     console.log('immediate1');
// });


// aop.aop(obj, 'test', () => {
//     console.log('before');
// }, () => {
//     console.log('after');
// });

// obj.test();

// console.log('end');

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
  }
  
  console.log('begin');
  asyncCall();
  console.log('end');
  