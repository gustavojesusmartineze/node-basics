let sum = 0;

console.time('Test#1');
for (let i=0; i < 10000000; i++) {
  sum += i;
}
console.timeEnd('Test#1');

console.time('Asynchronous');
asyncrhous()
  .then(() => {
    console.timeEnd('Asynchronous');
  });



sum = 0;
console.time('Test#2');
for (let y=0; y < 10000000; y++) {
  sum++;
}
console.timeEnd('Test#2');


function asyncrhous() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("asyncrhonous finished");
      resolve();
    }, 3000);
  });
}