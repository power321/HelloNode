// function timeout(ms) {
//     console.log(ms)
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }

// let promise = new Promise(function (resolve, reject) {
//     console.log('Promise');
//     resolve();
// });

// timeout(100).then((value) => {
//     console.log(value);
// });

const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(p2), 1000)
})

p1.then(result => console.log(result))
    .catch(error => console.log(error))