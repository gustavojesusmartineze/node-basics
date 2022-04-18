function hello(name, myCallback) {
  setTimeout(function() {
    console.log(`Hello ${name}`);
    myCallback(name);
  }, 3000);
}

function goodBye(name, myCallback) {
  setTimeout(function () {
    console.log(`Good bye ${name}`);
    myCallback(name);
  }, 1000)
}

// This is having controll over order of execution of the async functions.
// console.log('Starting Process');
// hello('Gustavo', function (name) {
//   goodBye(name, function (name){
//     console.log('Finishing process..');
//   });
// });

// Without having controll over order of execution of the async functions.
console.log('Starting Proccess');
hello('Gustavo', function(name) {
  console.log(`Content inside ${name} - Hello`);
});
goodBye('Gustavo', function(name) {
  console.log(`Content inside ${name} - GoodBye`);
  console.log('Finishing process..');
});