// let buffer = Buffer.alloc(1);
// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1,2,10]);
// let buffer = Buffer.from('Hello', "utf-8")

// console.log(buffer);
// console.log(buffer.toString());

// -- ABC with buffer
console.log('Alphabet')
// keep in mind that values are in hexadecimal 
let abc = Buffer.alloc(26);
console.log(abc);

for (let i=0; i < abc.length; i++) {
  abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());