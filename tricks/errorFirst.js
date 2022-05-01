const { throws } = require("assert");

function asyncrhonous(callback) {
  setTimeout(() => {
    try {
      // error
      let a = 3 + x;
      callback();
    } catch (err) {
      console.log('here we had an error');
      callback(err, null);
    }
  }, 1000);
}

try {
  asyncrhonous(function(err, data) {
    if (err) {
      console.log('We got some error');
      console.log(err);
      return false;
      // throw err; FOR ASYNCHRONOUS FUNCTIONS WONT WORK
    }

    console.log('All good until this point', data);
  });
} catch (err) {
  console.log('We got some error');
  console.log(err);

}