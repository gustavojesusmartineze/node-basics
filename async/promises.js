function talk(name) {
  return new Promise(function (resolve, reject) {
    // Set false to see errors
    if (true) {
      setTimeout(function () {
        console.log('Blah blah blah...')
        resolve(name)
        }, 1000);
    } else {
      error = new Error('Warning this is going to crash everything');
      reject(error);
    }
  });
}

function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hello ${name}`);
      resolve(name);
    }, 1500);
  });
}

function goodBye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Good bye ${name}`)
      resolve(name);
    }, 1000);
  })
}

console.log('Starting Process');
hello('Gustavo')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(goodBye)
  .then((name) => {
    // You can access name value here because is the value that was returned/resolve
    // on the goodBye function/promise
    console.log(`${name} Process finished`); 
  })
  .catch((error) => {
    console.log(`ErrorMessage: ${error}`)
  });