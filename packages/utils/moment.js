const moment = require('moment');

let now = moment();
let dateN = new Date();
console.log(now.toString());
console.log(dateN.toString());

console.log(now.format('YYYY/MM/DD - HH:mm'));

