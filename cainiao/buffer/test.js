const buf = Buffer.from('chenxian', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

//创建长度为10，默认用0填充的Buffer
const buf1 = Buffer.alloc(10);
//创建长度为10，用0x01填充的Buffer
const buf2 = Buffer.alloc(10, 1);

console.log(buf1);
console.log(buf2);

buf1.write('chenxian');
console.log(buf1.toString('ascii'));

const buf3 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf3);

console.log(json);

