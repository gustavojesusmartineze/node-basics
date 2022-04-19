const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
/*
readableStream.setEncoding('utf-8');
readableStream.on('data', function (chunk) {
  // If you set the encoding, you won't need to use toString()
  console.log(chunk);
  data += chunk;
  // console.log(chunk.toString());
});

readableStream.on('end', function () {
  console.log('\n\nThis is the element:\n\n');
  console.log(data);
});

*/

// This process.stdout is a write buffer
process.stdout.write('Hello\n');
process.stdout.write('Hello#1\n');
process.stdout.write('Hello#2\n');

const Transform = stream.Transform;

function ToUpper() {
  Transform.call(this);
}

util.inherits(ToUpper, Transform);

ToUpper.prototype._transform = function (chunk, encoding, callback) {
  chunkUpper = chunk.toString().toUpperCase();
  this.push(chunkUpper);
  callback();
}

let upperCase = new ToUpper();
readableStream
  .pipe(upperCase)
  .pipe(process.stdout);