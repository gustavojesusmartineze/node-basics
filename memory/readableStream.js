const { Readable } = require('stream');
const readableStream = new Readable('utf-8');

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
readableStream.push(null);


readableStream.pipe(process.stdout);