const bcrypt = require('bcrypt');

const password = 'gustavo1509';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function (err, hashResult) {
  console.log(`Hash created successfully: ${hashResult}`);
  
  bcrypt.compare(password, hashResult, function (err, result) {
    if (result==false) {
      console.log('Wrong password');
    } else {
      console.log(`Password: ${password} for hash: ${hashResult}`);
    }
  })
});
