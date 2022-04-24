function anotherFunction() {
  breaks();
}

function breaks() {
  console.log("Called: breaks");
  return 3 + z;
}

function itBreaksAsync() {
  console.log("Called: itBreaksAsync");
  setTimeout(() => {
    try {
      console.log('It breaks async');
      return 3 + z;
    } catch (error) {
      console.log("Error catched inside setTimeout");
      console.log(error);
    }
  }, 3000);
}

try {
  console.log('Started');
  itBreaksAsync();
  anotherFunction();
} catch (error) {
  console.error(error);
  console.error(error.message);
  console.log('its ok we catched the error');
}

console.log('Continue execution here');

console.log('Ended');