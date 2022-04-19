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

async function stablishConversation (name) {
  let helloCall = await hello(name);
  let blah1 = await talk(name);
  let blah2 = await talk(name);
  let blah3 = await talk(name);
  let blah4 = await talk(name);
  let blah5 = await talk(name);
  let goodByeCall = await goodBye(name);
  console.log("Actually here is where process Ended");
}

console.log("Process Started");
stablishConversation('Gustavo');
console.log("Process Ended");