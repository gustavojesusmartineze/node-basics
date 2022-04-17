// this lib can help us using a .env config file.
require('dotenv').config()
// let greet = 'Hello';
// console.log(greet);

// You can execute this:
// ENV_VAR_NAME=ENV_VAR_VALUE node file_name.js  
// For example,
// NAME=Gustavo node concepts/environment.js
let normalName = process.env.NORMAL_NAME || 'Without name';
let web = process.env.WEB_NAME || 'Without web site';
console.log(`Hello ${normalName}, Web: ${web}`);

console.log('This is america');