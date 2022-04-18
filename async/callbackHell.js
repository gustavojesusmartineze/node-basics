
function talk(callbackTalk) {
  setTimeout(function () {
    console.log('Blah blah blah...')
    callbackTalk();
  }, 1000);
}

function hello(name, helloCallback) {
  setTimeout(function() {
    console.log(`Hello ${name}`);
    helloCallback(name);
  }, 3000);
}

function goodBye(name, goodByCallback) {
  setTimeout(function () {
    console.log(`Good bye ${name}`);
    goodByCallback(name);
  }, 1000)
}

// Recursive callback functions.
function conversation(name, times, callback) {
  console.log(`Times: ${times}`);
  if (times > 0) {
    console.log("im here");
    talk(function () {
      times--;
      conversation(name, times, callback);
    });
  } else {
    callback(name, function () {
      console.log('Finishing process..');
    });
  }
}

// Callbackhell example
// console.log('Starting Process');
// hello('Gustavo', function (name) {
//   talk(function() {
//     talk(function (){
//       goodBye(name, function (name){
//         console.log('Finishing process..');
//       });
//     });
//   });
// });

hello('Gustavo', function (name) {
  conversation(name, 4, goodBye);
})