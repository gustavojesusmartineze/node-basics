// you can access require
// require('modulename');

// Never do this on production :)
// console.log(global);
// console.log(setInterval);
// console.log(this);

// We can clear current Interval when needed
// let i = 0;
// let interval = setInterval(function () {
//   if (i === 5) {
//     clearInterval(interval)
//   }
//   i++;
//   console.log('Hello clarice');
// }, 1000);


// You can set an inmediatly execution of some logic
// setImmediate will add the callback to the next iteration of the event loop
// setImmediate(function (){
//   console.log("This is america");
// });

// You can access everything inside process global.
// console.log(process);

// This is the path of the directory.
console.log(__dirname);

// This is the path of the file.
console.log(__filename);

global.myVarName = 'This is a bad practice should be avoided';

console.log(global.myVarName);

// URL is a global.
const myURL = new URL('/gustavo', 'https://example.org/');
console.log(myURL);