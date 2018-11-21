var moment = require('moment');
var lodash = require('lodash');
// var str = '2018-11-11';
// var birthdate = moment(str);
// console.log(birthdate);

// var str = "";

// console.log(typeof str);
// console.log(str);

// var json = {id: 28, name: undefined};
// console.log(json);
// str = JSON.stringify(json);
// console.log(str);
// var nJson = JSON.parse(str);
// console.log(nJson);

var json = [
    {id: 5, name:"a"},
    {id: 6, name:"b"}
]
let vv = 5;
let ss = lodash.filter(json, {vv});
console.log(ss);
if (ss.length > 0) {
    console.log(true);
} else {
    console.log(false);
}